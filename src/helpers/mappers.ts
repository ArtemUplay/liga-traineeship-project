import { TPostTaskRequestWithRequiredId } from './mappers.types';
import { GetAllTasksResponse, GetTaskResponse, PostTaskResponse } from 'api/model';
import { ITask } from 'types/app';

export const mapToInternalTasks = (tasks: GetAllTasksResponse): ITask[] => {
  const internalTasks: ITask[] = [];

  tasks.forEach((task) => {
    if (task.id) {
      internalTasks.push({
        id: task.id,
        name: task.name || 'unknown',
        info: task.info || 'unknown',
        isImportant: task.isImportant || false,
        isCompleted: task.isCompleted || false,
      });
    }
  });

  return internalTasks;
};

export const mapToInternalUpdateTask = (taskId: ITask['id'], task: GetTaskResponse): ITask => {
  return {
    id: taskId,
    name: task.name || 'unknown',
    info: task.info || 'unknown',
    isImportant: task.isImportant || false,
    isCompleted: task.isCompleted || false,
  };
};

export const mapToInternalPostTask = (task: TPostTaskRequestWithRequiredId): ITask => {
  return {
    id: task.id,
    name: task.name || 'unknown',
    info: task.info || 'unknown',
    isImportant: task.isImportant || false,
    isCompleted: task.isCompleted || false,
  };
};
