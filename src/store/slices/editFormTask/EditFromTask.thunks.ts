import {
  editTask,
  resetEditedTask,
  setEditFormError,
  setEditFormLoader,
  unsetEditFormLoader,
  TAppDispatch,
} from 'src/store';
import { TasksAgentIntance, UpdateTaskRequest } from 'src/api';
import { mapToInternalUpdateTask } from 'src/helpers';
import { ITask } from 'types/app';

export const fetchUpdateEditFormTask =
  (taskId: ITask['id'], newData: UpdateTaskRequest) => async (dispatch: TAppDispatch) => {
    try {
      dispatch(setEditFormLoader());

      const data = await TasksAgentIntance.updateTask(taskId, newData);

      dispatch(editTask(mapToInternalUpdateTask(taskId, data)));
      dispatch(resetEditedTask());
    } catch (error) {
      dispatch(setEditFormError('Something went wrong. Please, update page'));
    } finally {
      dispatch(unsetEditFormLoader());
    }
  };

export const fetchTaskById = (taskId: ITask['id']) => async (dispatch: TAppDispatch) => {
  try {
    dispatch(setEditFormLoader());

    const data = await TasksAgentIntance.getTask(taskId);

    dispatch(editTask(mapToInternalUpdateTask(taskId, data)));
  } catch (error) {
    dispatch(setEditFormError('Something went wrong. Please, update page'));
  } finally {
    dispatch(unsetEditFormLoader());
  }
};
