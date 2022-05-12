import React from 'react';
import { useParams } from 'react-router-dom';
import useItemDetail from '../../Hooks/useItemDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Checkout.css'
import auth from '../../firebase.init';
import axios from 'axios';
import { toast, ToastContainer} from 'react-toastify';

const Checkout = () => {
    const {itemId} = useParams();
    const [item] = useItemDetail(itemId)
    const [user] = useAuthState(auth)
    if (user) {
        console.log(user)
    }
    
    const handelPlaceOrder = event => {
        event.preventDefault()
        const order = {
            email: user.email,
            item: item.name,
            itemId: itemId,
            address: event.target.address.value,
            phone:event.target.phone.value
        }

        axios.post('http://localhost:5000/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your Order is Booked!')
                    event.target.reset()
                }
        })
    }
    return (
        <div className='details'>
            <h2 className='mb-4 text-muted'>Order Items: {item.name}</h2>
            <form onSubmit={handelPlaceOrder}>
                <input className='mb-2 w-50' type="text" value={user?.displayName} name='name' placeholder='Name' required readOnly disabled/><br />
                <input className='mb-2 w-50' type="email" value={user.email} name='email' placeholder='Email' required readOnly disabled/><br />
                <input className='mb-2 w-50' type="text" value={item.name} name='item' placeholder='Item' required readOnly/><br />
                <input className='mb-2 w-50' type="text" name='address' placeholder='Address' required /><br />
                <input className='mb-2 w-50' type="text" name='phone' placeholder='Phone' required /><br />
                <input className='btn btn-danger w-50' type="submit" value="Place Order" />
             
            </form>
            <ToastContainer/>
        </div>
    );
};

export default Checkout;