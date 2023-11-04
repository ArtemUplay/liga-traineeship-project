import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IInitialState } from './tasksSlice.types';
import { ITask } from 'types/appTypes';

const initialState: IInitialState = {
  tasksArray: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    getTasks: (state, action: PayloadAction<ITask[]>) => {
      state.tasksArray = action.payload;
    },
    addTask: (state, action: PayloadAction<ITask>) => {
      state.tasksArray.push(action.payload);
    },
    markTaskIsImportant: (state, action: PayloadAction<string>) => {
      const taskIndex = state.tasksArray.findIndex((task) => {
        return task.id === action.payload;
      });

      state.tasksArray[taskIndex].isImportant = !state.tasksArray[taskIndex].isImportant;
    },
    markTaskIsCompleted: (state, action: PayloadAction<string>) => {
      const taskIndex = state.tasksArray.findIndex((task) => {
        return task.id === action.payload;
      });

      state.tasksArray[taskIndex].isCompleted = !state.tasksArray[taskIndex].isCompleted;
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasksArray = state.tasksArray.filter((task) => {
        return task.id !== action.payload;
      });
    },
  },
});

export const { getTasks, addTask, markTaskIsCompleted, markTaskIsImportant, deleteTask } = tasksSlice.actions;
export const tasks = tasksSlice.reducer;
