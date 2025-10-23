import { BehaviorSubject } from 'rxjs';
import { storyReducer } from './story/story.reducer';
import { initialStoryState, StoryState } from './story/story.state';
import { Action } from './story/story.actions';
import { Language } from '../config/api.config';

interface AppState {
  story: StoryState;
  language: Language;
}

const initialState: AppState = {
  story: initialStoryState,
  language: 'en'
};

class Store {
  private state$ = new BehaviorSubject<AppState>(initialState);

  getState() {
    return this.state$.asObservable();
  }

  dispatch(action: Action) {
    const currentState = this.state$.getValue();
    const newState = {
      ...currentState,
      story: storyReducer(currentState.story, action)
    };
    this.state$.next(newState);
  }

  setLanguage(language: Language) {
    const currentState = this.state$.getValue();
    this.state$.next({
      ...currentState,
      language
    });
  }
}

export const appStore = new Store();