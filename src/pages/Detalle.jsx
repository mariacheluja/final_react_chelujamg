//import React from 'react'
import { useParams } from 'react-router'
import ItemDetailConteiner from '../components/Details/ItemDetailConteiner'

const Detalle = () => {
    const { id } = useParams()

    return (
        <div>
            <ItemDetailConteiner id={id} />
        </div>
    )
}

export default Detalle