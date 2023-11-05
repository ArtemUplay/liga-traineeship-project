import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IInitialState } from './editFormTaskSlice.types';
import { ITask } from 'types/appTypes';

const initialState: IInitialState = {
  editedTask: {
    id: '',
    name: '',
    info: '',
    isImportant: false,
    isCompleted: false,
  },
};

const editFormTaskSlice = createSlice({
  name: 'editFormTask',
  initialState,
  reducers: {
    addEditedTask: (state, action: PayloadAction<ITask>) => {
      state.editedTask = action.payload;
    },
    resetEditedTask: (state) => {
      state.editedTask = initialState.editedTask;
    },
  },
});

export const { addEditedTask, resetEditedTask } = editFormTaskSlice.actions;
export const editFormTask = editFormTaskSlice.reducer;
