import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from "./components/footer/footer.component"; // Adjust path if needed

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-manager-ui';
}
