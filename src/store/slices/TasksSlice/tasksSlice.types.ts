import { ITask } from 'types/appTypes';

export type TNewTask = Omit<ITask, 'id' | 'isCompleted'>;

export interface IInitialState {
  tasksArray: ITask[];
}

export interface IMarkTaskAsImportantActionPayload {
  id: string;
  isImportant: boolean;
}

export interface IMarkTaskAsCompletedActionPayload {
  id: string;
  isCompleted: boolean;
}
