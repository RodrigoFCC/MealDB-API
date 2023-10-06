import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Lato, sans-serif;
  list-style: none;
}

body {
  padding-bottom: 120px;
}

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}

.indexContainer {
  display: flex;
  margin: 2.5rem 0;
}

@media (max-width: 1024px) {
  .container {
    max-width: 80%;
  }
}


.cardContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 8px;
  row-gap: 8px;
  margin-top: 16px;

  @media (max-width: 768px) {
    display: block;
    margin-top: 8px;
  }
}

`
export default GlobalStyle
