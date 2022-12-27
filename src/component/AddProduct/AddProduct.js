import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import SearchBar from '../SearchBar/SearchBar';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        
       const url=`http://localhost:5000/product`
        
       fetch(url,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
       })
       .then(res => res.json())
       .then(data=>{
        alert("Your Product Posted Successfully")
        console.log(data)})    
    };



    return (
        <div className='p-5 m-3 mx-auto' style={{border:'2px solid blue', width:'400px',borderRadius:'10px',boxShadow: '3px 3px 10px 3px #dddddd'}}>

            <h1>Add product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} className="m-1" placeholder="Product name"/>
                <br />
                <textarea style={{width:'300px',height:'200px'}} {...register("description")} placeholder="Description" />
                <br />
                <input type="number" {...register("price")} placeholder="Price" />
                <br />
                <input type="submit" className='btn btn-success m-1' value="Create Product"/>
            </form>
        </div>
    );
};

export default AddProduct;