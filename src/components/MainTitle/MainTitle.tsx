import { IMainTitleProps, MainTitleStyled } from 'src/components/MainTitle';

export const MainTtile = ({ text }: IMainTitleProps) => {
  return <MainTitleStyled variant="h1">{text}</MainTitleStyled>;
};
