import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ChatModule } from './chat.module';
import {enableProdMode} from '@angular/core';

if (!/localhost/.test(document.location.host)) {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(ChatModule);
