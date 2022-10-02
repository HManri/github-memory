import styled from 'styled-components';

export const MatchWrapper = styled.div`
  position: relative;
  height: 100%;
`;

export const BoardWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  height: 95%;
  width: 95%;
  background-color: ${(props) => props.theme.colors.greengrey};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${(props) => props.theme.spacings.big}px;
  border-radius: 16px;
  padding: ${(props) => props.theme.spacings.big}px;
  box-sizing: border-box;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.spacings.medium}px;
  padding: ${(props) => props.theme.spacings.medium}px;
`;

export const ModalBodyTitle = styled.div`
  ${(props) => props.theme.text.h1};
`;

export const ModalBodyScore = styled.div`
  ${(props) => props.theme.text.h1};
`;

export const ModalBodyActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${(props) => props.theme.spacings.medium}px;
  margin-top: ${(props) => props.theme.spacings.medium}px;

  button {
    ${(props) => props.theme.text.h2};
  }
`;

export const LoadingGame = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 16px;
  background-color: rgba(33, 33, 33, 0.55);
`;

export const SpinnerWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.spacings.medium}px;
  border-radius: 16px;
`;
