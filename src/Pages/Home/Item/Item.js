import React from 'react';
import {useNavigate } from 'react-router-dom';
import './Item.css'

const Item = ({ item }) => {
    const {id, name, img, description, price, quantity, supplier } = item
    const navigate = useNavigate();

    const navigateToItemDetail = id => {
        navigate(`/item/${id}`)
    } 
    return (
        <div className='item p-2 shadow'>
            <img className='img'  src={img} alt="" />
            <h3 className='pt-2'>{name}</h3>
            <p>Description: {description}</p>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <p>Supplier: {supplier}</p>
            <button onClick={() =>navigateToItemDetail(id)} className='btn btn-dark text-danger shadow mb-2'>Stock Update</button>

        </div>
    );
};

export default Item;