import { TAppDispatch } from '../../types/store.types';
import { deleteTask, setLoader, setTasks, unsetLoader, updateTask } from '..';
import { TasksAgentIntance } from 'api/agent';
import { mapToInternalTasks, mapToInternalUpdateTask } from 'src/helpers';
import { ITask } from 'types/app';
import { UpdateTaskRequest } from 'api/model';

export const fetchTasks = () => async (dispatch: TAppDispatch) => {
  try {
    dispatch(setLoader());

    const data = await TasksAgentIntance.getAllTasks();

    dispatch(setTasks(mapToInternalTasks(data)));
  } catch (error) {
    console.error(error);
  } finally {
    dispatch(unsetLoader());
  }
};

export const fetchUpdateTasksPage =
  (taskId: ITask['id'], newData: UpdateTaskRequest) => async (dispatch: TAppDispatch) => {
    try {
      dispatch(setLoader());

      const data = await TasksAgentIntance.updateTask(taskId, newData);

      dispatch(updateTask(mapToInternalUpdateTask(taskId, data)));
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoader());
    }
  };

export const fetchDeleteTask = (taskId: ITask['id']) => async (dispatch: TAppDispatch) => {
  try {
    dispatch(setLoader());

    await TasksAgentIntance.deleteTask(taskId);

    dispatch(deleteTask(taskId));
  } catch (error) {
    console.error(error);
  } finally {
    dispatch(unsetLoader());
  }
};
