import React, { useEffect, useRef, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SingleProduct from '../SingleProduct/SingleProduct';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState("");

    // load all products
    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    //update button click
    const handleDelete = (pd) => {
        // const proceed = window.confirm('Are you sure you want to delete this product?')
        const id = pd._id;
        const url = `http://localhost:5000/product/${id}`
            fetch(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data =>{
                const remaining = products.filter(pd => pd._id !== id);
                setProducts(remaining)
            })

    }



    return (
        <div className='container '>
            <div>
                <br />
                <div>
                    <input
                        type="text"
                        id="myInput"
                        onChange={e => setFilter(e.target.value)}
                        placeholder="Search for products.."
                    />

                    <div>
                        {filter.length > 0 ? products.filter(emoji => emoji.name.toLowerCase().includes(filter.toLowerCase())).map(m => <h2>{m.name}</h2>) : <p></p>}
                    </div>
                </div>

            </div>



            <h2 className='m-3'>Manage Your Products</h2>

            <div className="row mx-auto">
                {
                    products.map(product =>
                        <Card className='m-1' style={{ width: '32rem',boxShadow: '3px 3px 10px 3px #dddddd' }}>
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>
                                    {product.description}
                                </Card.Text>
                                <Card.Text>
                                    {product.price}
                                </Card.Text>
                               <Button variant="primary" as={Link} to={`/product/${product._id}`}>Show Details</Button>
                                <Button className='m-1' variant="success" as={Link} to={`/product/manage/${product._id}`}>Update Product</Button>
                                <Button className='m-1' onClick={() =>handleDelete(product)} variant="danger">delete</Button>
                            </Card.Body>
                        </Card>

                    )
                }
            </div>


        </div>
    );
};

export default ManageProduct;
