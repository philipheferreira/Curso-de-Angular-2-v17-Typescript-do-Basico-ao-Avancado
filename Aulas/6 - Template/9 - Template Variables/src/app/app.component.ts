import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateVariables } from './components/template/template-variables/template-variables.component'

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TemplateVariables
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project-binding';
}
