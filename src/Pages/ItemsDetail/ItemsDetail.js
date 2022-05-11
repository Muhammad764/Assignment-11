import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ItemsDetail.css'

const ItemsDetail = () => {
    const {itemId}= useParams()
    return (
        <div className='detail'>
            <h1>Show ID :{itemId}</h1>
            <Link to="/checkout">
                <button className='btn btn-danger'>Delivery</button>
            </Link>
        </div>
    );
};

export default ItemsDetail;