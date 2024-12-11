import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:4800'; // Base API URL

  constructor(private http: HttpClient) {}

  // Fetch all tasks
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}/tasks`);
  }

  // Fetch a single task by ID
  getTaskById(id: string): Observable<Task> {
    return this.http.get<Task>(`${this.baseUrl}/tasks/${id}`);
  }

  // Create a new task
  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.baseUrl}/tasks`, task);
  }

  // Update an existing task by ID
  updateTask(id: string, task: Partial<Task>): Observable<Task> {
    return this.http.put<Task>(`${this.baseUrl}/tasks/${id}`, task);
  }

  // Delete a task by ID
  deleteTask(id: string): Observable<{ success: boolean }> {
    return this.http.delete<{ success: boolean }>(`${this.baseUrl}/tasks/${id}`);
  }

  // Fetch all users
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/users`);
  }

  // Fetch a single user by ID
  getUserById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users/${id}`);
  }

  // Create a new user
  createUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/users`, user);
  }

  // Update an existing user by ID
  updateUser(id: string, user: Partial<any>): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/users/${id}`, user);
  }

  // Delete a user by ID
  deleteUser(id: string): Observable<{ success: boolean }> {
    return this.http.delete<{ success: boolean }>(`${this.baseUrl}/users/${id}`);
  }
}
