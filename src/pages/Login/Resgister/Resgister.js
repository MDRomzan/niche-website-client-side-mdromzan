
import React, { useState } from 'react';
import { Button, CircularProgress, Container, Grid, TextField, Typography,Alert } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';



const Resgister = () => {
    const history=useHistory();
    const [loginData,setLoginData]=useState({});
    const {error,user,registerUser, isLoading}=useAuth();
//   const {user,signInWithGoogle,loginUser,isLoading,error}=useAuth()
//   const history=useHistory();
//     const location=useLocation();
    const handleOnBlur=(e)=>{
        const field=e.target.name;
        const value=e.target.value;
         console.log(field,value) ;
        const newLoginData={...loginData}
        newLoginData[field]=value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit=(e)=>{
        if(loginData.password !== loginData.password2){
                alert("Your password did'not match");
                return;
        }
        alert("Register Successfully")
        registerUser(loginData.email, loginData.password,loginData.name, history)
        
        e.preventDefault();
    }
    return (
 <Container>
            <Grid container spacing={2}>
            <Grid sx={{mt:8}}  item xs={12} md={6}>
                <Typography variant="body1" gutterBottom>
                    Register
                </Typography>
                { !isLoading && <form onSubmit={handleLoginSubmit}>
                    <TextField  type="text" sx={{width:"75%",m:1}} id="standard-basic" onBlur={handleOnBlur} name="name" label="Your Name" variant="standard" />

                    <TextField  type="email" sx={{width:"75%",m:1}} id="standard-basic" onBlur={handleOnBlur} name="email" label="Your E-mail" variant="standard" />
                    
                    <TextField onBlur={handleOnBlur}   sx={{width:"75%",m:1}} type="password" id="standard-basic" 
                    label="Your Password" name="password" variant="standard"  />

                    <TextField onBlur={handleOnBlur}   sx={{width:"75%",m:1}} type="password" id="standard-basic" 
                    label="Re-type Password" name="password2" variant="standard"  />

                    <Button  type="submit" style={{backgroundColor:"rgb(42, 192, 158 )"}} sx={{width:"75%",m:1}} variant="contained">
                        Register
                    </Button>
                      <NavLink style={{textDecoration:"none"}} to="/login">
                        <Button variant="text"> Already User? Please login</Button>
                    </NavLink>
                     {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success"> User created successfully !</Alert> }
                    {error && <Alert severity="error">{error}</Alert>} 
                </form>}
               
                
            </Grid>


            
            </Grid>
        </Container>
    );
};

export default Resgister;