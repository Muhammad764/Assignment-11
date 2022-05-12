import React from 'react';
import {useNavigate } from 'react-router-dom';
import './Item.css'

const Item = ({ item }) => {
    const {_id, name, img, description, price, quantity, supplier } = item
    const navigate = useNavigate();

    const navigateToItemDetail = id => {
        navigate(`/item/${id}`)
    } 
    return (
        <div className='item p-2 mt-4 shadow'>
            <img className='img'  src={img} alt="" />
            <h3 className='pt-2'>{name}</h3>
            <p>Description: {description}</p>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <p>Supplier: {supplier}</p>
            <button onClick={() =>navigateToItemDetail(_id)} className='baton border-0 fw-bold shadow-lg rounded mb-2 py-2 px-3'>Stock Update</button>

        </div>
    );
};

export default Item;