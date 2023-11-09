import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IInitialState } from './tasksSlice.types';
import { ITask } from 'types/app';

const initialState: IInitialState = {
  tasksArray: [],
  isLoading: false,
  error: null,
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setLoader: (state) => {
      state.isLoading = true;
    },
    unsetLoader: (state) => {
      state.isLoading = false;
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
  },
});

export const { setLoader, unsetLoader, setTasks, updateTask, deleteTask } = tasksSlice.actions;
export const tasks = tasksSlice.reducer;
