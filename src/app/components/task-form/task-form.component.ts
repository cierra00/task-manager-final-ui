import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule], // Ensure ReactiveFormsModule is included
  templateUrl: './task-form.component.html',
})
export class TaskFormComponent implements OnInit {
  taskForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private router: Router
  ) {
    this.taskForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      completed: [false],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.taskForm.valid) {
      const newTask = this.taskForm.value;
      this.taskService.createTask(newTask).subscribe({
        next: () => {
          alert('Task created successfully!');
          this.router.navigate(['/tasks']);
        },
        error: (err) => {
          console.error('Error creating task:', err);
          alert('Failed to create task. Please try again.');
        },
      });
    } else {
      alert('Please fill in all required fields.');
    }
  }
  navigateToTask(): void {
    this.router.navigate(['/tasks']);
  }
}
