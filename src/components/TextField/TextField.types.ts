import { ChangeEvent, HTMLInputTypeAttribute } from 'react';

export interface TextFieldProps {
  label: string;
  placeholder?: string;
  inputType?: HTMLInputTypeAttribute;
  containerClassName?: string;
  value?: string;
  onChange: (value: string) => void;
  errorText?: string;
  isInvalid: string;
  disabled: boolean;
}
