import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  IInitialState,
  IMarkTaskAsCompletedActionPayload,
  IMarkTaskAsImportantActionPayload,
  TNewTask,
} from './tasksSlice.types';
import { ITask } from 'types/appTypes';
import { tasksArray } from 'src/__mocks__/mocks';

const initialState: IInitialState = {
  tasksArray: tasksArray,
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    //Данный экшен добавится, когда прикрутим бек
    // getTasks: (state, action: PayloadAction<ITask[]>) => {},

    //Удалю этот экшен добавится, когда прикрутим бек
    addTask: (state, action: PayloadAction<TNewTask>) => {
      const newTask = { ...action.payload, id: `${state.tasksArray.length + 1}`, isCompleted: false };
      state.tasksArray.push(newTask);
    },
    //Удалю этот экшен добавится, когда прикрутим бек
    editTask: (state, action: PayloadAction<ITask>) => {
      const taskIndex = state.tasksArray.findIndex((task) => {
        return task.id === action.payload.id;
      });

      state.tasksArray[taskIndex] = { ...action.payload };
    },
    markTaskAsImportant: (state, action: PayloadAction<IMarkTaskAsImportantActionPayload>) => {
      const taskIndex = state.tasksArray.findIndex((task) => {
        return task.id === action.payload.id;
      });

      state.tasksArray[taskIndex].isImportant = action.payload.isImportant;
    },
    markTaskAsCompleted: (state, action: PayloadAction<IMarkTaskAsCompletedActionPayload>) => {
      const taskIndex = state.tasksArray.findIndex((task) => {
        return task.id === action.payload.id;
      });

      state.tasksArray[taskIndex].isCompleted = action.payload.isCompleted;
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasksArray = state.tasksArray.filter((task) => {
        return task.id !== action.payload;
      });
    },
  },
});

export const { addTask, editTask, markTaskAsCompleted, markTaskAsImportant, deleteTask } = tasksSlice.actions;
export const tasks = tasksSlice.reducer;
