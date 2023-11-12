import { AxiosError } from 'axios';
import { ISearchForm, ITask } from 'types/app';

export interface ITasksInitialState {
  tasksArray: ITask[];
  searchForm: ISearchForm;
  isLoading: boolean;
  error: AxiosError | Error | null;
}

export interface IMarkTaskAsImportantActionPayload {
  id: number;
  isImportant: boolean;
}

export interface IMarkTaskAsCompletedActionPayload {
  id: number;
  isCompleted: boolean;
}
