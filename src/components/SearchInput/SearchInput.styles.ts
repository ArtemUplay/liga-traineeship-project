import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import { ISearchInputProps } from 'src/components/SearchInput';
import { WHITE_COLOR } from 'constants/colors';

export const StyledTextField = styled(TextField)<ISearchInputProps>({
  backgroundColor: WHITE_COLOR,
});
