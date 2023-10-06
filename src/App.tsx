import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import Header from './components/Header'

import Home from './pages/Home'
import ByName from './pages/ByName'

import GlobalStyle from './styles'
import theme from './theme/defaultTheme'
import Ingredients from './pages/ByIngredients'
import ById from './pages/ById'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/by-name',
    element: <ByName />
  },
  {
    path: '/ingredients',
    element: <Ingredients />
  },
  {
    path: '/recipe/:recipeId',
    element: <ById />
  }
])

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={rotas} />
    </ThemeProvider>
  )
}

export default App
