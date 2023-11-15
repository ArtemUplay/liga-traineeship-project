import { Button, ButtonGroup } from '@mui/material';
import styled from '@emotion/styled';
import { IFilterButtonProps } from 'src/pages/tasksPage/components/filterButtons/filterButtons.types';
import { SOFT_PURPLE_COLOR, WHITE_COLOR } from 'constants/colors';

export const StyledButtonGroup = styled(ButtonGroup)({
  display: 'flex',
});

export const FilterButton = styled(Button)<IFilterButtonProps>(({ active }) => ({
  backgroundColor: active === 'true' ? SOFT_PURPLE_COLOR : WHITE_COLOR,
  color: active === 'true' ? WHITE_COLOR : 'initial',

  '&:hover': {
    backgroundColor: SOFT_PURPLE_COLOR,
  },
}));
