import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Orders.css'

const Order = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([]) 

    const handelDelete = id => {
        const proceed = window.confirm('Are You Sure?')
        if(proceed){
            const url = `https://mighty-reaches-68293.herokuapp.com/item/${id}`;
            fetch(url, {
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
            console.log(data)
            const remaining = orders.filter(order => order._id !== id);
            setOrders(remaining);
            })
        }
    }
    
    useEffect(() => {
        const getOrders = async () => {
            const email = user.email;
            const url = `https://mighty-reaches-68293.herokuapp.com/order?email=${email}`
            const { data } = await axios.get(url, {
                headers: {
                    authorization:`Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            setOrders(data)
        }
        getOrders()

    },[user])
    return (
        <div className='order'>
            <h2>Your Orders: {orders.length}</h2>
            {
                orders.map(order => <div key={order._id}>
                    <h5 className='mt-4'> {order.email} <span className='ms-4'>{order.item}</span> <button onClick={()=>handelDelete(order._id)} className='btn btn-danger ms-5 fw-bold'>Delete</button></h5> 
                    </div>)
            }
        </div>
    );
};

export default Order;