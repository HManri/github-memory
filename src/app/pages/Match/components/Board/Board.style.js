import styled from 'styled-components';

export const BoardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: ${(props) => props.theme.spacings.big}px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;
