import styled from '@emotion/styled';
import { List } from '@mui/material';
import { LIGTH_PURPLE_COLOR } from 'constants/colors';

export const StyledTaskList = styled(List)({
  flex: '1 1 auto',
  backgroundColor: LIGTH_PURPLE_COLOR,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  listStyle: 'none',
  padding: '10px',
  margin: '0',
  gap: '15px',
  overflowY: 'auto',
  height: '100%',
  maxHeight: '100%',
});
