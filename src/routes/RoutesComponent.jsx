import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import UserProfile from '../pages/UserProfile'
import Detalle from '../pages/Detalle'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/user' element={<UserProfile />} />
            <Route path='/category/:categoryId' element={<Home />} />
            <Route path='/detalle/:id' element={<Detalle />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout/:orderId' element={<Checkout />} />
        </Routes>
    )
}

export default RoutesComponent