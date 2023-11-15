import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { editFormTask, tasks, addFormTask } from 'src/store/slices';

export const store = configureStore({
  reducer: {
    tasks,
    addFormTask,
    editFormTask,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
