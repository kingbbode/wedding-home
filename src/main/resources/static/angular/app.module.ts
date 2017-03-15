import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './component/app.component';
import { GalleryService } from './component/gallery/gallery.service';
import { GalleryComponent } from './component/gallery/gallery.component'

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ GalleryService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
