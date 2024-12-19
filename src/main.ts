// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';  // Import appConfig
import { AppComponent } from './app/app.component';  // Your main app component

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
