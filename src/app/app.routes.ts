import { Component } from '@angular/core';
// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { PlaylistComponent } from './components/playlists/playlists.component';
import { MemesComponent } from './components/memes/memes.component';
import { BookingsComponent } from './components/booking/booking.component';
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [
  { path: 'playlist', component: PlaylistComponent },
  { path: 'memes', component: MemesComponent },
  { path: 'bookings', component: BookingsComponent },
  {path:'home',component:HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route to Playlist
];
