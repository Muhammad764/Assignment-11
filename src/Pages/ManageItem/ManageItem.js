import React from 'react';
import useItems from '../../Hooks/UseItems';

const ManageItem = () => {
    const [items] = useItems()
    
    const handelDeleted = id => {
        const proceed = window.confirm('Are You Sure?')
        if (proceed) {
            
        }
    }
    return (
        <div>
            <h2>Manage Your Item</h2>
            {
                items.map(item => <div key={item._id}>
                    <h5>{item.name} <button onClick={() =>handelDeleted(item._Id)} className='btn btn-danger fw-bold'>X</button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageItem;