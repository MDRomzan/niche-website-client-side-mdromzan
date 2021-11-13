import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bike from "../../../images/bike.jpeg"
import {
    Button,
    Typography,
    Container
} from '@mui/material';
import "./OverView.css"
import { Link } from 'react-router-dom';
const verticalCenter = {
    display: "flex",
    alignItems: "center",
    height: 400
}



const OverView = () => {
  
    return (
<Container sx={{ my:12, flexGrow: 1 }}>
      <Grid container spacing={2}>
         <Grid item xs={12}  style={verticalCenter}   md={6}>
          <img className="size-ima" style={{}} src={bike} alt="" />
        </Grid>
        <Grid item sx={{...verticalCenter, }}  sx={{textAlign:"left",mt:5 }} xs={12} md={6}>
            <Box>
            
            <Typography variant="h2">
                <span className="text">lovers</span> Cycle <br /> Feeling <span className="degin"> Cool</span>  
            </Typography>
             <Typography style={{fontSize:14,color:"gray" ,fontWeight:300}} sx={{my:3}} variant="h6">
              As our world is getting modern day by day, but the craze of bicycles always remains in fashion.Some people are just crazy about bicycles, especially children.They just love to ride bicycles.
            </Typography>
            <Link to="/about">
            <Button variant="contained" >learn More</Button>
            </Link>
             </Box>
        </Grid>
      </Grid>
    </Container>
    );
};

export default OverView;