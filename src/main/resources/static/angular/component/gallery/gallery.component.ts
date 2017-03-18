import { Component, Input, OnInit } from '@angular/core';
import { GalleryService } from './gallery.service';
import { Gallery } from './gallery'

@Component({
    selector: 'gallery-box',
    template : `
      <div class="col-sm-6 col-md-4">
        <div class="thumbnail">
          <carousel>
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
            <div *ngFor="let image of images" class="input-group">
              <input type="text" class="form-control" value="{{image}}">
              <span class="input-group-btn">
                <button class="btn btn-default" type="button">이미지 업로드</button>
              </span>
            </div>
          </div>
          <div *ngIf="gallery.type == 'VIDEO'">
            <div *ngFor="let image of images" class="input-group">
              <input type="text" class="form-control" value="{{image}}">
            </div>
          </div>
          <div *ngIf="gallery.type == 'VIDEO'">
            <div class="form-group">
            <label for="exampleInputEmail1">동영상 경로</label>
            <textarea class="form-control" rows="3" [(ngModel)]="gallery.content" value="{{gallery.content}}"></textarea>
          </div>
          <p><a href="#" class="btn btn-primary" role="button">저장</a> <a href="#" class="btn btn-default" role="button">삭제</a></p>
        </div>
      </div>
    `
})
export class GalleryComponent implements OnInit{
    @Input() gallery: Gallery;
    images: Array<String>;
    constructor(private galleryService: GalleryService) {
    }

    ngOnInit(){
        this.images = JSON.parse(this.gallery.imagesJson);
    }
}
