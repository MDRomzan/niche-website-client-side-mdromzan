import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

import React from 'react';
import { useHistory } from 'react-router';

const Explore = ({explore}) => {
    const {_id,name,Description,price,img}=explore;
    const history=useHistory()
    const handleDetaile=(_id)=>{
         const uri=`/detaile/${_id}`
        history.push(uri);   
    }

    return (
        <Grid item xs={12} sm={4} md={4}>
                <Card sx={{border:0,boxShadow:3,textAlign:"center" , minWidth: 275 }}>
                    
                    <CardMedia
                        component="img"
                        style={{width:"300" ,height:"200",margin:"0 auto"}}
                        image={img}
                        alt="green iguana"
                    />

                <CardContent>
                
                    
                    <Typography  variant="h5" component="div">
                        {name}
                        
                    </Typography>
                    <Typography  variant="h5" component="div">
                        price:
                       {price}
                        
                    </Typography>
                    <Typography  sx={{ mb: 1.5 }} color="text.secondary">
                     {Description}
                    </Typography>
                </CardContent>
                <Button onClick={()=>handleDetaile(_id)} sx={{my:5}} variant="contained">Buy Now</Button>
                </Card>

            </Grid>
    );
};

export default Explore;