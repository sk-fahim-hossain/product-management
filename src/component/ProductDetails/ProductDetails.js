import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
           <Card  className="mx-auto my-3" style={{ width: '30rem',boxShadow: '3px 3px 10px 3px #dddddd' }}>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <Card.Text>
                        tk:{product.price}
                    </Card.Text>
                    {/* <Button variant="primary" as={Link} to={`/product/${product._id}`}>Show Details</Button> */}
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProductDetails;