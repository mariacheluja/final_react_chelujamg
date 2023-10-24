import { useState, useEffect } from 'react';
import ItemListContainer from "../components/Items/ItemListContainer";
import { useParams } from 'react-router';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyD66zR0Kl2sfbqKjgYIs6FLkcd79_mBOlw",
    authDomain: "react-comision-47195-chelujamg.firebaseapp.com",
    projectId: "react-comision-47195-chelujamg",
    storageBucket: "react-comision-47195-chelujamg.appspot.com",
    messagingSenderId: "516957693975",
    appId: "1:516957693975:web:6587627b1f8c6abef55452"
};
const app = initializeApp(firebaseConfig); // Inicializa la aplicación Firebase

const Home = () => {
    const { id } = useParams(); // Obtener el id de los parámetros de la URL

    // Estado para almacenar la lista de productos
    const [products, setProducts] = useState([]);
    //const defaultCategory = 'all'; // Categoría predeterminada si no se especifica ninguna en la URL

    useEffect(() => {
        const db = getFirestore(app); // Inicializa Firestore con la configuración de Firebase

        // Accede al documento en Firestore
        const itemRef = doc(db, 'marcadores', 'LDGzFQ62Bqr4w0KScI5p');

        const fetchData = async () => {
            try {
                const snapshot = await getDoc(itemRef);
                if (snapshot.exists()) {
                    // Los datos se encuentran en snapshot.data()
                    setProducts([snapshot.data()]);
                }
            } catch (error) {
                console.error('Error al obtener los datos de Firestore:', error);
            }
        };

        fetchData();
    }, [id]);


    return (
        <div>
            <h1>Productos de Compras</h1>
            <ItemListContainer items={products} />
        </div>
    );
};

export default Home;



