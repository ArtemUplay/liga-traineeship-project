import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { SOFT_PURPLE_COLOR } from 'constants/colors';

export const MainTitleStyled = styled(Typography)({
  minHeight: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '30px',
  margin: '0',
  backgroundColor: SOFT_PURPLE_COLOR,
  color: '#fff',
  fontStyle: 'italic',
});
