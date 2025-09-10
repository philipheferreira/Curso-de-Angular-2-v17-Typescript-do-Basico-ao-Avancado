import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig) // pelo fato do bootstrapApplication inicializar a partir do component APPComponent então esse component é o principal dessa aplicação
  .catch((err) => console.error(err));
