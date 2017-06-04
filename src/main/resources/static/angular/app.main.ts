import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; 
import { AppModule } from './app.module';
import {enableProdMode} from '@angular/core';

if (!/localhost/.test(document.location.host)) {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);
