import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TemplateControlFlowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '002-for';
}
