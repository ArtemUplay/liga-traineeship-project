import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { SOFT_PURPLE_COLOR } from 'constants/colors';
import { ITaskStyledButtonProps } from 'src/pages/tasksPage/components';

export const StyledTaskButton = styled(Button)<ITaskStyledButtonProps>(({ active }) => ({
  border: SOFT_PURPLE_COLOR,
  backgroundColor: active === 'true' ? SOFT_PURPLE_COLOR : 'transparent',
  width: '35px',
  height: '35px',
  padding: '0px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:hover': {
    backgroundColor: SOFT_PURPLE_COLOR,
  },

  '&:disabled': {
    border: 0,
  },
}));

export const StyledEditPageLink = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '35px',
  height: '35px',
  padding: '0px',
});
