import { AxiosError } from 'axios';
import {
  postNewTask,
  resetAddTaskPageError,
  setAddTaskFormLoader,
  setAddTaskPageError,
  unsetAddTaskFormLoader,
} from './AddFormTask.slice';
import { TasksAgentIntance } from 'api/agent';
import { PostTaskRequest } from 'api/model';
import { TAppDispatch } from 'src/store/types/store.types';
import { mapToInternalPostTask } from 'src/helpers';

export const fetchCreateTask = (taskData: PostTaskRequest) => async (dispatch: TAppDispatch) => {
  try {
    dispatch(setAddTaskFormLoader());

    const data = await TasksAgentIntance.postTask(taskData);

    if (typeof data.id === 'number') {
      dispatch(postNewTask(mapToInternalPostTask({ id: data.id, ...data })));
    }
  } catch (error) {
    dispatch(setAddTaskPageError(error as AxiosError));
  } finally {
    dispatch(unsetAddTaskFormLoader());
  }
};
