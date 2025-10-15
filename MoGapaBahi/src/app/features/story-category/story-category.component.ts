import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-story-category',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './story-category.component.html',
  styleUrls: ['./story-category.component.scss']
})
export class StoryCategoryComponent implements OnInit {
  categoryName: string = '';
  stories: any[] = [];

  // Example story data
  allStories = [
    {
      id: 1,
      category: 'adventure',
      title: 'Exploring the Mountains',
      shortDescription: 'A thrilling trek through snow-covered peaks.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      category: 'travel',
      title: 'Journey to Paris',
      shortDescription: 'An unforgettable trip through the City of Lights.',
      image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      category: 'science',
      title: 'Mysteries of Space',
      shortDescription: 'Exploring the endless wonders of the universe.',
      image: 'http://getwallpapers.com/wallpaper/full/7/d/0/865862-outer-space-wallpaper-1920x1200-for-meizu.jpg'
    }
    // Add more stories here
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get category from route parameter
    this.categoryName = this.route.snapshot.paramMap.get('category') || '';

    // Filter stories by category
    this.stories = this.allStories.filter(
      story => story.category.toLowerCase() === this.categoryName.toLowerCase()
    );
  }
}
