import React, { useState, useEffect, useRef, useCallback } from 'react';
import { bool, func, node, string } from 'prop-types';
import ReactDOM from 'react-dom';

import { Wrapper, BodyWrapper, CloseButton } from './Modal.style';

export default function Modal({
  isOpen,
  showCloseButton,
  closeOnClickOutside,
  testId,
  onClose,
  children,
}) {
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

      if (closeOnClickOutside && overlayRef.current) {
        overlayRef.current.addEventListener('click', handleOnClickOutside);
      }

      return;
    }

    if (!isOpen && isOpenState) {
      handleOnCloseModal();

      if (closeOnClickOutside && overlayRef?.current) {
        overlayRef.current.removeEventListener('click', handleOnClickOutside);
      }
    }
  }, [isOpen, isOpenState, handleOnClickOutside, closeOnClickOutside]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Wrapper
      data-testid={testId}
      ref={overlayRef}
      isOpen={isOpenState}
      onTransitionEnd={handleOnTransitionEnd}
    >
      <BodyWrapper ref={bodyRef}>
        {showCloseButton && (
          <CloseButton data-testid={`${testId}__close_btn`} onClick={onClose}>
            &times;
          </CloseButton>
        )}
        {children}
      </BodyWrapper>
    </Wrapper>,
    document.body,
  );
}

Modal.defaultProps = {
  showCloseButton: true,
  closeOnClickOutside: true,
};

Modal.propTypes = {
  isOpen: bool.isRequired,
  showCloseButton: bool,
  closeOnClickOutside: bool,
  testId: string,
  onClose: func.isRequired,
  children: node.isRequired,
};
