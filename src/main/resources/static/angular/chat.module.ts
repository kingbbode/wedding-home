import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CarouselModule } from 'ng2-bootstrap';

import { MessageService } from './component/message/message.service';
import { MessageComponent } from './component/message/message.component';
import {ChatComponent} from "./component/chat.component";

@NgModule({
    declarations: [
        MessageComponent,
        ChatComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        CarouselModule.forRoot()
    ],
    providers: [ MessageService ],
    bootstrap: [ ChatComponent ]
})
export class ChatModule { }
