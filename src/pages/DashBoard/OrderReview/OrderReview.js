import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import { clearTheCart, getStoredCart } from '../../../Uitilities/fakedb';
import { Container, Grid } from '@mui/material';
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
       console.log(data)
        fetch('http://localhost:5000/review', {
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
                alert("Review Successfully Done")
                // clearTheCart()
                reset()
            }
        })

    };
    
    return (
        <div>
            <Container>
                <Grid>
                    <h1>This  is Order Review:{orders.length}</h1>
                    <Grid item sx={{display:"flex",justifyContent: 'center',alignItems:"center" }} >
            
             <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />
                
               <input defaultValue="2" type="number"  placeholder="Please Review" {...register("review", { min:1, max:5 })} />
        
                <br />
                <input type="submit" />
            </form> 
            </Grid>
            </Grid>
        </Container>
        </div>
    );
};

export default OrderReview;