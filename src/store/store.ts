import { configureStore } from '@reduxjs/toolkit';
import { tasks } from './slices';

export const store = configureStore({
  reducer: {
    tasks,
  },
});
