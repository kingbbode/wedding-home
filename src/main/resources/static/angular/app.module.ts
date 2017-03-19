import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CarouselModule } from 'ng2-bootstrap';

import { AppComponent } from './component/app.component';
import { GalleryService } from './component/gallery/gallery.service';
import { GalleryComponent } from './component/gallery/gallery.component'
import {ImageUploadModule} from "angular2-image-upload";

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarouselModule.forRoot(),
    ImageUploadModule.forRoot()
  ],
  providers: [ GalleryService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
