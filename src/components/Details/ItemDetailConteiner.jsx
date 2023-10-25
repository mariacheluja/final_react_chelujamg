// import { useState, useEffect, useContext } from 'react';
// import { Row, Button } from 'react-bootstrap';
// import ItemDetail from './ItemDetails'
// import CartContext from '../../context/cartContext/CartContext';
// import { getOneDocument } from '../../services/firebaseService';



// import Container from 'react-bootstrap/Container';
// import ItemList from '../Items/ItemList';
// import { useParams, useNavigate } from 'react-router-dom';
// import { collection, getDocs, getFirestore, where, query } from 'firebase/firestore';

// const ItemListContainer = () => {
//     const [items, setItems] = useState([]); // Estado para la lista actual de productos
//     const { categoryId } = useParams(); // Obtener la categoría de los parámetros de la URL
//     const navigate = useNavigate();

//     // Función para manejar el clic en el botón de filtrar
//     const handleFilterClick = (category) => {
//         if (category === categoryId) {
//             // Si se hace clic en la categoría actual, navegar a la página principal
//             navigate('/');
//         } else {
//             // Si se hace clic en otra categoría, navegar a esa categoría
//             navigate(`/category/${category}`);
//         }
//     };

//     useEffect(() => {
//         // Inicializar Firestore
//         const db = getFirestore();
//         const itemsCollection = collection(db, 'productos'); // Reemplaza 'productos' con el nombre de tu colección

//         const fetchData = async () => {
//             try {
//                 if (categoryId && categoryId !== 'all') {
//                     // Filtrar los productos por categoría si se proporciona una categoría válida
//                     const q = query(itemsCollection, where('category', '==', categoryId)); // Reemplaza 'category' con el nombre de tu campo de categoría
//                     const querySnapshot = await getDocs(q);
//                     const filteredItems = querySnapshot.docs.map((doc) => doc.data());
//                     setItems(filteredItems);
//                 } else {
//                     // Si no hay categoría seleccionada, mostrar todos los productos
//                     const querySnapshot = await getDocs(itemsCollection);
//                     const allItems = querySnapshot.docs.map((doc) => doc.data());
//                     setItems(allItems);
//                 }
//             } catch (error) {
//                 console.error('Error al recuperar datos de Firestore:', error);
//             }
//         };

//         fetchData();
//     }, [categoryId]);

//     return (
//         <Container>
//             <div className="text-center">
//                 <Button variant="outline-primary" onClick={() => handleFilterClick('electronics')}>Electrónicos</Button>
//                 <Button variant="outline-primary" onClick={() => handleFilterClick('jewelry')}>Joyería</Button>
//                 {/* Agrega más botones para otras categorías */}
//                 <Button variant="outline-primary" onClick={() => handleFilterClick('all')}>Todos</Button>
//             </div>
//             <Row>
//                 {items !== null && <ItemList items={items} />}
//             </Row>
//         </Container>
//     );
// };




// const ItemDetailContainer = ({ id }) => {
//     const [item, setitem] = useState(null);
//     const onAdd = (q) => {
//         addItem(item, q)
//     };
    
//     const { addItem } = useContext(CartContext);
   
//     useEffect( () => {
//         getOneDocument("items",id)
//         .then(res => setitem(res))
//     }, [])
//     return (
//         <>
//             {
//                 item !== null &&
//                 <ItemDetail item={item} onAdd={onAdd} />

//             }
//         </>
//     )
// }

// export default ItemDetailContainer


import { useState, useEffect, useContext } from 'react';
import { Row, Button } from 'react-bootstrap';
import ItemDetail from './ItemDetails';
import CartContext from '../../context/cartContext/CartContext';
import { getOneDocument } from '../../services/firebaseService';

import Container from 'react-bootstrap/Container';
import ItemList from '../Items/ItemList';
import { useParams, useNavigate } from 'react-router-dom';
import { collection, getDocs, getFirestore, where, query } from 'firebase/firestore';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();
    const navigate = useNavigate();

    const handleFilterClick = (category) => {
        if (category === categoryId) {
            navigate('/');
        } else {
            navigate(`/category/${category}`);
        }
    };

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, 'tu_coleccion'); // Reemplaza 'tu_coleccion' con el nombre de tu colección
        const fetchData = async () => {
            try {
                if (categoryId && categoryId !== 'all') {
                    const q = query(itemsCollection, where('category', '==', categoryId)); // Reemplaza 'category' con el nombre de tu campo de categoría
                    const querySnapshot = await getDocs(q);
                    const filteredItems = querySnapshot.docs.map((doc) => doc.data());
                    setItems(filteredItems);
                } else {
                    const querySnapshot = await getDocs(itemsCollection);
                    const allItems = querySnapshot.docs.map((doc) => doc.data());
                    setItems(allItems);
                }
            } catch (error) {
                console.error('Error al recuperar datos de Firestore:', error);
            }
        };
        fetchData();
    }, [categoryId]);

    return (
        <Container>
            <div className="text-center">
                <Button variant="outline-primary" onClick={() => handleFilterClick('electronics')}>Electrónicos</Button>
                <Button variant="outline-primary" onClick={() => handleFilterClick('jewelry')}>Joyería</Button>
                <Button variant="outline-primary" onClick={() => handleFilterClick('all')}>Todos</Button>
            </div>
            <Row>
                {items !== null && <ItemList items={items} />}
            </Row>
        </Container>
    );
};

const ItemDetailContainer = ({ id }) => {
    const [item, setItem] = useState(null);
    const { addItem } = useContext(CartContext);
    
    const onAdd = (q) => {
        addItem(item, q);
    };
   
    useEffect(() => {
        getOneDocument("items", id)
        .then(res => setItem(res))
    }, [id]);

    return (
        <>
            {item !== null && <ItemDetail item={item} onAdd={onAdd} />}
        </>
    );
}

export default ItemDetailContainer;
