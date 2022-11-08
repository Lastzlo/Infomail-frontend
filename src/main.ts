import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.ENABLE_PRODUCTION_MODE) {
  enableProdMode();
}

if (!environment.SHOW_LOGS) {
  window.console.log = () => {}
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error());
