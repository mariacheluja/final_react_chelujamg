
// const firebaseConfig = {
//     apiKey: "AIzaSyD66zR0Kl2sfbqKjgYIs6FLkcd79_mBOlw",
//     authDomain: "react-comision-47195-chelujamg.firebaseapp.com",
//     projectId: "react-comision-47195-chelujamg",
//     storageBucket: "react-comision-47195-chelujamg.appspot.com",
//     messagingSenderId: "516957693975",
//     appId: "1:516957693975:web:6587627b1f8c6abef55452"
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);

// import React, { useEffect } from 'react'
// import Counter from '../Counter/Counter'
// import styles from './style.css'

// const ItemDetail = ({ item, onAdd}) => {

//     return (
//         <div className={styles.contianer}>
//             <h5 className={styles.title} >{item.name}</h5>
//             <img src={item.image} className={styles.image}/>
//             <p>
//                 stock: {item.stock}
//             </p>
//             <p>
//                 Price: {item.price}
//             </p>
//             <p>
//                 category:  {item.category}
//             </p>
//             <Counter onAdd={onAdd} />
//         </div>
//     )
// }

// export default ItemDetail

// import React from 'react';
// import PropTypes from 'prop-types';
// import Counter from '../Counter';

// const ItemDetail = ({ item, onAdd }) => {
//     return (
//         <div>
//             <h5>{item.title}</h5>
//             <img src={item.imagen} alt={item.title} />
//             <p>Descripción: {item.descripción}</p>
//             <p>Precio: {item.precio}</p>
//             <p>Categoría: {item.category}</p>
//             <Counter onAdd={onAdd} />
//         </div>
//     );
// };

// ItemDetail.propTypes = {
//     item: PropTypes.shape({
//         title: PropTypes.string,
//         imagen: PropTypes.string,
//         descripción: PropTypes.string,
//         precio: PropTypes.number,
//         category: PropTypes.string,
//     }),
//     onAdd: PropTypes.func.isRequired,
// };

// export default ItemDetail;



// import React, { useState, useEffect, useContext } from 'react'
// import ItemDetail from './ItemDetail'
// import CartContext from '../../context/cartContext/CartContext';
// import { getOneDocument } from '../../services/firebaseService';

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

// import React from 'react'

// const FormComponent = ({ formData, inputChange, onSumbit }) => {
//   return (
//     <form onSubmit={onSumbit}>

//       {
//         Object.keys(formData)
//           .map((key, i) => (
//             <>
//               <label htmlFor="name" key={i}>Ingrese {key}</label>
//               <input
//               required
//                 type="text"
//                 id={key}
//                 name={key}
//                 value={formData[key]}
//                 onChange={inputChange}
//               />
//             </>
//           ))
//       }
//       <button className='btn btn-primary'>Create order</button>
//     </form>
//   )
// }

// export default FormComponent


// import React from 'react'
// import { Col } from 'react-bootstrap';

// import CardItem from './CardItem';
// const ItemList = ({ items }) => {
//     return (
//         <>
//             {
//                 items.map((item) => (
//                     <Col md={4} lg={4} sm={12} key={item.id} >
//                         <CardItem item={item} />
//                     </Col>
//                 ))
//             }
//         </>
//     )
// }

// export default ItemList


// import React, { useState, useEffect, Children } from 'react'
// import { Row } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import ItemList from './ItemList';
// import { getData, getDocuments } from '../../services/firebaseService';
// import { where } from 'firebase/firestore';

// const ItemListContainer = () => {
//     const [items, setItems] = useState([]);
 
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



// import React from 'react'
// import UserContext from '../../context/userContext/UserContext'

// const CartWidget = () => {

//     const style = {
//         color: "white",
//         marginRight: "10px"
//     }
//     return (
//         <div style={style}>
//             <UserContext.Consumer>
//                 {
//                     ({user}) => <p>Welcome,{ user.name}</p>
//                 }
//             </UserContext.Consumer>
//         </div>
//     )
// }

// export default CartWidget





// import Navbar from 'react-bootstrap/Navbar';
// import { Link, NavLink } from 'react-router-dom';
// import CartWidget from './CartWidget';

// const NavBar = ( ) => {
//   return (
//     <Navbar bg="dark" data-bs-theme="dark">
//     <Container>
//       <Navbar.Brand >E-commerce</Navbar.Brand>
//       <Nav className="me-auto">
//         <NavLink className={( { isActive} ) => isActive ? "link-active navlink" : "navlink"} to="/">Home</NavLink>
//         <NavLink className={( { isActive} ) => isActive ? "link-active navlink" : "navlink"} to="/category/tablet">Tablets</NavLink>
//         <NavLink  className={( { isActive} ) => isActive ? "link-active navlink" : "navlink"} to="/category/smartphones">Smartphones</NavLink>
//         <NavLink  className={( { isActive} ) => isActive ? "link-active navlink" : "navlink"} to="/category/pc">Pc</NavLink>
//         <NavLink  className={( { isActive} ) => isActive ? "link-active navlink" : "navlink"} to="/cart">Cart</NavLink>
//       </Nav>
//     </Container>
//     <CartWidget />
//   </Navbar>
//   );
// }

// export default NavBar;



// CartContextProvider.propTypes = {
//     children: PropTypes.node, // Valida children como cualquier nodo React
// };

// CartContextProvider.defaultProps = {
//     children: null,
// };
// import { collection, doc, getDoc, getDocs, getFirestore, query } from "firebase/firestore";

// export const getDocuments = (colName) => {
//     const db = getFirestore();
//     const colRef = collection(db, colName);
//     return colRef;
// };

// export const getOneDocument = (colName, id) => {
//     const db = getFirestore();
//     const itemRef = doc(db, colName, id);
//     let data = null;
//     return getDoc(itemRef)
//         .then((snapshot) => {
//             if (snapshot.exists()) {
//                 data = {
//                     id: snapshot.id,
//                     ...snapshot.data()
//                 };
//             }
//             return data;
//         })
//         .catch((err) => console.log(err));
// };

// export const getData = (q) => {
//     return getDocs(q).then(snapshot => {
//         const allData = snapshot.docs.map(document => ({ id: document.id, ...document.data() }));
//         return allData;
//     });
// };


// import React from 'react'
// import NavBar from './components/NavBar/NavBar'
// import CartContextProvider from './context/cartContext/CartContextProvider'
// import UserContextProvider from './context/userContext/UserContextProvider'
// import RoutesComponent from './routes/RoutesComponent'

// const App = () => {
//   return (
//     <>
//       <CartContextProvider>
//         <UserContextProvider>
//           <NavBar />
//           <RoutesComponent />
//         </UserContextProvider>
//       </CartContextProvider>
//     </>
//   )
// }

// export default App




// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter } from 'react-router-dom';

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBJZgqhqbcPYPsOb8Xg31_0AMNPTJkxptA",
//   authDomain: "react-comision-47195.firebaseapp.com",
//   projectId: "react-comision-47195",
//   storageBucket: "react-comision-47195.appspot.com",
//   messagingSenderId: "531070126199",
//   appId: "1:531070126199:web:350a158bcb34429c92de72"
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
// )