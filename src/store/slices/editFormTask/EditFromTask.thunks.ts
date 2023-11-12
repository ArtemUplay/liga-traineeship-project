import { AxiosError } from 'axios';
import { editTask, setEditFormError, setEditFormLoader, unsetEditFormLoader } from './editFormTask.slice';
import { TasksAgentIntance } from 'api/agent';
import { UpdateTaskRequest } from 'api/model';
import { mapToInternalUpdateTask } from 'src/helpers';
import { TAppDispatch } from 'src/store/types/store.types';
import { ITask } from 'types/app';

export const fetchUpdateEditFormTask =
  (taskId: ITask['id'], newData: UpdateTaskRequest) => async (dispatch: TAppDispatch) => {
    try {
      dispatch(setEditFormLoader());

      const data = await TasksAgentIntance.updateTask(taskId, newData);

      dispatch(editTask(mapToInternalUpdateTask(taskId, data)));
    } catch (error) {
      dispatch(setEditFormError(error as AxiosError));
    } finally {
      dispatch(unsetEditFormLoader());
    }
  };
