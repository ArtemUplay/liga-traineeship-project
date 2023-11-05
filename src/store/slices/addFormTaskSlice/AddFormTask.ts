import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IInitialState, TNewTask } from './AddFormTask.types';

const initialState: IInitialState = {
  newTask: {
    name: '',
    info: '',
    isImportant: false,
  },
};

const addFormTaskSlice = createSlice({
  name: 'addFormTask',
  initialState,
  reducers: {
    postNewTask: (state, action: PayloadAction<TNewTask>) => {
      state.newTask = action.payload;
    },
    resetNewTask: (state) => {
      state.newTask = initialState.newTask;
    },
  },
});

export const { postNewTask, resetNewTask } = addFormTaskSlice.actions;
export const addFormTask = addFormTaskSlice.reducer;
