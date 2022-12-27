import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';

const SingleProduct = ({product}) => {
    const restricDescription = product.description.substring(0, 100)+"...";
    
    return (
        
            <Card className='m-1' style={{ width: '16rem',boxShadow: '3px 3px 10px 3px #dddddd' }}>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        {restricDescription}
                    </Card.Text>
                    <Card.Text>
                       tk: {product.price}
                    </Card.Text>
                    <Button variant="primary" as={Link} to={`/product/${product._id}`}>Show Details</Button>
                </Card.Body>
            </Card>
        
    );
};

export default SingleProduct;