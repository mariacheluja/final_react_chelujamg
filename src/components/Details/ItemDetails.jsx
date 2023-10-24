import  {useEffect} from 'react'
import Counter from '../Counter'
import PropTypes from 'prop-types'; // Importa PropTypes desde 'prop-types'
import styles from './style.module.css'


const ItemDetail = ({ item, onAdd}) => {

    return (
        <div>
            <h5>{item.title}</h5>
            <img src={item.imagen} alt={item.title} />

            <p>
                Descripción: {item.descripción}
            </p>
            <p>
                Precio: {item.precio}
            </p>
            <p>
                categoria:  {item.category}
            </p>
            <Counter onAdd={onAdd} />
        </div>

    );
};

ItemDetail.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string,
        imagen: PropTypes.string,
        descripción: PropTypes.string,
        precio: PropTypes.number,
        category: PropTypes.string,
    }),
    onAdd: PropTypes.func.isRequired,
};


export default ItemDetail