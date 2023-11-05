import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TaskList } from './components/taskList/TaskList';
import { Paths } from 'constants/constants';
import { LinkComponent } from 'components/index';

export const TasksPage = () => {
  return (
    <>
      <TaskList />
      <LinkComponent path={Paths.FORM_EDIT_ADD_TASK} text="Add task" />
    </>
  );
};
