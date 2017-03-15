import { Component, Input } from '@angular/core';
import { GalleryService } from './gallery.service';
import { Gallery } from './gallery'

@Component({
    selector: 'gallery',
    template : `<div></div>`
})
export class GalleryComponent {
    @Input() gallery: Gallery;
    constructor(private galleryService: GalleryService) {
    }
}
