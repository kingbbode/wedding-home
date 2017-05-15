import { Component, Input } from '@angular/core';
import {Message} from "./message";

@Component({
    selector: 'message-box',
    template : `
    <div class="itemdiv dialogdiv">
        <div class="user">
            <img *ngIf="message.name=='박진희'" src="/img/avata/pack.png">
            <img *ngIf="message.name=='유익선'" src="/img/avata/yu.png">
            <img *ngIf="message.name!='유익선'&&message.name!='박진희'" src="/img/avata/user.png">
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
