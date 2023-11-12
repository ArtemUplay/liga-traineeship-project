import { memo } from 'react';
import { TaskButtons } from '../taskButtons/TaskButtons';
import styles from './Task.module.scss';
import { ITaskProps } from './Task.types';
import { setOpenModal } from 'src/store/slices';
import { useAppDispatch } from 'src/store';

const TaskComponent = ({ id, name, info, isImportant, isCompleted }: ITaskProps) => {
  const dispatch = useAppDispatch();

  const onTaskClick = (evt: React.MouseEvent<HTMLLIElement>) => {
    evt.stopPropagation();
    dispatch(setOpenModal({ id, name, info, isImportant, isCompleted }));
  };

  return (
    <>
      <li
        onClick={onTaskClick}
        className={`${styles['list-item']} ${isCompleted ? styles['list-item_completed'] : ''} `}>
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
    </>
  );
};

export const Task = memo(TaskComponent);
