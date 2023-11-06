import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { addFormTask, editFormTask, tasks } from './slices';

export const store = configureStore({
  reducer: {
    tasks,
    addFormTask,
    editFormTask,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
