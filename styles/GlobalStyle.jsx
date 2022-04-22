import { Global, css } from '@emotion/react';

function GlobalStyle() {
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Roboto', sans-serif;
        }

        h1,
        h2 {
          margin: 0;
          font-weight: 400;
        }

        button,
        a {
          color: inherit;
          text-decoration: none;
          cursor: pointer;
          font-size: initial;
          outline: 0;
          border-style: none;
          box-sizing: border-box;
          &:hover,
          &:focus-visible {
            box-shadow: 0 0 0 3px #38a5e1;
          }
        }

        a:active,
        button:active {
          background-color: #ccc;
        }

        * {
          box-sizing: border-box;
        }
      `}
    />
  );
}

export default GlobalStyle;
