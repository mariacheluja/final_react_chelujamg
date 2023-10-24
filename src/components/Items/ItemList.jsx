
import PropTypes from 'prop-types'; // Importa PropTypes
import { Col } from 'react-bootstrap';

import CartItem from './CardItem';
const ItemList = ({ items }) => {
    return (
        <>
            {
                items.map((item) => (
                    <Col md={4} lg={4} sm={12} key={item.id} >
                        <CartItem item={item} />
                    </Col>
                ))
            }
        </>
    )
}
// Define PropTypes para las propiedades esperadas
ItemList.propTypes = {
    items: PropTypes.array.isRequired, // Espera un array llamado "items" y lo marca como requerido
};
export default ItemList


