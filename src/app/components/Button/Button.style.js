import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  display: inline-block;
  padding: ${(props) => props.theme.spacings.tiny}px ${(props) => props.theme.spacings.small}px;
  cursor: pointer;
  box-shadow: 0 3px 9px 0 rgba(0, 0, 0, 0.25);
  white-space: nowrap;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.text};
  border: 1px solid ${(props) => props.theme.colors.darkGrey};
  ${(props) => props.theme.text.default};

  &:hover {
    background-color: ${(props) => props.theme.colors.lightGrey};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.grey};
  }

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      background-color: ${(props) => props.theme.colors.lightGrey};
      color: ${(props) => props.theme.colors.grey};
      opacity: 0.3;

      &:hover {
        background-color: ${(props) => props.theme.colors.lightGrey};
      }
    `}
`;
