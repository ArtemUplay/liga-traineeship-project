import { AxiosError } from 'axios';
import { ITask } from 'types/app';

export type TNewTask = Omit<ITask, 'id' | 'isCompleted'>;

export interface IAddTaskInitialState {
  newTask: TNewTask;
  error: AxiosError | null;
  isLoading: boolean;
}
