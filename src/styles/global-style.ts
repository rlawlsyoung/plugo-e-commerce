import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import { bgColor } from "./theme";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }
  a {
    text-decoration: none;
  }
  body {
    margin:0 auto;
    background-color: ${bgColor};
    font-family: 'Cabin', sans-serif;
    }
`;

export default GlobalStyle;
