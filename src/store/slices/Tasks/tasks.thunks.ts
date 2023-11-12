import { AxiosError } from 'axios';
import { TAppDispatch } from '../../types/store.types';
import {
  deleteTask,
  setLoaderTasksPage,
  setSearchForm,
  setTaskPageError,
  setTasks,
  unsetLoaderTasksPage,
  updateTask,
} from '..';
import { TasksAgentIntance } from 'api/agent';
import { mapToExternalParams, mapToInternalTasks, mapToInternalUpdateTask } from 'src/helpers';
import { ISearchForm, ITask } from 'types/app';
import { UpdateTaskRequest } from 'api/model';

export const fetchTasks = (searchParams?: ISearchForm) => async (dispatch: TAppDispatch) => {
  try {
    dispatch(setLoaderTasksPage());

    if (searchParams) {
      dispatch(setSearchForm(searchParams));
    }

    const externalSearchParams = mapToExternalParams(searchParams);
    const data = await TasksAgentIntance.getAllTasks(externalSearchParams);

    dispatch(setTasks(mapToInternalTasks(data)));
  } catch (error) {
    dispatch(setTaskPageError(error as AxiosError));
  } finally {
    dispatch(unsetLoaderTasksPage());
  }
};

export const fetchUpdateTasksPage =
  (taskId: ITask['id'], newData: UpdateTaskRequest) => async (dispatch: TAppDispatch) => {
    try {
      dispatch(setLoaderTasksPage());

      const data = await TasksAgentIntance.updateTask(taskId, newData);

      dispatch(updateTask(mapToInternalUpdateTask(taskId, data)));
    } catch (error) {
      dispatch(setTaskPageError(error as AxiosError));
    } finally {
      dispatch(unsetLoaderTasksPage());
    }
  };

export const fetchDeleteTask = (taskId: ITask['id']) => async (dispatch: TAppDispatch) => {
  try {
    dispatch(setLoaderTasksPage());

    await TasksAgentIntance.deleteTask(taskId);

    dispatch(deleteTask(taskId));
  } catch (error) {
    dispatch(setTaskPageError(error as AxiosError));
  } finally {
    dispatch(unsetLoaderTasksPage());
  }
};
