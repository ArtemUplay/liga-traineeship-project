import { IPageButtonProps, StyledPageButton } from 'src/components';

export const PageButton = ({ type, children, disabled, onClick }: IPageButtonProps) => {
  return (
    <StyledPageButton type={type} disabled={disabled} onClick={onClick}>
      {children}
    </StyledPageButton>
  );
};
