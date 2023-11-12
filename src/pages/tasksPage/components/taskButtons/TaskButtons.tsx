import { Link } from 'react-router-dom';
import { memo, useState } from 'react';
import styles from './TaskButtons.module.scss';
import { ITaskButtonProps } from './TaskButtons.types';
import { Paths } from 'constants/constants';
import { useAppDispatch } from 'src/store/hooks/hooks';
import { fetchDeleteTask, fetchUpdateTasksPage } from 'src/store/slices/Tasks';

const TaskButtonsComponent = ({ id, isCompleted, isImportant }: ITaskButtonProps) => {
  const dispatch = useAppDispatch();
  const [isCompletedValue, setIsCompletedValue] = useState<boolean>(isCompleted);

  const onIsCompleteduttonClick = (evt: React.MouseEvent) => {
    evt.stopPropagation();

    dispatch(fetchUpdateTasksPage(id, { isCompleted: !isCompleted, isImportant: false }));
  };

  const onIsImportantButtonClick = (evt: React.MouseEvent) => {
    evt.stopPropagation();

    if (isCompleted) {
      return;
    }

    dispatch(fetchUpdateTasksPage(id, { isImportant: !isImportant }));
  };

  const onLinkEditPageButtonClick = (evt: React.MouseEvent) => {
    evt.stopPropagation();
  };

  const onDeleteButtonClick = (evt: React.MouseEvent) => {
    evt.stopPropagation();

    dispatch(fetchDeleteTask(id));
  };

  return (
    <div className={styles['list-item__buttons']}>
      <button
        type="button"
        className={`${styles['list-item__button']} ${isCompleted ? styles['list-item__button_active'] : ''}`}
        onClick={onIsCompleteduttonClick}>
        <svg className={styles['list-item__icon']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
        </svg>
      </button>
      <button
        type="button"
        disabled={isCompleted}
        className={`${styles['list-item__button']} ${isImportant ? styles['list-item__button_active'] : ''}`}
        onClick={onIsImportantButtonClick}>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 64 512">
          <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM32 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
        </svg>
      </button>
      <button type="button" className={styles['list-item__button']} onClick={onLinkEditPageButtonClick}>
        <Link to={`${Paths.FORM_EDIT_ADD_TASK}/${id}`} className={styles['list-item__link']}>
          <svg className={styles['list-item__icon']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
          </svg>
        </Link>
      </button>
      <button type="button" className={styles['list-item__button']} onClick={onDeleteButtonClick}>
        <svg className={styles['list-item__icon']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
        </svg>
      </button>
    </div>
  );
};

export const TaskButtons = memo(TaskButtonsComponent);
