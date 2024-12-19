// src/app/components/memes/memes.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css']
})
export class MemesComponent {
  memes = [
    { title: 'Meme 1', imageUrl: 'https://via.placeholder.com/150' },
    { title: 'Meme 2', imageUrl: 'https://via.placeholder.com/150' },
    { title: 'Meme 3', imageUrl: 'https://via.placeholder.com/150' }
  ];
}
