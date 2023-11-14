import { TextFieldProps } from '@mui/material';

type ExcludeVariant = Omit<TextFieldProps, 'variant'>;

export type ISearchInputProps = ExcludeVariant;
