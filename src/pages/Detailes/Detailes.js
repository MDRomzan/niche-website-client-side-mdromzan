import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { clearTheCart, getStoredCart}from "../../Uitilities/fakedb"
import "./Detailes.css";

const Detailes = () => {
    const {id}=useParams();
    const {user}=useAuth();
    const {handleSubmit,register,reset,formState: { errors }}=useForm();

    // console.log(id);
    const [explore,setExplore]=useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/explores/${id}`)
        .then(res =>res.json())
        .then(data =>setExplore(data));
    },[]);
 
    // Order collection
const onSubmit=(data)=>{
    
        const savedCart=getStoredCart()
        data.order =savedCart;
    //   console.log(data)
        fetch('http://localhost:5000/orders',{
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
                alert("Buy now Successfully Done")
                clearTheCart()
                reset()
            }
        })

    };
    

    //  console.log(explore);
    const verticalCenter = {
        display: "flex",
        alignItems: "center",
        height: 400
    }
    return (
        <Container sx={{ flexGrow: 1,mt:5 }}>
      <Grid container spacing={2}>
         
        <Grid item sx={{...verticalCenter, }}  sx={{textAlign:"left",mt:5 }} xs={12} md={6}>
            <Box>
                <Typography variant="h3">

                    {explore?.name}
                </Typography>
                <img className="cut-size" src={explore?.img} alt="" />
                <Typography variant="h3">
                    price:
                    {explore?.price}
                </Typography>
            </Box>
        </Grid>
      
        <Grid item xs={12} sx={{mt:10}}  style={verticalCenter} md={6}>
          <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} placeholder="Your Name" {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })}placeholder="Enter your E-mail" />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input type="Date" {...register("price")} placeholder="Price" />
                <input placeholder="phone number" defaultValue="" {...register("phone")} />
                <br />
            <select {...register("gender")}>
                    Gender
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>


                <input type="submit" />
            </form> 
        </Grid>
        
        
      </Grid>
    </Container>
    );
};

export default Detailes;