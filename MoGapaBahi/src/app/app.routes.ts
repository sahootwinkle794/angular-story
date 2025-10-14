import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
// import { ContactComponent } from './features/contact/contact.component';
// import { StoryCategoryComponent } from './features/story-category/story-category.component';
// import { StoryDetailsComponent } from './features/story-details/story-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' } // fallback route
];
