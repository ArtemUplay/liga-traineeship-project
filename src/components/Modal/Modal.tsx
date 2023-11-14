import { ModalButton, ModalContent, ModalOverlay, ModalText, ModalTitleIdTypography } from 'src/components/Modal';
import { closeModal, useTasksSlice, useAppDispatch } from 'src/store';

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
    <ModalOverlay onClick={onModalOverlayClick}>
      <ModalContent>
        <ModalTitleIdTypography variant="h3">Task id: {taskInModal?.id}</ModalTitleIdTypography>
        <ModalText variant="h2">Task name: {taskInModal?.name}</ModalText>
        <ModalText>Task info: {taskInModal?.info}</ModalText>
        <ModalText>Task is Important: {taskInModal?.isImportant ? 'yes' : 'no'}</ModalText>
        <ModalText>Task is Completed: {taskInModal?.isImportant ? 'yes' : 'no'}</ModalText>

        <ModalButton onClick={onButtonClose} type="button">
          Close
        </ModalButton>
      </ModalContent>
    </ModalOverlay>
  );
};
