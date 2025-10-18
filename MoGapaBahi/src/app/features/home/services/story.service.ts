import { Injectable } from '@angular/core';
import { fetchStories } from '../../../api/story.api';

@Injectable({ providedIn: 'root' })
export class StoryService {
  async getStories() {
    return await fetchStories();
  }
}
