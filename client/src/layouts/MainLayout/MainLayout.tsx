import { FC, ReactNode } from 'react';
import { Header } from '../Header/Header';
import * as S from './styles';

interface IProps {
  children: ReactNode;
}

export const MainLayout: FC<IProps> = ({ children }) => {

  return (
    <S.MainLayoutContainer>
      <Header />
      <S.MainContent>
        {children}
      </S.MainContent>
    </S.MainLayoutContainer>
  );
};
