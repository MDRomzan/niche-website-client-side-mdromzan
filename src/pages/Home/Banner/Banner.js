
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import banner from "../../../images/banner.png"
import "./Banner.css"
import {
    Button,
    Typography,
    Container
} from '@mui/material';

const verticalCenter = {
    display: "flex",
    alignItems: "center",
    height: 400
}
const Banner = () => {
    return (
 <Container sx={{ flexGrow: 1,mt:5 }}>
      <Grid container spacing={2}>
         
        <Grid item sx={{...verticalCenter, }}  sx={{textAlign:"left",mt:5 }} xs={12} md={6}>
            <Box>
            
            <Typography variant="h2">
                <span className="text">Bike lovers</span> deserve <br /> Better Enjoy <span className="degin"> Life</span>  
            </Typography>
             <Typography style={{fontSize:14,color:"gray" ,fontWeight:300}} sx={{my:3}} variant="h6">
              As our world is getting modern day by day, but the craze of bicycles always remains in fashion.Some people are just crazy about bicycles, especially children.They just love to ride bicycles.
            </Typography>
            <Button variant="contained" >learn More</Button>

             </Box>
        </Grid>
      
        <Grid item xs={12}  style={verticalCenter}   md={6}>
          <img className="size-cut" style={{}} src={banner} alt="" />
        </Grid>
        
        
      </Grid>
    </Container>
    );
};

export default Banner;