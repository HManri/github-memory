import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    font-family: Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  
  body {
    min-height: 100%;
    height: 100%;
    font-family: Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  
  input, label, select, button, textarea {
    margin: 0;
    border: 0;
    padding: 0;
    white-space: normal;
    background: none;
    line-height: 1;
    
    &:focus-visible {
      outline: none;
    }
  }
  
  input:focus, audio {
    outline: 0;
  }
  
  a {
    &, &:hover, &:active, &:visited {
      color: ${(props) => props.theme.colors.link};
      text-decoration: none;
    }
  }
  
  #app {
    height: 100%;
  }
`;

export default GlobalStyle;
