import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalReset = createGlobalStyle`
  ${normalize};

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1;
  }

  ul, li {
    list-style: none;
  }

  input {
    background: transparent;
    border: 0;
    outline: 0;
  }

  button {
    background: 0;
    padding: 0;
    border: 0;
    outline: 0;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
  
  svg {
    font-size: 20px;
  }
`;

export default GlobalReset;