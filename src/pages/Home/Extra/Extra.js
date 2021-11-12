import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import pic1 from "../../../images/pic1.jpeg"
import pic2 from "../../../images/pic2.jpeg"
import pic3 from "../../../images/pic3.jpeg"

const sizePic={
  width:"400px",
  height:"300px"
}
const Extra = () => {
    return (
<Container sx={{ flexGrow: 1,mt:5 }}>
  <h1 className="text-center">Best Racing Bycycle</h1>
      <Grid container spacing={2}>
         
        <Grid item  sx={{my:5 }} xs={12} md={4}>
          <img style={sizePic} src={pic1} alt="" />
           <Typography  varianr="h4">
              Race Cycycleing
           </Typography>
           <Typography  varianr="body1">
              Cycling, also called bicycling or biking, is the use of bicycles for transport, recreation, exercise or sport . ... They are the principal means of transportation in many parts of the world.
           </Typography>
           

        </Grid>
        <Grid item  sx={{my:5 }} xs={12} md={4}>
           <img style={sizePic} src={pic2 }
           alt=""/>
             <Typography varianr = "h4">
            Drive Cycleing </Typography>
              <Typography varianr = "body1">
             Cycling, also called bicycling or biking, is the use of bicycles
           for transport, recreation, exercise or sport....They are the principal means of transportation in many parts of the world. </Typography>
        </Grid>
        <Grid item  sx={{my:5 }} xs={12} md={4}>
           <img style={sizePic} src={pic3} alt="" />
           <Typography  varianr="h4">
               Super Cycleing
           </Typography>
           <Typography  varianr="body1">
              Cycling, also called bicycling or biking, is the use of bicycles for transport, recreation, exercise or sport . ... They are the principal means of transportation in many parts of the world.
           </Typography>
        </Grid>
      </Grid>
    </Container>
    );
};

export default Extra;