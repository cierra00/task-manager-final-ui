import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent implements OnInit {
markTaskComplete(arg0: any) {
throw new Error('Method not implemented.');
}
navigateToAddTask() {
throw new Error('Method not implemented.');
}
logout() {
throw new Error('Method not implemented.');
}
deleteTask(arg0: any) {
throw new Error('Method not implemented.');
}
  tasks: any[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }
}
