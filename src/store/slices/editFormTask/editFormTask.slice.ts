import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IInitialState } from './editFormTask.types';
import { ITask } from 'types/app';

const initialState: IInitialState = {
  editedTask: {
    name: '',
    info: '',
    isImportant: false,
    isCompleted: false,
  },
  isLoadingEditForm: false,
  error: null,
};

const editFormTaskSlice = createSlice({
  name: 'editFormTask',
  initialState,
  reducers: {
    setLoaderEditForm: (state) => {
      state.isLoadingEditForm = true;
    },
    unsetLoaderEditForm: (state) => {
      state.isLoadingEditForm = false;
    },
    editTask: (state, action: PayloadAction<ITask>) => {
      state.editedTask = action.payload;
    },
    resetEditedTask: (state) => {
      state.editedTask = initialState.editedTask;
    },
  },
});

export const { setLoaderEditForm, unsetLoaderEditForm, editTask, resetEditedTask } = editFormTaskSlice.actions;
export const editFormTask = editFormTaskSlice.reducer;
