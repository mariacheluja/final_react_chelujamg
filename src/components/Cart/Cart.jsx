//import React from 'react';

import Cart from 'react-bootstrap/Cart';


function Cart() {
    return (
        <Cart style={{ width: '18rem' }}>
            <Cart.Body>
                <Cart.Title>Hematología</Cart.Title>
                <Cart.Subtitle className="mb-2 text-muted">Cart Lisante</Cart.Subtitle>
                <Cart.Text>
                    Reactivo para realizar Hemogramas
                    Equipo DXH800.<br/>
                    Sector Hematología
                </Cart.Text>
                <Cart.Link href="#">Agregar</Cart.Link>
                <Cart.Link href="#">Eliminar</Cart.Link>
            </Cart.Body>
        </Cart>
    );
}

export default Cart;   
