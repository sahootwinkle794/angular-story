import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { StoryService } from '../../services/story.service';
import { appStore } from '../../../../store/store';
import { STORY_ACTIONS } from '../../../../store/story/story.actions';
import { LanguageService } from '../../../../services/language.service';

@Component({
  selector: 'app-story-category',
  standalone: true,
  imports: [CommonModule, RouterModule, CarouselModule],
  templateUrl: './story-category.component.html',
  styleUrls: ['./story-category.component.scss']
})
export class StoryCategoryComponent implements OnInit {
  customOptions = {
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: false,
    nav: false,
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      768: { items: 3 },
      992: { items: 4 }
    }
  };

  displayCards: any[] = [];
  loading = false;
  error: string | null = null;

  constructor(
    private storyService: StoryService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.loadStories();

    appStore.getState().subscribe(state => {
      this.displayCards = state.story.stories;
      this.loading = state.story.loading;
      this.error = state.story.error;
    });

    // Listen for language changes and reload data
    this.languageService.getCurrentLanguage().subscribe(language => {
      this.loadStories();
    });
  }

  async loadStories() {
    try {
      appStore.dispatch({ type: STORY_ACTIONS.FETCH_START });
      const data = await this.storyService.getStories();
      appStore.dispatch({ type: STORY_ACTIONS.FETCH_SUCCESS, payload: data });
    } catch (error: any) {
      appStore.dispatch({ type: STORY_ACTIONS.FETCH_ERROR, payload: error.message });
    }
  }

  prevSlide() {}
  nextSlide() {}
}