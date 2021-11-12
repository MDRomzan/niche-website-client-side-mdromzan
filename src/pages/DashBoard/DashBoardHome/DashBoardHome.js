
import React from 'react';
import { Grid } from '@mui/material';
import MyOrders from '../MyOrders/MyOrders';

const DashBoardHome = () => {
    return (
 <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>

                    My All Orders  
                    <MyOrders></MyOrders>                  

                </Grid> 
    </Grid> 
    );
};

export default DashBoardHome;