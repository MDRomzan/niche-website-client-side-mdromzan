import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import { clearTheCart, getStoredCart } from '../../../Uitilities/fakedb';
const OrderReview = () => {
    const {handleSubmit,register,reset,formState: { errors }}=useForm();
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


    const onSubmit=(data)=>{
        const savedCart=getStoredCart()
        data.order =savedCart;
    //   console.log(data)
        fetch('https://mysterious-cliffs-16987.herokuapp.com/orders', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res =>res.json())
        .then(result =>{
            // console.log(result);
            if(result.insertedId){
                alert("Booking Successfully Done")
                clearTheCart()
                reset()
            }
        })

    };
    
    return (
        <div>
            <h1>This  is Order Review:{orders.length}</h1>
             <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />
                

                
                <input type="number" {...register("price")} placeholder="Please Review" />

                <br />



                <input type="submit" />
            </form> 

        </div>
    );
};

export default OrderReview;