import { Component, OnInit } from '@angular/core';
import { GalleryService } from './gallery/gallery.service';
import { Gallery } from './gallery/gallery';

@Component({
  selector: 'app-root',
  template : `
        <gallery-box
        *ngFor="let gallery of galleries" 
        [gallery]="gallery">
        </gallery-box>
        `
})
export class AppComponent implements OnInit{

  galleries : Gallery[];

  constructor(private galleryService: GalleryService) {
  }

  ngOnInit(){
    this.galleryService.getList()
        .subscribe(
            galleries => this.galleries = galleries,
            err => {
              console.log(err);
            });
    console.log('on init');
  }
}
