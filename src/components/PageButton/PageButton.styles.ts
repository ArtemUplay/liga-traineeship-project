import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { LIGTH_PURPLE_COLOR, SOFT_BLUE_COLOR, WHITE_COLOR } from 'constants/colors';

export const StyledPageButton = styled(Button)({
  marginTop: 'auto',
  padding: '5px',
  border: `2px solid ${SOFT_BLUE_COLOR}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'inherit',
  textDecoration: 'none',
  transition: 'all 0.3s ease',

  '&:not(:disabled)': {
    backgroundColor: WHITE_COLOR,
  },

  '&:hover': {
    color: WHITE_COLOR,
    backgroundColor: LIGTH_PURPLE_COLOR,
  },
});
