import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { StoryService } from '../home/services/story.service';
import { Nl2brPipe } from '../../shared/pipes/nl2br.pipe';

@Component({
  selector: 'app-story-details',
  standalone: true,
  imports: [CommonModule, RouterModule, Nl2brPipe],
  templateUrl: './story-details.component.html',
  styleUrls: ['./story-details.component.scss'],
})
export class StoryDetailsComponent implements OnInit {
  storyId: string | null = null;
  story: any = null;
  loading = false;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private storyService: StoryService
  ) {}

  async ngOnInit(): Promise<void> {
    this.storyId = this.route.snapshot.paramMap.get('id');
    if (this.storyId) {
      await this.loadStory();
    }
  }

  async loadStory() {
    if (!this.storyId) return;
    
    try {
      this.loading = true;
      this.error = null;
      this.story = await this.storyService.getStoryById(this.storyId);
    } catch (error: any) {
      this.error = error.message || 'Failed to load story';
      console.error('Error loading story:', error);
    } finally {
      this.loading = false;
    }
  }
}
