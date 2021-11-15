import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        background-color: #d3d3d3;
        font-family: 'Roboto';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    *{
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }
    div{
        display: flex;
        flex-direction: column;
    }
    
    a{
      color: unset;
      text-decoration: unset;
    }
 `