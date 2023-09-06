import { createContext, useEffect, useState } from "react";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
    const [dataProductos, setDataProductos] = useState([]);

    // 
    const [price, setprice] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            try {
                const responseproductos = await fetch("http://localhost:3004/products");
                console.log(responseproductos);
                const jsonDataProducts = await responseproductos.json();

                setDataProductos(jsonDataProducts);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);


    const comprarProducto = (producto) => {
        const productoRepetido = price.find((item) => item.id === producto.id);

        if (productoRepetido) {
            setprice(price.map((item) => (item.id === producto.id ? { ...producto, cant: productoRepetido.cant + 1 } : item)))
        } else {
            setprice([...price, producto])
        }
    }

    return (
        <dataContext.Provider value={{ dataProductos, price, setprice, comprarProducto }}>
            {children}
        </dataContext.Provider>
    );
};

export default DataProvider;