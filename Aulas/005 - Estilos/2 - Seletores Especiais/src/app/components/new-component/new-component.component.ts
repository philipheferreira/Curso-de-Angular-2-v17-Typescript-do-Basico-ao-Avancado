import { Component } from '@angular/core';
import { TesteComponent } from '../teste/teste.component'

@Component({
  selector: 'app-new-component',
  imports: [TesteComponent],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.scss'
})
export class NewComponent {

}
