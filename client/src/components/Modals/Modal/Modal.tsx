import { FC, ReactNode, SyntheticEvent } from 'react';
import * as S from './styles';

interface IProps {
  onClose: () => void;
  children: ReactNode;
}

export const Modal: FC<IProps> = ({ onClose, children }) => {
  const handleOverlayClick = (e: SyntheticEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <S.ModalOverlay onClick={handleOverlayClick}>
      <S.ModalContainer>{children}</S.ModalContainer>
    </S.ModalOverlay>
  );
};
