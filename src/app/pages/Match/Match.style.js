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
  padding: ${(props) => props.theme.spacings.big}px 0;
  box-sizing: border-box;
`;
