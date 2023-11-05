import { configureStore } from '@reduxjs/toolkit';
import { addFormTask, editFormTask, tasks } from './slices';

export const store = configureStore({
  reducer: {
    tasks,
    addFormTask,
    editFormTask,
  },
});
