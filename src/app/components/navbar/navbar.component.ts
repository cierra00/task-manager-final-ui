import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isLoggedIn = false; // Update with actual authentication logic

  login(): void {
    console.log('Login button clicked');
    // Add login logic here
  }

  logout(): void {
    console.log('Logout button clicked');
    // Add logout logic here
  }
}
