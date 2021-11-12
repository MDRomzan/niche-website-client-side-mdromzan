import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../Hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const OrderModal = ({explore,openOrder,handleOrderClose,setOrderSuccess}) => {
     const {name,price}=explore;
    const {user}=useAuth();
    const initializeInfo={clientName:user.displayName,email:user.email,phone:"",city:"",address:"",date:""}
    const [orderInfo,setOrderInfo]=useState(initializeInfo);

    const handleOnBlur=(e)=>{
        const field=e.target.name;
        const value=e.target.value;
        const newInfo={...orderInfo};
        newInfo[field]=value;
        console.log(newInfo);
        setOrderInfo(newInfo);
    }
     const handleOrderSubmit=(e)=>{


        const order={
            ...orderInfo,
            price,
            productName:name          
        }
        fetch("http://localhost:5000/orders",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(order)
        })
        .then(res =>res.json())
        .then(data =>{
            if (data.insertedId){
                setOrderSuccess(true);
                handleOrderClose();
            }
            console.log(data)
        })
        
        // collect from to server

         
         e.preventDefault();
     }
    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openOrder}
        onClose={handleOrderClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openOrder}>
          <Box sx={style} >
            <Typography sx={{m:3}}  id="transition-modal-title" variant="h4" component="h2">
                
            {name}
             
            </Typography>
            <form onSubmit={handleOrderSubmit}>


                <TextField
                  disabled
                  label = "Price"
                sx={{width:"90%", m:1}}
                id="outlined-size-small"             
                defaultValue={price}
                size="small"
                />
                <TextField
                  
                label="Name"
                sx={{width:"90%", m:2}}
                id="outlined-size-small" 
                onBlur={handleOnBlur}
                name="clientName"            
                defaultValue={user.displayName}
                size="small"
                />
                <TextField
                  
                label="E-mail"
                sx={{width:"90%", m:2}}
                id="outlined-size-small"
                 name = "email"
                 onBlur={handleOnBlur}
                defaultValue={user.email}
                size="small"
                />
                <TextField
                  
                label="Phone"
                onBlur={handleOnBlur}
                sx={{width:"90%", m:2}}
                id="outlined-size-small"
                 name="phone"                         
                defaultValue="Phone Number"
                size="small"
                />
                    <TextField
                  
                label="Address"
                name = "address"
                onBlur={handleOnBlur}
                sx={{width:"90%", m:2}}
                id="outlined-size-small"             
                defaultValue="Your Address "
                size="small"
                />
                <TextField
                  
                label="City"
                name="city" 
                onBlur={handleOnBlur}
                sx={{width:"90%", m:2}}
                id="outlined-size-small"             
                defaultValue="Your City "
                size="small"
                />
                <TextField
                  
                label="Date"
                type="Date"
                name="date" 
                onBlur={handleOnBlur}
                sx={{width:"90%", m:2}}
                id="outlined-size-small"             
                defaultValue="date and time"
                size="small"
                />
        <Button type="submit" variant="contained">Order Now</Button>
            </form>
          </Box>
       </Fade>
      </Modal>

    );
};

export default OrderModal;