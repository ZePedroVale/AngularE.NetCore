import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Ajuste o caminho se necessário

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
