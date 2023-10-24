import { useState, useEffect } from 'react';

const useFetch = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const url = "https://fakestoreapi.com/products"; // URL directamente aquí

        const getData = () => {
            fetch(url)
                .then(response => response.json())
                .then(data => setData(data))
                .catch(error => console.log(error))
        }

        getData();
    }, []); // No es necesario pasar 'url' como dependencia aquí

    return [data];
}

export default useFetch;

