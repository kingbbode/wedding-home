import { Component, OnInit } from '@angular/core';
import { GalleryService } from './gallery/gallery.service';
import { Gallery } from './gallery/gallery';

@Component({
  selector: 'app-root',
  template : `
    <div class="row">
      <div class="col-sm-6 col-md-4"></div>
      <gallery-box
        [gallery]="newGallery">
      </gallery-box>
      <div class="col-sm-6 col-md-4"></div>
    </div>
    <div class="row">
      <gallery-box
      *ngFor="let gallery of galleries" 
      [gallery]="gallery">
      </gallery-box>
    </div>
        `
})
export class AppComponent implements OnInit{

  newGallery : Gallery;
  galleries : Gallery[];

  constructor(private galleryService: GalleryService) {
  }

  ngOnInit(){
    this.newGallery = new Gallery();
    this.galleryService.getList()
        .subscribe(
            galleries => this.galleries = galleries,
            err => {
              console.log(err);
            });
  }
}
