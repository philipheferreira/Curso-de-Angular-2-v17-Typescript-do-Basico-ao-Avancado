import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
  <h1>Template geral</h1>
  <p class="texto">Teste de texto funcional</p>
  `,
  styles: [`
      .texto{color: blue}
    `]
})
export class AppComponent {
  title = 'componentProject';
}
