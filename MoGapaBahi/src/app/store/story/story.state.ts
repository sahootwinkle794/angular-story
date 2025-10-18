// src/app/store/story/story.state.ts

export interface StoryCard {
  _id?: string;
  tyle: string;
  image: string;
}

export interface StoryState {
  stories: StoryCard[];
  loading: boolean;
  error: string | null;
}

export const initialStoryState: StoryState = {
  stories: [],
  loading: false,
  error: null
};
