// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appConfig } from './app.config'; // Import the appConfig
import { PlaylistComponent } from './components/playlists/playlists.component';
import { MemesComponent } from './components/memes/memes.component';
import { BookingsComponent } from './components/booking/booking.component';
import { ApplicationConfig } from '@angular/core';

@NgModule({
  declarations: [
    PlaylistComponent,
    MemesComponent,
    BookingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [

  ],
  bootstrap: [PlaylistComponent] // You can bootstrap any component here
})
export class AppModule { }
