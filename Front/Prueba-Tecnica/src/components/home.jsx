import React from 'react';

import Productos from './productos/productos';
import Banner from './banner/banner';
import NavBar from './navBar/navbar';
import './home.css';

const Home = () => {
    return (
        <>
            <div className='homeContainer'>
                <NavBar/>
                <div className='homeContainer2'>
                    <Banner/>
                    <div className='productCard'>
                        <h2 id='productos'>Productos</h2>
                        <div className='productContainer'>
                            <Productos />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;