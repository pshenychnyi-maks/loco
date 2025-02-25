import { FC, ReactNode, useState } from 'react';
import { Header } from '../Header/Header';
import * as S from './styles';
import { AuthModal } from '../../components/Modals/AuthModal/AuthModal';

interface IProps {
  children: ReactNode;
}

export const MainLayout: FC<IProps> = ({ children }) => {
  const [isAuthModalOpened, setIsAuthModalOpened] = useState(false);

  return (
    <>
      <S.MainLayoutContainer>
        <Header handleAuthButtonClick={() => setIsAuthModalOpened(true)} />
        <S.MainContent>{children}</S.MainContent>
      </S.MainLayoutContainer>

      {isAuthModalOpened && (
        <AuthModal onClose={() => setIsAuthModalOpened(false)} />
      )}
    </>
  );
};
