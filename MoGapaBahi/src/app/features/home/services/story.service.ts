import { Injectable } from '@angular/core';
import { fetchStories } from '../../../api/story.api';
import { fetchStoriesByType, fetchStoryById } from '../../../api/story-category.api';
import { LanguageService } from '../../../services/language.service';
import { Language } from '../../../config/api.config';

@Injectable({ providedIn: 'root' })
export class StoryService {
  constructor(private languageService: LanguageService) {}

  async getStories() {
    const currentLanguage = this.languageService.getCurrentLanguageValue();
    return await fetchStories(currentLanguage);
  }

  async getStoriesByType(type: string) {
    const currentLanguage = this.languageService.getCurrentLanguageValue();
    return await fetchStoriesByType(type, currentLanguage);
  }

  async getStoryById(id: string) {
    const currentLanguage = this.languageService.getCurrentLanguageValue();
    return await fetchStoryById(id, currentLanguage);
  }
}