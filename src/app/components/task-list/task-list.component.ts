import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = []; // List of tasks
 

  constructor(
    private taskService: TaskService,
    private authService: AuthService, 
    private router: Router 

  ) {}

  ngOnInit(): void {
    this.loadTasks(); // Load tasks on initialization
  }

  // Load tasks from the API
  loadTasks(): void {
    this.taskService.getTasks().subscribe({
      next: (tasks) => (this.tasks = tasks),
      error: (err) => console.error('Error loading tasks:', err),
    });
  }

  // Delete a task by ID
  deleteTask(id: string): void {
    console.log('Deleting task with ID:', id); // Debug log
    if (!id) {
      console.error('No ID provided for deletion!');
      return;
    }
    this.taskService.deleteTask(id).subscribe({
      next: () => {
        console.log('Task deleted successfully!');
        this.loadTasks(); // Refresh the task list
      },
      error: (err) => console.error('Error deleting task:', err),
    });
  }

  // Mark a task as complete
  markTaskComplete(id: string): void {
    console.log('Marking task as complete with ID:', id); // Debug log
    this.taskService.updateTask({ id, completed: true }).subscribe({
      next: () => {
        console.log('Task marked as complete!');
        this.loadTasks(); // Refresh the task list
      },
      error: (err) => console.error('Error marking task as complete:', err),
    });
  }
  // Logout user
  logout(): void {
    this.authService.logout(); // Clear authentication state
    this.router.navigate(['/login']); // Redirect to login page
  }

  navigateToAddTask(): void {
    this.router.navigate(['/tasks/new']);
  }
  
}
