import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import {
  LIGHT_GRAY_COLOR,
  SEMI_TRANSPARENT_BLACK,
  SOFT_BLUE_COLOR,
  SOFT_PURPLE_COLOR,
  WHITE_COLOR,
} from 'constants/colors';

export const ModalOverlay = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: SEMI_TRANSPARENT_BLACK,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const ModalContent = styled(Box)({
  backgroundColor: SOFT_PURPLE_COLOR,
  padding: '20px',
  borderRadius: '8px',
  maxWidth: '400px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const ModalTitleIdTypography = styled(Typography)({
  fontSize: '40px',
  color: WHITE_COLOR,
  margin: 0,
});

export const ModalText = styled(Typography)({
  fontSize: '20px',
  color: LIGHT_GRAY_COLOR,
  margin: 0,
  wordBreak: 'break-all',
});

export const ModalButton = styled(Button)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: WHITE_COLOR,
  border: 0,
  padding: '10px',
  color: SOFT_PURPLE_COLOR,
  transition: 'all 0.3s ease',

  '&:hover': {
    backgroundColor: SOFT_BLUE_COLOR,
    color: WHITE_COLOR,
  },
});
