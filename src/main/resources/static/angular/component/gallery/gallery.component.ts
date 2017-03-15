import { Component, Input } from '@angular/core';
import { GalleryService } from './gallery.service';
import { Gallery } from './gallery'

@Component({
    selector: 'gallery-box',
    template : `
    <div>
        <ul>
            <li>{{gallery.idx}}</li>
            <li>{{gallery.title}}</li>
            <li>{{gallery.subtitle}}</li>
            <li>{{gallery.content}}</li>
            <li>{{gallery.imagesJson}}</li>
            <li>{{gallery.type}}</li>
        </ul>
    </div>`
})
export class GalleryComponent {
    @Input() gallery: Gallery;
    constructor(private galleryService: GalleryService) {
    }
}
