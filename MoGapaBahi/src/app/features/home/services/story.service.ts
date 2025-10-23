import { Injectable } from '@angular/core';
import { fetchStories } from '../../../api/story.api';
import { fetchStoriesByType, fetchStoryById } from '../../../api/story-category.api';

@Injectable({ providedIn: 'root' })
export class StoryService {
  async getStories() {
    return await fetchStories();
  }

  async getStoriesByType(type: string) {
    return await fetchStoriesByType(type);
  }

  async getStoryById(id: string) {
    return await fetchStoryById(id);
  }
}
