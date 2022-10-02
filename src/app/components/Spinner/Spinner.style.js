import styled from 'styled-components';

export const SpinnerContainer = styled.div`
  border: ${(props) => props.theme.spacings.tiny}px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-left-color: ${(props) => props.theme.colors.orange};
  width: 36px;
  height: 36px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
