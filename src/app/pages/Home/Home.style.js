import styled from 'styled-components';

export const HomeWrapper = styled.div`
  position: relative;
  height: 100%;
  background-color: ${(props) => props.theme.colors.wine};
`;

export const HomeFloating = styled.div`
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
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${(props) => props.theme.spacings.small}px;
`;

export const MainTitle = styled.div`
  ${(props) => props.theme.text.title};
  color: ${(props) => props.theme.colors.lightBlack};
`;

export const StrongTitle = styled.div`
  ${(props) => props.theme.text.title};
  font-weight: 600;
`;

export const ButtonText = styled.span`
  ${(props) => props.theme.text.h1};
  text-transform: uppercase;
`;

export const HomeActions = styled.div``;
