import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateVariables } from './components/template/template-variables/template-variables.component' /* Chamada do componente */

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TemplateVariables /* Importa o component criado*/
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project-binding';
}
