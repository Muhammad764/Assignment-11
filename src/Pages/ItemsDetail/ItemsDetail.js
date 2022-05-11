import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemsDetail = () => {
    const {itemId}= useParams()
    return (
        <div>
            <h1>Show ID :{itemId}</h1>
        </div>
    );
};

export default ItemsDetail;