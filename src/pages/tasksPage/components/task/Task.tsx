import { TaskButtons } from '../taskButtons/TaskButtons';
import styles from './Task.module.scss';
import { ITaskProps } from './Task.types';

export const Task = ({ id, name, info, isImportant, isCompleted }: ITaskProps) => {
  return (
    <li
      className={`${styles['task-list__item']} ${styles['list-item']} ${
        isCompleted ? styles['list-item_completed'] : ''
      }`}>
      <div className={styles['task-list__info-wrapper']}>
        <h3 className={`${styles['list-item__name']} ${isCompleted ? styles['list-item__name_completed'] : ''}`}>
          {name}
        </h3>
        <p className={`${styles['list-item__info']} ${isCompleted ? styles['list-item__info_completed'] : ''}`}>
          {info}
        </p>
      </div>
      <TaskButtons id={id} isImportant={isImportant} isCompleted={isCompleted} />
    </li>
  );
};
