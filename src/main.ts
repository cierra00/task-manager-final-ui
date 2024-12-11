import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/components/login/login.component';
import { TaskFormComponent } from './app/components/task-form/task-form.component';
import { TaskListComponent } from './app/components/task-list/task-list.component';
import { RegisterComponent } from './app/components/register/register.component'; // Import the register component

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter([
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'tasks', component: TaskListComponent },
      { path: 'tasks/new', component: TaskFormComponent },
      { path: 'register', component: RegisterComponent }, // Add the route for register
    ]),
  ],
});
