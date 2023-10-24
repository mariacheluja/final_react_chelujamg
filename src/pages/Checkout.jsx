import { doc, getFirestore, updateDoc, writeBatch } from 'firebase/firestore'

import { useParams } from 'react-router-dom'
/*
    batch.commit(): La función commit se utiliza para ejecutar todas las operaciones de escritura en el batch en Firestore. 
    Esto garantiza que todas las operaciones se realicen de manera atómica, lo que significa que se ejecutan en su totalidad o 
    no se ejecutan en absoluto. Después de ejecutar el batch, 
    puedes usar el método .then() para manejar el éxito y el método .catch() para manejar cualquier error que pueda ocurrir durante el proceso 
    de escritura.
    En este caso, cuando batch.commit() se ejecuta con éxito, se mostrará el mensaje "Se ejecutó el batch de actualización".
    Si ocurre algún error durante la ejecución del batch, se mostrará el mensaje "Ocurrió un error al ejecutar el batch".
*/
const Checkout = () => {
    
    // Obtener el ID del pedido de los parámetros de la URL
    const { orderId } = useParams()

    // Función para actualizar un solo pedido
    const updateOrder = () => {
        // Obtener una instancia de Firestore
        const db = getFirestore()

        // Crear una referencia al documento del pedido
        const orderDoc = doc(db, "orders", orderId)

        // Actualizar el documento con una nueva propiedad llamada "otroTotal" con valor 2000
        updateDoc(orderDoc, { otroTotal: 2000 })
            .then(res => console.log("Orden actualizada"))
            .catch(err => console.log("Ocurrió un error al actualizar la orden"))
    }

    // Función para actualizar varios pedidos en un batch
    const updateOrders = () => {
        // Obtener una instancia de Firestore
        const db = getFirestore()

        // Crear un batch de escritura
        const batch = writeBatch(db)

        // Crear referencias a los documentos de los pedidos que se van a actualizar
        const doc1 = doc(db, "orders", "72NEYjnJTq9wN1bFOR6S")
        const doc2 = doc(db, "orders", "IaWn8Rfukjk8CJRc2Lql")
        const doc3 = doc(db, "orders", "RuzOR9hCPiehppOsuNCw")

        // Procesar el pago y actualizar los pedidos en el batch
        batch.update(doc1, { total: 1000 }); // Actualiza el primer pedido con un nuevo valor para "total"

        batch.set(doc2, { otraProp: "Otra PROP con SET II", total: 600 }, { merge: true });
        // Establece un nuevo valor para "otraProp" y "total" en el segundo pedido, fusionando con datos existentes

        batch.set(doc3, { unicaProp: "Doc nuevo" }, { merge: false });
        // Establece una nueva propiedad llamada "unicaProp" en el tercer pedido, sin fusionar datos existentes

        // Ejecutar el batch de escritura
        batch.commit()
            .then(() => console.log("Se ejecutó el batch de actualización"))
            .catch(err => console.log("Ocurrió un error al ejecutar el batch"))
    }

    return (
        <div>
            Gracias por su compra.
            {orderId}
            {/* <button onClick={updateOrder}>Actualizar orden</button> */}
            <button onClick={updateOrders}>Actualizar órdenes</button>
        </div>
    )
}

export default Checkout