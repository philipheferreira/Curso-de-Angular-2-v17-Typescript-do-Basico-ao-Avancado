import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component'; // precisa criar pra importar um novo component

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewComponent], // precisa declarar ele no imports
  template: `
  <h1>Template geral</h1>
  <p class="texto">Teste de texto funcional</p>
  Antigo: <app-new-component></app-new-component> <!-- Para aparecer ele é necessario realizar a chamada -->
  Novo: <app-new-component/>
  `,
  styles: [`
      .texto{color: blue}
    `]
})
export class AppComponent {
  title = 'componentProject';
}


// para gerar um novo componente e uma nova pasta é só digitar o comando: ng generate component components/new-component
