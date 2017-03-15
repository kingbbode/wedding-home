import { Component, Input } from '@angular/core';
import { GalleryService } from './gallery.service';
import { Gallery } from './gallery'

@Component({
    selector: 'gallery-box',
    template : `
      <div class="col-sm-6 col-md-4">
        <div class="thumbnail">
          <carousel>
            <slide *ngFor="let image of getImages()">
              <img src="{{image}}">
            </slide>
          </carousel>
          <div class="caption">
            <h3>{{gallery.title}}({{gallery.subtitle}})</h3>
            <p>{{gallery.content}}.</p>
            <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
          </div>
        </div>
      </div>
    `
})
export class GalleryComponent {
    @Input() gallery: Gallery;
    constructor(private galleryService: GalleryService) {
    }
    getImages() : Array<string> {
        return JSON.parse(this.gallery.imagesJson);
    }
}
