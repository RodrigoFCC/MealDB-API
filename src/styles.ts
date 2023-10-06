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

`
export default GlobalStyle