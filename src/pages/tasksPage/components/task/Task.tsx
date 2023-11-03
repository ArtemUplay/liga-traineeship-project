import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TaskButtons } from '../taskButtons/TaskButtons';
import styles from './Task.module.scss';
import { ITaskProps } from './Task.types';
import { Paths } from 'constants/constants';

export const Task = ({ id, name, info, isImportant, isCompleted }: ITaskProps) => {
  const [isImportantValue, setIsImportantValue] = useState<boolean>(isImportant);
  const [isCompletedValue, setIsCompletedValue] = useState<boolean>(isCompleted);

  return (
    <li
      className={`${styles['task-list__item']} ${styles['list-item']} ${
        isCompletedValue ? styles['list-item_completed'] : ''
      }`}>
      <div className={styles['task-list__info-wrapper']}>
        <h3 className={`${styles['list-item__name']} ${isCompletedValue ? styles['list-item__name_completed'] : ''}`}>
          {name}
        </h3>
        <p className={`${styles['list-item__info']} ${isCompletedValue ? styles['list-item__info_completed'] : ''}`}>
          {info}
        </p>
      </div>
      <TaskButtons
        id={id}
        isImportantValue={isImportantValue}
        isCompletedValue={isCompletedValue}
        setIsCompletedValue={setIsCompletedValue}
        setIsImportantValue={setIsImportantValue}
      />
    </li>
  );
};
