import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import "./UserReview.css"

const UserReview = () => {
    const [reviews,setReview]=useState([]);
    console.log(reviews);
    useEffect(()=>{
        fetch("https://sheltered-mountain-47444.herokuapp.com/review")
        .then(res=>res.json())
        .then(data =>setReview(data));
    },[]);
    

    return (
        <div>
            
                
              
            <Container>
                
            <Typography sx={{fontWeight:600,m:2
              ,textAlign:"center" }}  variant="h4" component="div"  >
                     Our Review Section 
            </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                 {
                     reviews.map(review=><Grid item xs={12}  md={4} sx={{boxShadow:3,my:3}} key={review._id}>
                        <Typography  variant="h6">
                              {review?.name}  
                        </Typography>
                        <Typography variant="body1">
                              {review?.email}  
                        </Typography>
                         <Typography sx={{p:2}} variant="body1">
                        <Rating
                        initialRating={review?.review}
                        readonly  
                        emptySymbol="far icon-color fa-star"
                        fullSymbol = "fas icon-color fa-star">
                        </Rating>
                             <br />
                             Review : {review?.review}  
                        </Typography>
                     </Grid>)
                 } 
                </Grid>
            </Container> 

        </div>
    );
};

export default UserReview;
{/* <i class="fas fa-star"></i> */}