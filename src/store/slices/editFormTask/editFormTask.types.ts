import { ITask } from 'types/app';

export type TEditedTask = Omit<ITask, 'id'>;

export interface IInitialState {
  editedTask: TEditedTask;
  isLoadingEditForm: boolean;
  error: Error | null;
}
