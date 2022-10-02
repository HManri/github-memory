import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  border: 2px solid ${(props) => props.theme.colors.green};
  border-radius: 4px;
  min-width: 50px;
  min-height: 50px;
  background-color: ${(props) => props.theme.colors.grass};
  overflow: hidden;

  > img {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.3s;
    object-fit: cover;
    pointer-events: none;
  }

  ${(props) =>
    props.active &&
    css`
      > img {
        opacity: 1;
      }
    `}

  ${(props) =>
    props.disabled &&
    css`
      > img {
        opacity: 1;
      }
    `};
`;

export const TranslucidLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.white};
  opacity: 0;
  transition: opacity 0.4s;

  ${(props) =>
    props.show &&
    css`
      opacity: 0.8;
    `};
`;
