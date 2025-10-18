import { STORY_ACTIONS, Action } from './story.actions';
import { StoryState, initialStoryState } from './story.state';

export function storyReducer(state = initialStoryState, action: Action): StoryState {
  switch (action.type) {
    case STORY_ACTIONS.FETCH_START:
      return { ...state, loading: true, error: null };
    case STORY_ACTIONS.FETCH_SUCCESS:
      return { ...state, loading: false, stories: action.payload };
    case STORY_ACTIONS.FETCH_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
