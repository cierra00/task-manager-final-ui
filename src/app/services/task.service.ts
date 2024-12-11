import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model'; // Correct import path


@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private baseUrl = 'http://localhost:4800'; // API base URL

  constructor(private http: HttpClient) {}

  // Fetch all tasks
  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/tasks`);
  }

  // Fetch a single task by ID
  getTaskById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/tasks/${id}`);
  }

  // Create a new task
  createTask(task: { name: string; description: string; completed: boolean }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/tasks`, task);
  }

  // Update an existing task by ID
  updateTask(task: { id: string; completed: boolean }): Observable<Task> {
    return this.http.put<Task>(`${this.baseUrl}/tasks`, task);
  }

  // Delete a task by sending its ID in the request body
  deleteTask(id: string): Observable<any> {
    return this.http.request('DELETE', `${this.baseUrl}/tasks`, {
      body: { id }, // Sending the ID in the request body
      headers: { 'Content-Type': 'application/json' }, // Optional: Add headers if needed
    });
  }
}
