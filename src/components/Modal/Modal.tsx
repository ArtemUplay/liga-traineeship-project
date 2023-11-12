import styles from './Modal.module.scss';
import { closeModal, useTasksSlice } from 'src/store/slices';
import { useAppDispatch } from 'src/store';

export const Modal = () => {
  const dispatch = useAppDispatch();

  const { taskInModal } = useTasksSlice();

  const onButtonClose = () => {
    dispatch(closeModal());
  };

  const onModalOverlayClick = (evt: React.MouseEvent) => {
    if (evt.target === evt.currentTarget) {
      onButtonClose();
    }
  };

  return (
    <div onClick={onModalOverlayClick} className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 className={styles['title-id']}>Task id: {taskInModal?.id}</h2>
        <h2 className={styles.text}>Task name: {taskInModal?.name}</h2>
        <p className={styles.text}>Task info: {taskInModal?.info}</p>
        <p className={styles.text}>Task is Important: {taskInModal?.isImportant ? 'yes' : 'no'}</p>
        <p className={styles.text}>Task is Completed: {taskInModal?.isImportant ? 'yes' : 'no'}</p>

        <button className={styles.button} onClick={onButtonClose} type="button">
          Close
        </button>
      </div>
    </div>
  );
};
