import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { editFormTask, tasks } from './slices';
import { addFormTask } from './slices/addFormTask';

export const store = configureStore({
  reducer: {
    tasks,
    addFormTask,
    editFormTask,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
