import { useState } from 'react';
import { AuthModal } from '../../components/Modals/AuthModal/AuthModal';
import * as S from './styles';

export const Header = () => {
  const [isAuthModalOpened, setIsAuthModalOpened] = useState(false);

  return (
    <>
      <S.HeaderContainer>
        <S.Logo>LOCO</S.Logo>
        <S.Button onClick={() => setIsAuthModalOpened(true)}>Sign in</S.Button>
      </S.HeaderContainer>
      {isAuthModalOpened && (
        <AuthModal onClose={() => setIsAuthModalOpened(false)} />
      )}
    </>
  );
};
