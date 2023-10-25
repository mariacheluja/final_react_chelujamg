import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';
// import { collection,getDocs, getFirestore} from "firebase/firestore"
import { getData, getDocuments } from '../../services/firebaseService';
// import { where } from 'firebase/firestore';
import { useState, useEffect } from 'react';


// const ItemListContainer = () => {
//     const [allItems] = useFetch("https://fakestoreapi.com/products");
//     // const [items, setItems] = useState([]);
//     const [items, setItems] = useState(allItems); // Estado para la lista actual de productos
//     const { categoriaId } = useParams(); // Obtener la categoría de los parámetros de la URL
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
//         if (allItems !== null) {
//             if (categoryId && categoryId !== 'all') {
//                 // Filtrar los productos por categoría si se proporciona una categoría válida
//                 const filteredItems = allItems.filter((item) => item.category === categoryId);
//                 setItems(filteredItems);
//             } else {
//                 // Si no hay categoría seleccionada, mostrar todos los productos
//                 setItems(allItems);
//             }
//         }
//     }, [categoryId, allItems]);

//     return (
//         <Container>
//             <div className="text-center">
//                 <Button variant="outline-primary" onClick={() => handleFilterClick('electronics')}>Electrónicos</Button>
//                 <Button variant="outline-primary" onClick={() => handleFilterClick('jewelery')}>Joyería</Button>
//                 <Button variant="outline-primary" onClick={() => handleFilterClick("women's clothing")}>Ropa</Button>
//                 <Button variant="outline-primary" onClick={() => handleFilterClick('all')}>Todos</Button>
//             </div>
//             <Row>
//                 {items !== null && <ItemList items={items} />}
//             </Row>
//         </Container>
//     );
// };


// const ItemListContainer = () => {
//     const [items, setItems] = useState([]);
//     const itemCollection = collection (db,"marcadores")
//     getDocs (itemCollection)
//         then.(snapshot =>{
//             <console.log (snapshot.docs)
//         })
//     useEffect( () => {
//         const itemCollection = getDocuments("items")
//         getData(itemCollection).then(data => setItems(data))

//     }, [])
//     return (
//         <Container>
//             <Row>
//                 {
//                     items.length > 0 &&
//                     <ItemList items={items} />
//                 }
//             </Row>
//         </Container>
//     )
// }

// export default ItemListContainer


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
 
    useEffect( () => {
        const itemCollection = getDocuments("items")
        getData(itemCollection).then(data => setItems(data))

    }, [])
    return (
        <Container>
            <Row>
                {
                    items.length > 0 &&
                    <ItemList items={items} />
                }
            </Row>
        </Container>
    )
}

export default ItemListContainer


