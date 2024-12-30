import { Component } from '@angular/core';

@Component({
  selector: 'app-teste',
  imports: [],
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.scss'
})
export class TesteComponent {
  public nome = 'Philiphe Siqueira Ferreira'
  public isDisable1 = true; // Como passar um valor verdadeiro então o botão realmente é desabilitado
  public isDisable2 = false;
  public imgValue = 'https://media.gq.com/photos/55828b3f1177d66d68d5287c/1:1/w_450,h_450,c_limit/blogs-the-feed-how-i-met-your-mother-barney-stinson.jpg'

  // teste de reatividade com um constructor
  constructor(){
    setTimeout( () => {
      this.nome = "João e Jherson" // Consigo definir que farei uma modificação na variavel nome depois de 1segundo
    }, 1000);
  }

}
