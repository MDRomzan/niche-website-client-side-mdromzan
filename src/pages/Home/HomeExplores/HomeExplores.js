import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';
import useExplore from '../../../Hooks/useExplores';

const HomeExplores = () => {
    const {explores}=useExplore();
    const history=useHistory();
    const handleDetaile=(_id)=>{
        const uri=`/detaile/${_id}`
        history.push(uri);
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
      <Container>
         
          <Typography sx={{fontWeight:500,m:2,textAlign:"center"}}  variant="h6" component="div">
                Our Explore We Provaide     
            </Typography>

            <Typography sx={{fontWeight:600,m:2
              ,textAlign:"center" }}  variant="h4" component="div"  >
                     Our Explore Best Bycycle 
            </Typography>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    explores.slice(0,6)?.map(explore=><Grid item xs={12} sm={12} md={4} key={explore.key}>
                        <Card sx={{border:0,boxShadow:3,textAlign:"center" , minWidth: 275 }}>
                    
                    <CardMedia
                        component="img"
                        style={{width:"300" ,height:"200",margin:"0 auto"}}
                        image={explore?.img}
                        alt="green iguana"
                    />

                <CardContent>
                
                    
                    <Typography  variant="h5" component="div">
                        {explore?.name}
                        
                    </Typography>
                    <Typography  variant="h5" component="div">
                        price:
                       {explore?.price}
                        
                    </Typography>
                    <Typography  sx={{ mb: 1.5 }} color="text.secondary">
                     {explore?.Description}
                    </Typography>
                </CardContent>
                <Button sx={{my:5}} onClick={()=>handleDetaile(explore._id)} variant="contained">Buy Now</Button>
                
                </Card>
                           


                    </Grid>)
            }
              
                
        
           
          </Grid>
      </Container>
    </Box>
    );
};

export default HomeExplores;