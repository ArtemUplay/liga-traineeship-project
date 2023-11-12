/* eslint-disable no-unused-vars */
export interface SearchInputProps {
  isInvalid: string;
  disabled: boolean;
  onChange: (text: string) => void;
  value: string;
  onReset?: () => void;
}
