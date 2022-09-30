import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  box-sizing: border-box;
  padding: ${(props) => props.theme.spacings.tiny}px;
  border: 3px solid ${(props) => props.theme.colors.border};
  width: 200px;
  height: 200px;

  > img {
    display: block;
    width: 100%;
    height: 100%;
  }

  ${(props) =>
    props.active &&
    css`
      background-color: blue;
    `}

  ${(props) =>
    props.disabled &&
    css`
      background-color: yellow;
    `};
`;