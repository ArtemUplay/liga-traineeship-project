export interface ITask {
  id: number;
  name: string;
  info: string;
  isImportant: boolean;
  isCompleted: boolean;
}

export interface IEditTask {
  name: string;
  info: string;
  isImportant: boolean;
  isCompleted: boolean;
}
