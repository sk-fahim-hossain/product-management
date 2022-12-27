import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const Home = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div className='container'>
            <br />
            <h2>PRODUCTS QUANTITY : {products.length}</h2>

            <div className="row">
                {
                    products.map(product => <SingleProduct product={product} ></SingleProduct>)
                }
            </div>


        </div>
    );
};

export default Home;