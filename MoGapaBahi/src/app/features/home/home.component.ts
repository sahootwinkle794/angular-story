import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { StoryCategoryComponent } from './components/story-category/story-category.component';
// import { UpcomingStoryComponent } from './components/upcoming-story/upcoming-story.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutComponent,StoryCategoryComponent],
  template: `
    <app-hero></app-hero>
    <app-about></app-about>
     <app-story-category></app-story-category>
    <!-- Other sections -->
  `,
})
export class HomeComponent {}
  