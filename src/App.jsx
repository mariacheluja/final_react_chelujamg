import React from 'react'
import NavBar from './components/NavBar/NavBar'
import CartContextProvider from './context/cartContext/CartContextProvider'
import UserContextProvider from './context/userContext/UserContextProvider'
import RoutesComponent from './routes/RoutesComponent'

const App = () => {
  return (
    <>
      <CartContextProvider>
        <UserContextProvider>
          <NavBar />
          <RoutesComponent />
        </UserContextProvider>
      </CartContextProvider>
    </>
  )
}

export default App