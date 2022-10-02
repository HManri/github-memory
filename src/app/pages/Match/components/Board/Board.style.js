import styled from 'styled-components';
import { device } from 'theme/device';

export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-y: auto;
`;

export const BoardGame = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-auto-rows: minmax(120px, auto);
  justify-content: center;
  gap: ${(props) => props.theme.spacings.medium}px;

  @media ${device.desktop} {
    grid-template-columns: repeat(4, 100px);
    grid-auto-rows: minmax(120px, auto);
  }
`;

export const BoardResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${(props) => props.theme.spacings.small}px;
  padding: ${(props) => props.theme.spacings.small}px;
  margin-top: ${(props) => props.theme.spacings.medium}px;

  @media ${device.desktop} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const BoardResultsText = styled.div`
  ${(props) => props.theme.text.h2};
`;

export const BoardResultsActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
