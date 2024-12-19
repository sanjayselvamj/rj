// src/app/components/bookings/bookings.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-bookings',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingsComponent {
  bookings = [
    { clientName: 'John Doe', date: '2024-12-01', topic: 'Tech Talk' },
    { clientName: 'Jane Smith', date: '2024-12-05', topic: 'Motivational Speech' }
  ];
}
