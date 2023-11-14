import { memo } from 'react';
import { ButtonGroup } from '@mui/material';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ITaskButtonProps, StyledEditPageLink, StyledTaskButton } from 'src/pages/tasksPage/components';
import { Paths } from 'constants/constants';
import { useAppDispatch, fetchDeleteTask, fetchUpdateTasksPage } from 'src/store';

const TaskButtonsComponent = ({ id, isCompleted, isImportant }: ITaskButtonProps) => {
  const dispatch = useAppDispatch();

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

  const onEditPageButtonClick = (evt: React.MouseEvent) => {
    evt.stopPropagation();
  };

  const onDeleteButtonClick = (evt: React.MouseEvent) => {
    evt.stopPropagation();

    dispatch(fetchDeleteTask(id));
  };

  return (
    <ButtonGroup>
      <StyledTaskButton type="button" active={isCompleted.toString()} onClick={onIsCompleteduttonClick}>
        <CheckIcon />
      </StyledTaskButton>
      <StyledTaskButton
        type="button"
        active={isImportant.toString()}
        disabled={isCompleted}
        onClick={onIsImportantButtonClick}>
        <PriorityHighIcon />
      </StyledTaskButton>
      <StyledTaskButton onClick={onEditPageButtonClick}>
        <StyledEditPageLink to={`${Paths.FORM_EDIT_ADD_TASK}/${id}`}>
          <EditIcon />
        </StyledEditPageLink>
      </StyledTaskButton>
      <StyledTaskButton type="button" onClick={onDeleteButtonClick}>
        <DeleteIcon />
      </StyledTaskButton>
    </ButtonGroup>
  );
};

export const TaskButtons = memo(TaskButtonsComponent);
