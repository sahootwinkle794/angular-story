import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

// ✅ Bootstrapping the main Angular application
bootstrapApplication(AppComponent, {
  providers: [
    // 👇 Provides all your defined routes (like Home, Story Category, etc.)
    provideRouter(routes),

    // 👇 Enables Angular animations (required for Owl Carousel & UI transitions)
    importProvidersFrom(BrowserAnimationsModule)
  ]
})
  .catch(err => console.error('❌ Error during bootstrap:', err));
