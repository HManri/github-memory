import React, { useState, useEffect, useRef, useCallback } from 'react';
import { bool, func, node, string } from 'prop-types';
import ReactDOM from 'react-dom';

import { Wrapper, BodyWrapper, CloseButton } from './Modal.style';

export default function Modal({ isOpen, testId, onClose, children }) {
  const [isOpenState, setIsOpenState] = useState(false);
  const [isClosingModal, setIsClosingModal] = useState(false);
  const overlayRef = useRef();
  const bodyRef = useRef();

  const handleOnTransitionEnd = () => {
    if (!isOpenState && isClosingModal) {
      setIsClosingModal(false);
    }
  };

  const handleOnCloseModal = () => {
    setIsClosingModal(true);
    setIsOpenState(false);
  };

  const handleOnClickOutside = useCallback(
    (event) => {
      if (event.target === overlayRef.current) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen && !isOpenState) {
      setIsOpenState(true);

      if (overlayRef.current) {
        overlayRef.current.addEventListener('click', handleOnClickOutside);
      }

      return;
    }

    if (!isOpen && isOpenState) {
      handleOnCloseModal();

      if (overlayRef?.current) {
        overlayRef.current.removeEventListener('click', handleOnClickOutside);
      }
    }
  }, [isOpen, isOpenState, handleOnClickOutside]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Wrapper
      data-testid={testId}
      ref={overlayRef}
      isOpen={isOpenState}
      onTransitionEnd={handleOnTransitionEnd}
    >
      <BodyWrapper ref={bodyRef}>
        <CloseButton data-testid={`${testId}__close_btn`} onClick={onClose}>
          &times;
        </CloseButton>
        {children}
      </BodyWrapper>
    </Wrapper>,
    document.body,
  );
}

Modal.propTypes = {
  isOpen: bool.isRequired,
  testId: string,
  onClose: func.isRequired,
  children: node.isRequired,
};
