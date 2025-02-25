import { FC } from 'react';
import * as S from './styles';

interface IProps {
  handleAuthButtonClick: () => void;
}

export const Header: FC<IProps> = ({ handleAuthButtonClick }) => {
  return (
    <S.HeaderContainer>
      <S.Logo>LOCO</S.Logo>
      <S.Button onClick={handleAuthButtonClick}>Sign in</S.Button>
    </S.HeaderContainer>
  );
};
