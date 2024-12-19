// src/app/components/playlist/playlist.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistComponent {
  playlists = [
    { name: 'Chill Vibes', videos: ['Video 1', 'Video 2'] },
    { name: 'Workout Music', videos: ['Video 3', 'Video 4'] },
    { name: 'Relaxing Beats', videos: ['Video 5', 'Video 6'] }
  ];
}
