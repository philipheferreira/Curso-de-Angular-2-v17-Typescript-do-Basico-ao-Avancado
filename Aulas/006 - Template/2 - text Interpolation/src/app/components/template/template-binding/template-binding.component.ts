import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  imports: [],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public nome = 'Philiphe Siqueira Ferreira';
  public idade = 28;
  public palavra: string = 'Uma palavra'; // tipando variavel string
  public numero: number = 20; // tipando variavel numerica

  public sum(valor1: number, valor2: number){
    return valor1 + valor2;
  }
}
