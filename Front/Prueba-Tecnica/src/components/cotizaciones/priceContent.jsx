import React from 'react';
import { useContext } from "react";
import { dataContext } from "../context/dataContext";

import NavBar from '../navBar/navbar';
import PriceElement from './priceElement';
import PriceTotal from './priceTotal';
import './price.css';


const PriceContent = () => {
    return (
        <>
            <div className='priceContainer'>
                <NavBar />
                <div className='cartContainer'>
                <h2>Carrito de Compras</h2>
                        <PriceElement />
                        <PriceTotal />
                </div>
            </div>

        </>
    )
}

export default PriceContent