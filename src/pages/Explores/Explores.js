import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Explore from '../Explore/Explore';

const Explores = () => {
    const [explores,setExplores]=useState([]);

    
    useEffect(()=>{
        fetch("http://localhost:5000/explores")
        .then(res => res.json())
        .then(data =>setExplores(data));
    },[])

    return (
<Box sx={{ flexGrow: 1 }}>
      <Container>
         
          <Typography sx={{fontWeight:500,m:2,textAlign:"center"}}  variant="h6" component="div">
                Our Explore we Provaide     
            </Typography>

            <Typography sx={{fontWeight:600,m:2
              ,textAlign:"center" }}  variant="h4" component="div"  >
                     Our Explore Best Bycycle 
            </Typography>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    explores.map(explore=><Explore 
                key={explore.key}
                explore={explore}
              
              >

              </Explore>)
            }
              
                
        
           
          </Grid>
      </Container>
    </Box>
    );
};

export default Explores;