import styled from 'styled-components';

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
  grid-template-columns: repeat(4, 100px);
  grid-auto-rows: minmax(120px, auto);
  justify-content: center;
  gap: ${(props) => props.theme.spacings.medium}px;
`;

export const BoardResults = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.theme.spacings.small}px;
  margin-top: ${(props) => props.theme.spacings.medium}px;
`;

export const BoardResultsText = styled.div`
  ${(props) => props.theme.text.h2};
`;

export const BoardResultsActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
