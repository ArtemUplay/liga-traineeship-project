import { ITask } from 'types/app';

export type TNewTask = Omit<ITask, 'id' | 'isCompleted'>;

export interface IInitialState {
  newTask: TNewTask;
  error: Error | null;
  isLoading: boolean;
}
