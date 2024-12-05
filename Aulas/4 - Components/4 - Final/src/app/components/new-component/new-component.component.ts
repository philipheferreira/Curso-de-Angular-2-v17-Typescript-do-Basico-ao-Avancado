import { Component } from '@angular/core';
import { TesteComponent } from '../teste/teste.component';
import { Component1Component } from '../component1/component1.component'

@Component({
  selector: 'app-new-component',
  imports: [TesteComponent, Component1Component],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.scss'
})
export class NewComponent {

}
