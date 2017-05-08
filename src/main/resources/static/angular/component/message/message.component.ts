import { Component, Input } from '@angular/core';
import {Message} from "./message";

@Component({
    selector: 'message-box',
    template : `
    <div class="itemdiv dialogdiv">
        <div class="user">
            <img src="/img/event/holl.jpg">
        </div>
        <div class="body">
            <div class="name">
                <a href="javascript:;">{{message.name}}</a>
            </div>
            <div class="text">{{message.content}}</div>
        </div>
    </div>
    `
})
export class MessageComponent{
    @Input() message: Message;
}
