import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IEditTaskInitialState } from 'src/store/slices/editFormTask';
import { ITask } from 'types/app';

const initialState: IEditTaskInitialState = {
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
    setEditFormLoader: (state) => {
      state.isLoadingEditForm = true;
    },
    unsetEditFormLoader: (state) => {
      state.isLoadingEditForm = false;
    },
    setEditFormError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    resetEditFormError: (state) => {
      state.error = null;
    },
    editTask: (state, action: PayloadAction<ITask>) => {
      state.editedTask = { ...action.payload };
    },
    resetEditedTask: (state) => {
      state.editedTask = initialState.editedTask;
    },
  },
});

export const {
  setEditFormLoader,
  unsetEditFormLoader,
  setEditFormError,
  resetEditFormError,
  editTask,
  resetEditedTask,
} = editFormTaskSlice.actions;
export const editFormTask = editFormTaskSlice.reducer;
