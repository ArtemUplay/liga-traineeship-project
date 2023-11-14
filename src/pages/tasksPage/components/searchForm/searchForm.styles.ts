import styled from '@emotion/styled';
import { Box, Button, TextField } from '@mui/material';
import { BLACK_COLOR, SOFT_BLUE_COLOR, SOFT_PURPLE_COLOR, WHITE_COLOR } from 'constants/colors';

export const FormSearch = styled(Box)({
  display: 'flex',
  padding: '10px',
  backgroundColor: SOFT_BLUE_COLOR,
  gap: '18px',
  alignItems: 'center',
});

export const SearchInput = styled(TextField)({
  padding: '0',
  backgroundColor: WHITE_COLOR,
});

export const SubmitButton = styled(Button)({
  backgroundColor: WHITE_COLOR,
  border: 0,
  padding: '5px 10px',
  transition: 'all 0.3s ease',
  marginTop: '2px',
  color: BLACK_COLOR,

  '&:hover': {
    backgroundColor: SOFT_PURPLE_COLOR,
    color: WHITE_COLOR,
  },
});
