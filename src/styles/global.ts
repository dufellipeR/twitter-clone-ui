import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }

    body {

      -webkit-font-smoothing: antialiased;
    }

    /* body, input, button {
      font: 16px Roboto,sans-serif;
    } */

    html, body, #root { 
      max-height: 100vh;
      max-width: 100vw;

      width: 100%;
      height: 100%;
    }

    /* Centraliza o conteudo */
    /* #root {
      max-width: 960px;
      margin: 0 auto;
      padding: 40px 20px;
    } */

    *, button, input { 
      border: 0;
      background:none;
      font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }

    button {
      cursor: pointer
    }

    :root {
    --primary: #000;
    --secondary: #15181C;
    --search: #202327;
    --white: #D9D9D9;
    --gray: #7A7A7A;
    --outline: #2F3336;
    --retweet: #00C06B;
    --like: #E8265E;
    --twitter: #33A1F2;
    --twitter-dark-hover: #011017;
    --twitter-light-hover: #2C8ED6;
  }
`;
