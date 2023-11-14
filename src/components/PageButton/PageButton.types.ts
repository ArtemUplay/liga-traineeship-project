import { ReactNode } from 'react';

export interface IPageButtonProps {
  children: ReactNode;
  type: 'submit' | 'button';
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
