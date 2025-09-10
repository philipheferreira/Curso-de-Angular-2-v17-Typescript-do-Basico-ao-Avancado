import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component'; // precisa criar pra importar um novo component

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewComponent], // precisa declarar ele no imports para funcionar
  template: `
  <h1>Template geral</h1>
  <p class="texto">Teste de texto funcional</p>
  Antigo: <app-new-component></app-new-component> <!-- Para aparecer ele é necessario realizar a chamada. Assim -->
  Novo: <app-new-component/> <!-- Chamada mais rapida e pratca -->
  `,
  styles: [` /* parte de estilização local */
      .texto{color: blue}
    `]
})
export class AppComponent { /* Criação de variaveis que podem ser chamadas */
  title = 'componentProject'; // Nome do component
}


// para gerar um novo componente e uma nova pasta é só digitar o comando: ng generate component components/new-component
