import React from 'react';
import './Item.css'

const Item = ({ item }) => {
    const {name,img,description,price,quantity,supplier}= item
    return (
        <div className='item'>
            <img className='img'  src={img} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{price}</p>
            <p>{quantity}</p>
            <p>{supplier}</p>
            <button>Update</button>

        </div>
    );
};

export default Item;