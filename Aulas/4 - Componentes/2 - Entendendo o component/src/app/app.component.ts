/* Para esse projeto será deletado os arquivos components de html, css e spec e sera utilizado
apenas o que tiver dentro do component */

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet], // caso precise adicionar uma dependencia é só digitar no imports que será adicionado automaticamente
  template: `
    <h1>Component angular</h1>
    <p>Teste de texto aleatorio</p>
  `,// O arquivo template é usado para renderizar template que é direcionado a ele e aparece direto na pagina
  //templateUrl: './app.component.html', esse arquivo puxa um html pra focar como principal
  //styleUrl: './app.component.css', // esse syle pode ser utilizado mas só da pra puxar 1 arquivo css
  //styleUrls: ['./app.component.css'] // nesse podesse adicionar mais de um css
  styles: [`.name{}`]
})
export class AppComponent {
  title = 'componentProject';
}
