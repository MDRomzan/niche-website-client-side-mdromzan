import { Alert,Box, Button, Container, Grid, Paper, Typography } from '@mui/material';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderModal from '../OrderModal/OrderModal';
import Foother from '../Shared/Foother/Foother';
import Navigation from '../Shared/Navigation/Navigation';
import "./Detailes.css";

const Detailes = () => {
    const [openOrder, setOrderOpen] = React.useState(false);
    const handleOrderOpen = () => setOrderOpen(true);
    const handleOrderClose = () => setOrderOpen(false);
    const [orderSuccess,setOrderSuccess]=useState(false)

    const {id}=useParams();
    

//     // console.log(id);
    const [explore,setExplore]=useState({});
    useEffect(()=>{
        fetch(`https://sheltered-mountain-47444.herokuapp.com/explores/${id}`)
        .then(res =>res.json())
        .then(data =>setExplore(data));
    },[id]);
    

      
    

    //  console.log(explore);
    const verticalCenter = {
        display: "flex",
        alignItems: "center",
        height: 400
    }
    return (
        <>
        <Navigation></Navigation>
        <Container sx={{ flexGrow: 1,mt:5 }}>
      <Grid sx={{justifyContent:"center"}} container spacing={2}>
         
        <Grid item   sx={{...verticalCenter, }}  sx={{textAlign:"left",mt:5 }} xs={12} md={12}>
            <Paper elevation={3}>
                <Box sx={{display:  'flex' ,textAlign: 'center',
                justifyContent: 'center'}}>
                    {orderSuccess && <Alert severity="success"> Order successfully !</Alert> }
                    <Box sx={{boxShadow: 3,my:2,p:2 }}>
            
                <Typography variant="h3">

                    {explore?.name}
                </Typography>
                <img className="cut-size" src={explore?.img} alt="" />
                <Typography variant="h4">
                    price:
                    {explore?.price}
                </Typography>
                <Button sx={{my:3}} onClick={handleOrderOpen} variant="contained">Order Now</Button>
                
            </Box>
            </Box>
           </Paper>
        </Grid>
      </Grid>
    </Container>
    <OrderModal
    setOrderSuccess={setOrderSuccess}
    explore={explore}
    openOrder={openOrder}
    handleOrderClose={handleOrderClose}
    ></OrderModal>
    <Foother></Foother>
    </>
    
    );
};

export default Detailes;