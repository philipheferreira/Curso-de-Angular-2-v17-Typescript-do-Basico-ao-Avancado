import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // importar o ngModule do Forms

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule], // toda vez que for utilizar o ngModule com import necessario importar FormsModule
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public nome = 'Philiphe Siqueira Ferreira'
}
