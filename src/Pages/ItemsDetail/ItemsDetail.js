import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ItemsDetail.css'

const ItemsDetail = () => {
    const {itemId}= useParams()
    const [item, setItem] = useState({})
    
    useEffect(() => {
       const url = `http://localhost:5000/item/${itemId}`  
        
        fetch(url)
        .then(res => res.json())
        .then(data => setItem(data))
    },[])
    
    return (
        <div className='detail'>
            <div>
                <img className='w-50' src={item.img} alt="" />
            </div>
            <h1>Items Name: {item.name}</h1>
            <p>description: {item.description}</p>
            <p>price:{item.price}</p>
            <p>quantity:{item.quantity}</p>
            <p>supplier:{item.supplier}</p>
            <p>sold:{item.sold}</p>
            <Link to="/checkout">
                <button className='btn btn-danger'>Delivery</button>
            </Link>
        </div>
    );
};

export default ItemsDetail;