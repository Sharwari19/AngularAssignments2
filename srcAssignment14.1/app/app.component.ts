import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Component1Component, Component2Component, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment14.1';
}
