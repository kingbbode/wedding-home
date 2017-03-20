import { Component, Input, OnInit } from '@angular/core';
import { GalleryService } from './gallery.service';
import { Gallery } from './gallery'

@Component({
    selector: 'gallery-box',
    template : `
      <div class="col-sm-6 col-md-4">
        <div class="thumbnail">
          <carousel *ngIf="gallery.type == 'IMAGE'">
            <slide *ngFor="let image of images">
              <img src="{{image}}" style="width: 100%;">
            </slide>
          </carousel>
          <div class="form-group">
            <label for="exampleInputEmail1">제목</label>
            <input type="text" class="form-control" [(ngModel)]="gallery.title" value="{{gallery.title}}">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">부제목</label>
            <input type="text" class="form-control" [(ngModel)]="gallery.subtitle" value="{{gallery.subtitle}}">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">내용</label>
            <textarea class="form-control" rows="3" [(ngModel)]="gallery.content" value="{{gallery.content}}"></textarea>
          </div>
          <label class="radio-inline">
            <input type="radio" name="{{gallery.idx}}inlineRadioOptions" id="{{gallery.idx}}inlineRadio1" [(ngModel)]="gallery.type" value="IMAGE"> 이미지
          </label>
          <label class="radio-inline">
            <input type="radio" name="{{gallery.idx}}inlineRadioOptions" id="{{gallery.idx}}inlineRadio2" [(ngModel)]="gallery.type" value="VIDEO"> 동영상
          </label>
          <div *ngIf="gallery.type == 'IMAGE'">
            <div *ngFor="let image of images; let i=index" class="input-group">
              <input type="text" class="form-control" value="{{image}}">
              <span class="input-group-btn">
                <image-upload
                  [max]="100"
                  [url]="'/cms/image'"
                  [buttonCaption]="'Select Images!'"
                  [dropBoxMessage]="'Drop your images here!'"
                  (onFileUploadFinish)="imageUploaded($event, i)"
                ></image-upload>
              </span>
            </div>
          </div>
          <div *ngIf="gallery.type == 'VIDEO'">
            <input *ngFor="let image of images" type="text" class="form-control" value="{{image}}">
          </div>
          <select [(ngModel)]="gallery.category" class="form-control">
            <option value="ysjh">익선&진희</option>
            <option value="family">가족</option>
            <option value="wedding">결혼식</option>
            <option value="party">파티</option>
          </select>
          <p><a href="javascript:;" (click)="save()" class="btn btn-primary" role="button">저장</a> <a href="#" class="btn btn-default" role="button">삭제</a></p>
        </div>
      </div>
    `
})
export class GalleryComponent implements OnInit{
    url: String = 'https://s3.ap-northeast-2.amazonaws.com/kingbbode-yis/';
    @Input() gallery: Gallery;
    images: Array<String>;
    constructor(private galleryService: GalleryService) {
    }

    ngOnInit(){
        this.images = JSON.parse(this.gallery.imagesJson);
        console.log('gallery', this.gallery)
    }

    imageUploaded($event, i) : void {
        this.images[i] = this.url + $event.file.name;
    }

    save(){
        this.gallery.imagesJson = JSON.stringify(this.images);
        this.galleryService.save(this.gallery)
        .subscribe(
            success => {
                alert('저장성공!');
                location.reload();
            },
            err => {
                alert('저장 실패 ㅜㅜ');
                console.log(err);
            });
    }
}
