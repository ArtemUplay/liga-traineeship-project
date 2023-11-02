import { useParams } from 'react-router-dom';
import styles from './editForm.module.scss';
import { IEditFormPageProps } from './EditFormPage.types';
import { Checkbox, LinkComponent, TextField } from 'components/index';
import { Paths } from 'constants/constants';

export const EditFormPage = ({ tasks, setTasks }: IEditFormPageProps) => {
  const { id } = useParams();

  const currentTask = tasks.find((task) => {
    return task.id === id;
  });

  return (
    <>
      <form className={styles.form}>
        <TextField label="Task name" value={currentTask && currentTask.name} />
        <TextField label="Task info" value={currentTask && currentTask.info} />
        <Checkbox label="isImportant" checked={currentTask && currentTask.isImportant} />
        {id && <Checkbox label="isCompleted" checked={currentTask && currentTask.isCompleted} />}
      </form>
      <LinkComponent path={Paths.TASK_LIST} text={id ? 'Edit task' : 'Add task'} />
    </>
  );
};
