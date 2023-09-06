import { useContext } from "react";
import { dataContext } from "../context/dataContext";

import React from 'react'

const PriceTotal = () => {
    const { price } = useContext(dataContext);

    const total = price.reduce((acumulador, elemento) => acumulador + (elemento.price), 0);
    return (
        <div className="cartTotal">
            <h3>Total a pagar: {total} $</h3>

        </div>
    )
}

export default PriceTotal