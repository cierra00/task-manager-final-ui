import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    }, { validators: this.passwordMatchValidator });
  }

  // Custom validator to check if passwords match
  passwordMatchValidator(formGroup: FormGroup): null | object {
    return formGroup.get('password')?.value === formGroup.get('confirmPassword')?.value
      ? null
      : { mismatch: true };
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const { username, password } = this.registerForm.value;
      this.authService.register({ username, password }).subscribe({
        next: () => {
          alert('Registration successful!');
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Registration error:', err);
          alert('Registration failed. Please try again.');
        },
      });
    }
  }
}
