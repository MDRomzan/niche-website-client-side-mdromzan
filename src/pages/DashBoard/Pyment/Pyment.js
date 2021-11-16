import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51JvntCDJwE53buNKqcPH8g1DVBElbjbsUFCdDXw9e77uOGDoF749JAgn7M1uDoAEIkOsejtFNXP6TutuPMwDkMWV003GYaCfu7')



const Pyment = () => {
    const {orderId}=useParams();
    const [order,setOrder]=useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/allOrders/${orderId}`)
        .then(res=>res.json())
        .then(data=>setOrder(data));

    },[])
    return (
        <div>
            <h3>Please Payment for:Name:{order.clientName} For ProductName:{order.productName} </h3>
            <h1> Order Price:${order.price}</h1>
            {order?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                order={order}
                />
            </Elements>}
        </div>
    );
};

export default Pyment;