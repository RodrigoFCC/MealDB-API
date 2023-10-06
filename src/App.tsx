import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import Home from './pages/Home'

import GlobalStyle from './styles'
import theme from './theme/defaultTheme'
import Ingredients from './pages/ByIngredients'
import ById from './pages/ById'
import MealIngredients from './pages/ByIngredients/MealByIngredients'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/ingredients',
    element: <Ingredients />
  },
  {
    path: '/recipe/:recipeId',
    element: <ById />
  },
  {
    path: '/ingredients/:recipeIngredient',
    element: <MealIngredients />
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
