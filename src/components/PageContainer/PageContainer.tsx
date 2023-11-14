import { PageContainerProps, StyledPageContainerBox } from 'src/components/PageContainer';

export const PageContainer = ({ children }: PageContainerProps) => {
  return <StyledPageContainerBox>{children}</StyledPageContainerBox>;
};
