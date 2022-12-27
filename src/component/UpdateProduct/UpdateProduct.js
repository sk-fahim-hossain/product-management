import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});


    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product])

    const handleUpdate = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const updatedProduct = { name, description, price }

        const url = `http://localhost:5000/product/${id}`

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedProduct),
        })
            .then(res => res.json())
            .then(data => console.log(data))

        event.target.reset()


        fetch(url)
            .then(res => res.json())
            .then(data =>

                setProduct(data)
            )

    }

    return (
        <div className="">
            <div className='d-flex p-4 m-4' style={{ border: "2px solid blue", borderRadius: "5px" }}>

                <Card className='' style={{ width: '30rem',boxShadow: '3px 3px 10px 3px #dddddd' }}>
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                        <Card.Text>
                            tk:{product.price}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <hr />
                
                <div className="mx-auto border p-5">

                    <form onSubmit={handleUpdate}>
                        <h4>New Information</h4>
                        <input type="text" name="name" id="" placeholder='Product name' /><br></br>
                        <textarea type="text" name="description" id="" placeholder='Product description' /><br></br>
                        <input type="text" name="price" id="" placeholder='Product Price' /><br></br>
                        <input type="submit" value="Update" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;