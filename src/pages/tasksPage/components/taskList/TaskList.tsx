import { Task } from '../task/Task';
import styles from './TaskList.module.scss';
import { useAppSelector } from 'src/store/types/store.types';

export const TaskList = () => {
  const tasks = useAppSelector((state) => state.tasks.tasksArray);

  return (
    <ul className={styles['task-list']}>
      {tasks.length > 0 ? (
        tasks.map((task) => {
          return <Task key={task.id} {...task} />;
        })
      ) : (
        <p className={styles['task-list__text']}>Task list is empty</p>
      )}
    </ul>
  );
};
