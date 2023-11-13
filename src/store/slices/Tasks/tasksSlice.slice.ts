import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { ITasksInitialState } from './tasksSlice.types';
import { ISearchForm, ITask } from 'types/app';
import { FILTER } from 'constants/constants';

const initialState: ITasksInitialState = {
  tasksArray: [],
  searchForm: {
    searchValue: '',
    filterType: FILTER.ALL,
  },
  taskInModal: null,
  isOpenModal: false,
  isLoading: false,
  error: null,
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setLoaderTasksPage: (state) => {
      state.isLoading = true;
    },
    unsetLoaderTasksPage: (state) => {
      state.isLoading = false;
    },
    setTaskPageError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    clearTaskPageError: (state) => {
      state.error = null;
    },
    setOpenModal: (state, action: PayloadAction<ITask>) => {
      state.isOpenModal = true;
      state.taskInModal = action.payload;
    },
    closeModal: (state) => {
      state.isOpenModal = false;
      state.taskInModal = null;
    },
    setTasks: (state, action: PayloadAction<ITask[]>) => {
      state.tasksArray = action.payload.reverse();
    },
    updateTask: (state, action: PayloadAction<ITask>) => {
      const taskIndex = state.tasksArray.findIndex((task) => {
        return task.id === action.payload.id;
      });

      state.tasksArray[taskIndex] = { ...state.tasksArray[taskIndex], ...action.payload };
    },
    deleteTask: (state, action: PayloadAction<ITask['id']>) => {
      state.tasksArray = state.tasksArray.filter((task) => {
        return task.id !== action.payload;
      });
    },
    setSearchForm: (state, action: PayloadAction<ISearchForm>) => {
      state.searchForm = action.payload;
    },
    resetSearchForm: (state) => {
      state.searchForm = initialState.searchForm;
    },
  },
});

export const {
  setLoaderTasksPage,
  unsetLoaderTasksPage,
  setOpenModal,
  closeModal,
  setTaskPageError,
  clearTaskPageError,
  setTasks,
  updateTask,
  deleteTask,
  setSearchForm,
  resetSearchForm,
} = tasksSlice.actions;
export const tasks = tasksSlice.reducer;
