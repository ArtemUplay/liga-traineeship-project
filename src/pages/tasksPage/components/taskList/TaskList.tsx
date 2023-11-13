import { Task } from '../task/Task';
import styles from './TaskList.module.scss';
import { useTasksSlice } from 'src/store/slices/Tasks';
import { Loader } from 'components/Loader';

export const TaskList = () => {
  const { tasks, isLoading, error } = useTasksSlice();
  return (
    <ul className={styles['task-list']}>
      {error ? (
        <p className={styles['task-list__text']}>{error}</p>
      ) : (
        <Loader isLoading={isLoading}>
          {tasks.length > 0 ? (
            tasks.map((task) => {
              return <Task key={task.id} {...task} />;
            })
          ) : (
            <p className={styles['task-list__text']}>Task list is empty</p>
          )}
        </Loader>
      )}
    </ul>
  );
};
