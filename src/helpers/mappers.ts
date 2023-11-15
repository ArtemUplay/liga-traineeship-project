import { TPostTaskRequestWithRequiredId } from 'src/helpers';
import { GetAllTasksQuery, GetAllTasksResponse, GetTaskResponse } from 'api/model';
import { FILTER } from 'constants/constants';
import { ISearchForm, ITask } from 'types/app';

export const mapToExternalParams = (params?: ISearchForm): GetAllTasksQuery | undefined => {
  if (!params) return undefined;

  const { searchValue, filterType } = params;
  let isCompleted = undefined;

  if (filterType === FILTER.DONE) isCompleted = true;
  else if (filterType === FILTER.ACTIVE) isCompleted = false;

  return {
    name_like: searchValue ?? undefined,
    isImportant: filterType === FILTER.IMPORTANT ? true : undefined,
    isCompleted,
  };
};

export const mapToInternalTasks = (tasks: GetAllTasksResponse): ITask[] => {
  const internalTasks: ITask[] = [];

  tasks.forEach((task) => {
    if (task.id) {
      const name = typeof task.name === 'string' && task.name.trim() !== '' ? task.name.trim() : 'unknown';
      const info = typeof task.info === 'string' && task.info.trim() !== '' ? task.info.trim() : 'unknown';
      const isCompleted = !!task.isCompleted || false;
      const isImportant = isCompleted ? false : !!task.isImportant || false;

      internalTasks.push({
        id: task.id,
        name,
        info,
        isImportant,
        isCompleted,
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
