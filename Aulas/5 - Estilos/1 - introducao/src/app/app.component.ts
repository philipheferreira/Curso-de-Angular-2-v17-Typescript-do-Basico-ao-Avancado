import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngulaSvgComponent } from './components/angula-svg/angula-svg.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AngulaSvgComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '1 - introdução estilos';
}
