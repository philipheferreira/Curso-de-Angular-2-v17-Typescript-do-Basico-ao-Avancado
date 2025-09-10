import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  public valor = 32;
  public nome = "Philiphe Siqueira Ferreira";

  public isTextDecoration = this.valor >= 32 ? 'underline': 'none'; // caso o valor seja maior que 32 ou igual o texto aparece com underline, menor é a segunda opção
}
