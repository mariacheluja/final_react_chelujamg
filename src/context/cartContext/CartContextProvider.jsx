import { useState } from 'react';
import CartContext from './CartContext';
import PropTypes from 'prop-types'; // Importa PropTypes desde 'prop-types'


const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, q) => {
        const { id } = item;

        if (isInCart(id)) {
            const newCart = cart.map(el => {
                if (el.id === id) {
                    return {
                        ...el,
                        quantity: el.quantity + q
                    };
                }
                return el;
            });
            setCart(newCart);
        } else {
            setCart([
                ...cart,
                {
                    ...item, quantity: q
                }
            ]);
        }
    };

    const isInCart = (id) => {
        return cart.some(cartItem => cartItem.id === id);
    }

    const removeItem = (id, q) => {
        const newCart = cart.filter((el) => el.id !== id);
        setCart(newCart);
    };

    const clear = () => {
        setCart([]);
    }

    const values = {
        cart,
        addItem,
        removeItem,
        clear,
    }

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
}

CartContextProvider.propTypes = {
    children: PropTypes.node, // Valida children como cualquier nodo React
};

CartContextProvider.defaultProps = {
    children: null,
};

export default CartContextProvider;
