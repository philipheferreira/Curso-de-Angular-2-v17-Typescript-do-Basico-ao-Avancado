import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title = "Algo"
  public idade = 32;
  public nome = "Philiphe Siqueira Ferreira";
  public condition = this.idade > 1 ? 'Teste1' : 'Teste2';

  public isTextDecoration = this.idade >= 32;
}
