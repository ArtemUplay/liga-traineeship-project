import { Link } from 'react-router-dom';
import { TaskList } from './components/taskList/TaskList';
import styles from './taskPage.module.scss';
import { ITasksPageProps } from './TasksPage.types';
import { Paths } from 'constants/constants';
import { LinkComponent } from 'components/index';

export const TasksPage = ({ tasks }: ITasksPageProps) => {
  return (
    <>
      <TaskList tasks={tasks} />
      <LinkComponent path={Paths.FORM_EDIT_ADD_TASK} text="Add task" />
    </>
  );
};
