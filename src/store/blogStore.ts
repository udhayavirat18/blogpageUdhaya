import { create } from 'zustand';
import { Post } from '../types';

interface BlogState {
  posts: Post[];
  countries: string[];
  addPost: (post: Post) => void;
  addCountry: (country: string) => void;
}

export const useBlogStore = create<BlogState>((set) => ({
  posts: [],
  countries: ['India', 'Sri Lanka'],
  addPost: (post) =>
    set((state) => ({
      posts: [...state.posts, post],
      countries: state.countries.includes(post.country)
        ? state.countries
        : [...state.countries, post.country],
    })),
  addCountry: (country) =>
    set((state) => ({
      countries: state.countries.includes(country)
        ? state.countries
        : [...state.countries, country],
    })),
}));