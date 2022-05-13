import React from 'react';
import useItems from '../../Hooks/UseItems';
import './ManageItem.css'

const ManageItem = () => {
    const [items, setItems] = useItems();
    const handelDelete = id => {
        const proceed = window.confirm('Are You Sure?')
        if(proceed){
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
            console.log(data)
            const remaining = items.filter(item => item._id !== id);
            setItems(remaining);
            })
        }
    }
    return (
        <div className='manage'>
            <h2 className='text-muted mb-4 mt-2'>Manage Your Item</h2>
            {
            items.map(item => <div key={item._id}>
            <h4>{item.name} <button onClick={()=>handelDelete(item._id)} className='btn btn-danger ms-3 fw-bold'>Delete</button></h4>
             </div>)
            }
        </div>
    );
};

export default ManageItem;