import  { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('La solicitud no fue exitosa');
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error(error);
            }
        };

        getData(); // Llama a la función de obtención de datos cuando el componente se monta
    }, [url]);

    return [data];
};

export default useFetch;
