import { ISearchForm, ITask } from 'types/app';

export interface ITasksInitialState {
  tasksArray: ITask[];
  searchForm: ISearchForm;
  taskInModal: ITask | null;
  isLoading: boolean;
  isOpenModal: boolean;
  error: string | null;
}
