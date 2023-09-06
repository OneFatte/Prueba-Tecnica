import { useContext } from "react";
import { dataContext } from "../context/dataContext";
import React from 'react';
import './productos.css';

const Productos = () => {

    const { dataProductos, comprarProducto } = useContext(dataContext);

    return dataProductos.map((producto) => {
        return (
            <div className="card" key={producto.product_id}>
                <img src={producto.product_image} alt="imagen" />
                <div className="textCard">
                    <h3>{producto.product_name}</h3>
                    <h4>{producto.product_price}$</h4>
                </div>
                <button onClick={() => comprarProducto(producto)}>Agregar</button>

            </div>
        );
    });
};

export default Productos