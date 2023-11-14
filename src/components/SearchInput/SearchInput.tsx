import { ISearchInputProps } from './SearchInput.types';
import { StyledTextField } from './SearchInput.styles';

export const SearchInput = (props: ISearchInputProps) => {
  return <StyledTextField {...props} />;
};
