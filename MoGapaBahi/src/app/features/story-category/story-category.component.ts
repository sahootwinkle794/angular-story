import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { StoryService } from '../home/services/story.service';

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
  loading = false;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private storyService: StoryService
  ) {}

  async ngOnInit(): Promise<void> {
    this.categoryName = this.route.snapshot.paramMap.get('category') || '';
    await this.loadStoriesByType();
  }

  async loadStoriesByType() {
    try {
      this.loading = true;
      this.error = null;
      this.stories = await this.storyService.getStoriesByType(this.categoryName);
    } catch (error: any) {
      this.error = error.message || 'Failed to load stories';
      console.error('Error loading stories:', error);
    } finally {
      this.loading = false;
    }
  }
}
