import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchForm, TaskList } from 'src/pages/tasksPage/components';
import { Modal, PageButton } from 'components/index';
import { useAppDispatch, fetchTasks, useTasksSlice } from 'src/store';
import { Paths } from 'constants/constants';

export const TasksPage = () => {
  const dispatch = useAppDispatch();
  const { isOpenModal } = useTasksSlice();

  const navigate = useNavigate();

  const onNavigateButtonClick = () => {
    navigate(Paths.FORM_EDIT_ADD_TASK);
  };

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <>
      <SearchForm />
      <TaskList />
      <PageButton type="button" onClick={onNavigateButtonClick}>
        Add Task
      </PageButton>
      {isOpenModal && <Modal />}
    </>
  );
};
