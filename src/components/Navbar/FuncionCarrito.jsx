//crear funcion para sumar y restar

//import React from 'react' // el profe lo puso pero me tira error.

import  { useState } from 'react';

//armo funconamiento del carrito, primero armo sumar y restar y despues las relaciono con el boton

const FuncionCarrito = () => {
    const [count, setCount] = useState(0);

    const suma = () => {
        setCount((prevState) => prevState + 1);
    };

    const restar = () => {
        if (count > 0) {
            setCount((prevState) => prevState - 1);
        }
    };

    return (
        <div>
            
            
            <p>Cantidad = {count}</p>
            <button onClick={suma}>Sumar</button>
            <button onClick={restar}>Restar</button>
        </div>
    );
};

export default FuncionCarrito;
