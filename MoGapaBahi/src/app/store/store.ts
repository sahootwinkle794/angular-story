import { BehaviorSubject } from 'rxjs';
import { storyReducer } from './story/story.reducer';
import { initialStoryState, StoryState } from './story/story.state';
import { Action } from './story/story.actions';

class Store {
  private state$ = new BehaviorSubject<StoryState>(initialStoryState);

  getState() {
    return this.state$.asObservable();
  }

  dispatch(action: Action) {
    const currentState = this.state$.getValue();
    const newState = storyReducer(currentState, action);
    this.state$.next(newState);
  }
}

export const appStore = new Store();
