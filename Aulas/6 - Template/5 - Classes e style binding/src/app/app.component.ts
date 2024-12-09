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

  public isTextDecoration = this.idade >= 32 ? 'underline': 'none';
}
