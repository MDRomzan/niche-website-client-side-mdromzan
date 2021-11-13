import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const OrderReview = () => {
    const {user,token}=useAuth();
    const [orders,setOrdersConfirm]=useState([]);
  // console.log(order)
    useEffect(()=>{
        const url=`https://sheltered-mountain-47444.herokuapp.com/orders?email=${user.email}`
        fetch(url,{
          headers: {
            "authorization": `Bearer ${token}`
          }
        })
        .then(res =>res.json())
        .then(data=>setOrdersConfirm(data))
        
        
    },[]);
    return (
        <div>
            <h1>This  is Order Review:{orders.length}</h1>


        </div>
    );
};

export default OrderReview;