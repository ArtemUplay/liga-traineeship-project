import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { IAddTaskInitialState, TNewTask } from './AddFormTask.types';

const initialState: IAddTaskInitialState = {
  newTask: {
    name: '',
    info: '',
    isImportant: false,
  },
  error: null,
  isLoading: false,
};

const addFormTaskSlice = createSlice({
  name: 'addFormTask',
  initialState,
  reducers: {
    setAddTaskFormLoader: (state) => {
      state.isLoading = true;
    },
    unsetAddTaskFormLoader: (state) => {
      state.isLoading = false;
    },
    setAddTaskPageError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    resetAddTaskPageError: (state) => {
      state.error = null;
    },
    postNewTask: (state, action: PayloadAction<TNewTask>) => {
      state.newTask = action.payload;
    },
    resetNewTask: (state) => {
      state.newTask = initialState.newTask;
    },
  },
});

export const {
  setAddTaskFormLoader,
  unsetAddTaskFormLoader,
  setAddTaskPageError,
  resetAddTaskPageError,
  postNewTask,
  resetNewTask,
} = addFormTaskSlice.actions;
export const addFormTask = addFormTaskSlice.reducer;
