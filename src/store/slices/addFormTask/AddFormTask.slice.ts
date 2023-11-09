import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IInitialState, TNewTask } from './AddFormTask.types';

const initialState: IInitialState = {
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
    setLoader: (state) => {
      state.isLoading = true;
    },
    unsetLoader: (state) => {
      state.isLoading = false;
    },
    postNewTask: (state, action: PayloadAction<TNewTask>) => {
      state.newTask = action.payload;
    },
    resetNewTask: (state) => {
      state.newTask = initialState.newTask;
    },
  },
});

export const { setLoader, unsetLoader, postNewTask, resetNewTask } = addFormTaskSlice.actions;
export const addFormTask = addFormTaskSlice.reducer;
