import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle `
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root{
  --background: #F8F7FC;
  --brandcolor-primary-default: #4F46BB;
  --brandcolor-primary-light: #8E85ff;
  --textcolor-primary: #302E45;
  --textcolor-secondary: #6d6c7b;
  --bg-white:#FFFFFF;

  font-size: 62.5%; 
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    height: 100%;
}

body {
  background: var(--background);
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`