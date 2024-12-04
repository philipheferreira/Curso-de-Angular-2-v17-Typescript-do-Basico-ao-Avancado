import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
  <h1>Template geral</h1>
  `,
  styles: [`
      .name{}
    `]
})
export class AppComponent {
  title = 'componentProject';
}
