import { useEffect } from 'react';
import { SearchForm, TaskList } from './components';
import { Paths } from 'constants/constants';
import { LinkComponent, Modal } from 'components/index';
import { useAppDispatch, fetchTasks, useTasksSlice } from 'src/store';

export const TasksPage = () => {
  const dispatch = useAppDispatch();
  const { isOpenModal } = useTasksSlice();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <>
      <SearchForm />
      <TaskList />
      <LinkComponent path={Paths.FORM_EDIT_ADD_TASK} text="Add task" />
      {isOpenModal && <Modal />}
    </>
  );
};
