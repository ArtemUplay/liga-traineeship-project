import { useEffect } from 'react';
import { TaskList } from './components/taskList/TaskList';
import { Paths } from 'constants/constants';
import { LinkComponent } from 'components/index';
import { useAppDispatch, useAppSelector } from 'src/store/hooks/hooks';
import { fetchTasks } from 'src/store/slices/Tasks';

export const TasksPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <>
      <TaskList />
      <LinkComponent path={Paths.FORM_EDIT_ADD_TASK} text="Add task" />
    </>
  );
};
