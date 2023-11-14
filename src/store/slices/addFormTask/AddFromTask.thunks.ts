import {
  postNewTask,
  resetNewTask,
  setAddTaskFormLoader,
  setAddTaskPageError,
  unsetAddTaskFormLoader,
  TAppDispatch,
} from 'src/store';
import { TasksAgentIntance, PostTaskRequest } from 'src/api';
import { mapToInternalPostTask } from 'src/helpers';

export const fetchCreateTask = (taskData: PostTaskRequest) => async (dispatch: TAppDispatch) => {
  try {
    dispatch(setAddTaskFormLoader());

    const data = await TasksAgentIntance.postTask(taskData);

    if (typeof data.id === 'number') {
      dispatch(postNewTask(mapToInternalPostTask({ id: data.id, ...data })));
    }

    dispatch(resetNewTask());
  } catch (error) {
    dispatch(setAddTaskPageError('Something went wrong. Please, update page'));
  } finally {
    dispatch(unsetAddTaskFormLoader());
  }
};
