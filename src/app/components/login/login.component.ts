import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  onSubmit(): void {
    const { username, password } = this.loginForm.value;

    console.log('Login form submitted with:', { username, password });

    this.authService.login(username, password).subscribe({
      next: (response) => {
        console.log('API response:', response); // Log the response for debugging
        if (response.message === 'Login successful') { // Check if login succeeded
          alert('Login successful!');
          this.router.navigate(['/tasks']); // Redirect to the task list page
        } else {
          console.error('Login failed:', response.message);
          alert('Login failed: ' + response.message);
        }
      },
      error: (err) => {
        console.error('Error during login:', err); // Log the error for debugging
        alert('An error occurred. Please try again.');
      },
    });
  }
}
