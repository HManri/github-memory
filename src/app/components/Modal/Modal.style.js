import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  background-color: rgba(33, 33, 33, 0.55);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: opacity 300ms ease-in-out;

  ${(props) =>
    props.isOpen &&
    css`
      opacity: 1;
    `}
`;

export const BodyWrapper = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 3px 9px 0 rgba(0, 0, 0, 0.25);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  border-radius: 8px;
  padding: ${(props) => props.theme.spacings.big}px;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: ${(props) => props.theme.spacings.medium}px;
  right: ${(props) => props.theme.spacings.medium}px;
  cursor: pointer;
  ${(props) => props.theme.text.h1};
`;
