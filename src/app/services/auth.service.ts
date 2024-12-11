import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:4800';
  private loggedIn = false;

  constructor(private http: HttpClient) {}

  // Login API call
  login(username: string, password: string): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(`${this.baseUrl}/login`, {
      username,
      password,
    });
  }

  // Set authentication state
  setLoggedIn(state: boolean): void {
    this.loggedIn = state;
  }

  // Check if the user is logged in
  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  // Register a new user
  register(user: { username: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, user);
  }

  // Logout functionality
  logout(): void {
    console.log('Logging out'); // Debug log
    this.loggedIn = false; // Update the loggedIn state
    localStorage.removeItem('authToken'); // Remove any stored token
  }
}
