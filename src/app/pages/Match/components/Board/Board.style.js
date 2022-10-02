import styled from 'styled-components';

export const BoardWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-y: auto;

  display: grid;
  grid-template-columns: repeat(4, 150px);
  grid-auto-rows: minmax(150px, auto);
  justify-content: center;
  gap: ${(props) => props.theme.spacings.medium}px;
`;
