import { Task } from '../task/Task';
import styles from './TaskList.module.scss';
import { ITaskListProps } from './TaskList.types';

export const TaskList = ({ tasks }: ITaskListProps) => {
  return (
    <ul className={styles['task-list']}>
      {tasks.map((task) => {
        return <Task key={task.id} {...task} />;
      })}
    </ul>
  );
};
