import  { useState } from 'react'
import PropTypes from 'prop-types';

const Counter = ({ onAdd, text = "Agregar al carrito", q = 1 }) => {
    const [count, setCount] = useState(q)

    const increment = () => {

        setCount(count + 1)
    }
    const decrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    return (
        <div>
            <button onClick={increment}>Agregar</button>
            <span>{count}</span>
            <button onClick={decrement}>Restar</button>
            <button onClick={() => onAdd(count)}>{text}</button>
        </div>
    )
}

Counter.propTypes = {
    onAdd: PropTypes.func.isRequired, // onAdd debe ser una función (requerida)
    text: PropTypes.string, // text es una cadena (opcional)
    q: PropTypes.number // q es un número (opcional)
};

export default Counter