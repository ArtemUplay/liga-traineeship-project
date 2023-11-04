import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TaskList } from './components/taskList/TaskList';
import { Paths } from 'constants/constants';
import { LinkComponent } from 'components/index';
import { tasks } from 'src/__mocks__/mocks';
import { getTasks } from 'src/store/slices';

export const TasksPage = () => {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(getTasks(tasks));
  }, []);

  return (
    <>
      <TaskList />
      <LinkComponent path={Paths.FORM_EDIT_ADD_TASK} text="Add task" />
    </>
  );
};
