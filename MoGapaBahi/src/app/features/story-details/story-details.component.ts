import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-story-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './story-details.component.html',
  styleUrls: ['./story-details.component.scss'],
})
export class StoryDetailsComponent implements OnInit {
  storyId: string | null = null;

  // Example story data; later you can fetch from API
  story = {
    title: 'Exploring the Mountains',
    category: 'adventure',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    author: 'John Doe',
    date: 'October 15, 2025',
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    `
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.storyId = this.route.snapshot.paramMap.get('id');
    // TODO: Fetch story by ID from API or local data
  }
}
