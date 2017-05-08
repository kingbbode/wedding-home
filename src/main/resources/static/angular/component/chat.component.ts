import {Component, OnInit} from '@angular/core';
import {MessageService} from './message/message.service';
import {Message} from "./message/message";

@Component({
    selector: 'chat-dialog',
    template : `
    <div class="dialogs" id="dialogs" style="OVERFLOW-Y:auto; height:450px;">
        <message-box
          *ngFor="let message of messages" 
          [message]="message">
        </message-box>
    </div>
    <div class="form-actions" style="margin-bottom: 0px;">
        <div class="row">
            <div class="col-sm-3">
                <div class="input-group">
                    <input id="name" type="text" placeholder="이름" class="form-control" [(ngModel)]="newMessage.name">
                </div>
            </div>
        </div>
        <div class="input-group">
            <input id="message" type="text" placeholder="내용" class="form-control" [(ngModel)]="newMessage.content" (keyup.enter)="save()">
            <span class="input-group-btn">
                <button class="btn btn-sm btn-info no-radius" type="button" id="sendMessage" (click)="save()">
                    <i class="ace-icon fa fa-share"></i>
                    Send
                </button>
            </span>
        </div>
    </div>
        `
})
export class ChatComponent implements OnInit {

    newMessage : Message;
    manMessage : Message;
    girlMessage : Message;
    messages : Message[];

    constructor(private messageService: MessageService) {
    }

    ngOnInit(){
        this.newMessage = new Message();
        this.manMessage = new Message("신랑 유익선", "땡큐!");
        this.girlMessage = new Message("신부 박진희", "감사합니다^^");
        this.messageService.getList()
            .subscribe(
                messages => {
                    this.messages = messages;
                    let that = this;
                    setTimeout(function(){
                        that.refreshScroll();
                    },0);

                },
                err => {
                    console.log(err);
                });
    }

    save(){
        if(this.newMessage.name === "유익선" || this.newMessage.name === "박진희"){
            alert("신랑, 신부 이름은 금지^^!");
            return;
        }
        if(!ChatComponent.isValidLength(this.newMessage.name, 3, 15)){
            alert("이름은 최소 3글자 이상, 15글자 이하여야 합니다.");
            return;
        }
        if(!ChatComponent.isValidLength(this.newMessage.content, 1, 255)){
            alert("내용은 최소 한 글자 이상, 255 글자 이하여야 합니다.");
            return;
        }

        this.messageService.save(this.newMessage)
            .subscribe(
                () => {
                    this.messages.push(new Message(this.newMessage.name, this.newMessage.content));
                    this.refreshScroll();
                    let that = this;
                    setTimeout(function(){
                        that.messages.push(that.manMessage);
                        setTimeout(function(){
                            that.refreshScroll();
                        },0);

                    }, 300);
                    setTimeout(function(){
                        that.messages.push(that.girlMessage);
                        setTimeout(function(){
                            that.refreshScroll();
                        },0);
                    }, 700);
                    this.newMessage.init();
                },
                err => {
                    alert(err);
                });
    }

    static isValidLength(value: string, min: number, max: number) {
        return value.length >= min
        && value.length <= max;
    }

    refreshScroll() {
        let dialogs = $('#dialogs');
        if(dialogs){
            dialogs.scrollTop(dialogs[0].scrollHeight);
        }
    }
}
