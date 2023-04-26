import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  text-transform: none;
}

a, a:active, a:visited, a:focus {
    text-decoration: none;
    color:black;
}

`
