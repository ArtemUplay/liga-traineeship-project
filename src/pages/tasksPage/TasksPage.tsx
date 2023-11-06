import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TaskList } from './components/taskList/TaskList';
import { Paths } from 'constants/constants';
import { LinkComponent } from 'components/index';
import { useAppDispatch } from 'src/store/hooks/hooks';
import { getTasks } from 'src/store/slices';

export const TasksPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, []);

  return (
    <>
      <TaskList />
      <LinkComponent path={Paths.FORM_EDIT_ADD_TASK} text="Add task" />
    </>
  );
};
