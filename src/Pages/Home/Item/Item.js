import React from 'react';
import './Item.css'

const Item = ({ item }) => {
    const {name,img,description,price,quantity,supplier}= item
    return (
        <div className='item p-2 shadow'>
            <img className='img'  src={img} alt="" />
            <h3 className='pt-2'>{name}</h3>
            <p>Description: {description}</p>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <p>Supplier: {supplier}</p>
            <button className='btn btn-dark text-danger shadow mb-2'>Stock Update</button>

        </div>
    );
};

export default Item;