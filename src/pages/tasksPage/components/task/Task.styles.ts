import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import { IStyledListItemInfoProps, IStyledListItemProps, IStyledListNameProps } from 'src/pages/tasksPage/components';
import { DARK_PURPLE_COLOR, GRAY_COLOR, SOFT_BLUE_COLOR, WHITE_COLOR } from 'constants/colors';

export const StyledListItem = styled(ListItem)<IStyledListItemProps>(({ completed }) => ({
  backgroundColor: completed === 'true' ? GRAY_COLOR : WHITE_COLOR,
  display: 'flex',
  padding: '10px',
  justifyContent: 'space-between',
  borderRadius: '10px',
  transition: 'all 0.3s ease',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: DARK_PURPLE_COLOR,
  },
}));

export const StyledListItemName = styled(Typography)<IStyledListNameProps>(({ completed, hovered }) => ({
  margin: '0',
  maxWidth: '400px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontSize: '20px',
  color: hovered === 'true' ? WHITE_COLOR : SOFT_BLUE_COLOR,
  transition: 'all 0.3s ease',
  textDecoration: completed === 'true' ? 'line-through' : 'none',
}));

export const StyledListItemInfo = styled(Typography)<IStyledListItemInfoProps>(({ completed, hovered }) => ({
  margin: '0',
  maxWidth: '400px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontSize: '16px',
  transition: 'all 0.3s ease',
  color: hovered === 'true' ? WHITE_COLOR : SOFT_BLUE_COLOR,
  textDecoration: completed === 'true' ? 'line-through' : 'none',
}));
