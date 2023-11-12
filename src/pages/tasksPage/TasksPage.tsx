import { useEffect } from 'react';
import { SearchForm, TaskList } from './components';
import { Paths } from 'constants/constants';
import { LinkComponent } from 'components/index';
import { useAppDispatch } from 'src/store/hooks/hooks';
import { fetchTasks } from 'src/store/slices/Tasks';

export const TasksPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <>
      <SearchForm />
      <TaskList />
      <LinkComponent path={Paths.FORM_EDIT_ADD_TASK} text="Add task" />
    </>
  );
};
