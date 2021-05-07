import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './containers/Login-Form/UserData';

export const store = configureStore({
   reducer: {
    posts: postsReducer
  },
});


