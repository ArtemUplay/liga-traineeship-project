import { ITask } from 'types/app';

export type TEditedTask = Omit<ITask, 'id'>;

export interface IEditTaskInitialState {
  editedTask: TEditedTask;
  isLoadingEditForm: boolean;
  error: string | null;
}
