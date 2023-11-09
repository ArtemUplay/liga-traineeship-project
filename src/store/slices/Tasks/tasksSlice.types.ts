import { PostTaskResponse, UpdateTaskResponse } from 'api/index';
import { ITask } from 'types/app';

export type TNewTask = PostTaskResponse;

export interface IInitialState {
  tasksArray: ITask[];
  isLoading: boolean;
  error: Error | null;
}

export interface IMarkTaskAsImportantActionPayload {
  id: number;
  isImportant: boolean;
}

export interface IMarkTaskAsCompletedActionPayload {
  id: number;
  isCompleted: boolean;
}
