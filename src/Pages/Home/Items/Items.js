import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
    const [items, setItems] = useState([])
    
    useEffect(() => {
        fetch('https://mighty-reaches-68293.herokuapp.com/item') 
            .then(res => res.json())
            .then(data => setItems(data))
    },[])
    return (
        <div>
            <h1 className='mt-2'>Our Items</h1>
            <div className='items-container mt-4 mb-5'>
                
                 {
                items.map(item => <Item
                 key={item._id}
                 item={item}
                >

                </Item>)
            }
           </div>
        </div>
    );
};

export default Items;