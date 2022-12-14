import { ModalWindow, Overlay } from './ModalAddTransaction.styled';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { StyledButton } from 'components/ModalAddTransaction/StyledButton/StyledButton';
import { AddTransactionForm } from '../AddTransactionForm/AddTransactionForm';
import { Heading } from './ModalAddTransaction.styled';
import { StyledCloseButton } from './CloseButton/CloseButton';
import { TransactionForm } from 'components/TransactionForm/TransactionForm';

export const ModalAddTransaction = ({ toggleModal, isOpen }) => {
  const modalRoot = document.querySelector('#modal-root');

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, toggleModal]);

  return createPortal(
    <Overlay>
      <ModalWindow>
        <Heading>Add transaction</Heading>

        <TransactionForm toggleModal={toggleModal} typeForm="add" />
        <StyledButton type="button" onClick={toggleModal}>
          Cancel
        </StyledButton>
        <StyledCloseButton type="button" onClick={toggleModal} />
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};
