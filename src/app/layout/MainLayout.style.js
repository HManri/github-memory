import styled from 'styled-components';

export const Banner = styled.div`
  padding: ${(props) => props.theme.spacings.medium}px;
  background-color: ${(props) => props.theme.colors.turquoise};
  text-align: center;
`;

export const Title = styled.div`
  ${(props) => props.theme.text.title};
  color: ${(props) => props.theme.colors.white};
`;

export const Wrapper = styled.div`
  position: relative;
  flex: 1;
  background-color: ${(props) => props.theme.colors.wine};
`;
