import { memo, useState } from 'react';
import { Box } from '@mui/system';
import {
  TaskButtons,
  StyledListItem,
  ITaskProps,
  StyledListItemName,
  StyledListItemInfo,
} from 'src/pages/tasksPage/components';
import { setOpenModal, useAppDispatch } from 'src/store';

const TaskComponent = ({ id, name, info, isImportant, isCompleted }: ITaskProps) => {
  const [hovered, setHovered] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const onTaskClick = (evt: React.MouseEvent<HTMLLIElement>) => {
    evt.stopPropagation();
    dispatch(setOpenModal({ id, name, info, isImportant, isCompleted }));
  };

  return (
    <StyledListItem
      completed={String(isCompleted)}
      onClick={onTaskClick}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}>
      <Box>
        <StyledListItemName completed={String(isCompleted)} hovered={String(hovered)}>
          {name}
        </StyledListItemName>
        <StyledListItemInfo completed={String(isCompleted)} hovered={String(hovered)}>
          {info}
        </StyledListItemInfo>
      </Box>
      <TaskButtons id={id} isImportant={isImportant} isCompleted={isCompleted} />
    </StyledListItem>
  );
};

export const Task = memo(TaskComponent);
