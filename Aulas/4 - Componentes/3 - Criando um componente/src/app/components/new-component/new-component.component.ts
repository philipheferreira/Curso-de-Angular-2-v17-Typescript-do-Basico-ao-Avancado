import { Component } from '@angular/core';
@Component({
  selector: 'app-new-component',
  imports: [],
  templateUrl: './new-component.component.html', // tag que puxa um arquivo html para ser o template desse componente
  styleUrl: './new-component.component.scss' // tag que puxa um arquivo css para ser o style desse component
})
export class NewComponent {
  title = 'Capitulo 3 - Criando um componente'
}
