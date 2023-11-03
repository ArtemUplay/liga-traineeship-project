import { useNavigate, useParams } from 'react-router-dom';
import styles from './TaskEditPage.module.scss';
import { ITaskEditPageProps } from './TaskEditPage.types';
import { Checkbox, TextField } from 'components/index';
import { Paths } from 'constants/constants';

export const TaskEditPage = ({ tasks }: ITaskEditPageProps) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const currentTask = tasks.find((task) => {
    return task.id === id;
  });

  const onButtonNavigateClick = () => {
    navigate(Paths.TASK_LIST, { replace: true });
  };

  return (
    <>
      <form className={styles.form}>
        <TextField label="Task name" value={currentTask && currentTask.name} />
        <TextField label="Task info" value={currentTask && currentTask.info} />
        <Checkbox label="isImportant" checked={currentTask && currentTask.isImportant} />
        {id && <Checkbox label="isCompleted" checked={currentTask && currentTask.isCompleted} />}
      </form>
      <button type="button" className={styles.form__button} onClick={onButtonNavigateClick}>
        {id ? 'Edit task' : 'Add task'}
      </button>
    </>
  );
};
