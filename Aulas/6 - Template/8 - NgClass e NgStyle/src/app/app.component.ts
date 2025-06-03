import { CommonModule, NgClass, NgStyle } from '@angular/common'; // necessario importar a biblioteca commom para poder utilizar o NgClass e NgStyle
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    NgClass,
    NgStyle
  ], /* Importando a chamada do CommonModule para o component. Caso não queira utilizar
        o CommonModule posso chamar direto a funcionalidade NgClass. Caso queira só
        chamar o NgStyle sem chamar o CommonModule posso chamar ele apenas e importar
        do common a cima */
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public nome = 'Philiphe Siqueira Ferreira'
  public idade = 20
}
