/* Para esse projeto será deletado os arquivos components de html, css e spec e sera utilizado
apenas o que tiver dentro do component */

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({ // é um decoretor. O decoretaro é um arroba com alguma coisa
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule ,RouterOutlet], // caso precise adicionar uma dependencia é só digitar no imports que será adicionado automaticamente
  template: `
    <h1>Component angular</h1>
    <p>Teste de texto aleatorio</p>

    {{ title }}
  `,// O arquivo template é usado para renderizar template que é direcionado a ele e aparece direto na pagina
  //templateUrl: './app.component.html', esse arquivo puxa um html pra focar como principal
  //styleUrl: './app.component.css', // esse style pode ser utilizado mas só da pra puxar 1 arquivo css
  //styleUrls: ['./app.component.css', '/app.componentOutro.css'] // nesse podesse adicionar mais de um css
  styles: [`.name{}`] //A tag styles permiti programar css nesse component
})
export class AppComponent {
  title = 'Projeto 2 - entendendo componentes';
}
