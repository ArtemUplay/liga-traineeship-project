import { ITask } from 'types/appTypes';

export type TNewTask = Omit<ITask, 'id' | 'isCompleted'>;

export interface IInitialState {
  newTask: TNewTask;
}
