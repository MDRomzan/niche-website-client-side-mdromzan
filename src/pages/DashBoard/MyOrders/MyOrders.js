import React, { useEffect, useState } from 'react';
import useAuth from"../../../Hooks/useAuth";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const MyOrders = () => {
    const {user,token}=useAuth();
    const [orders,setOrdersConfirm]=useState([]);
  // console.log(order)
    useEffect(()=>{
        const url=`https://sheltered-mountain-47444.herokuapp.com/orders?email=${user.email}`
        fetch(url,{
          headers: {
            "authorization": `Bearer ${token}`
          }
        })
        .then(res =>res.json())
        .then(data=>setOrdersConfirm(data))
        
        
    },[]);
    const handleDelete=(id)=>{
      // console.log(id)
      fetch(`https://sheltered-mountain-47444.herokuapp.com/deleteOrder/${id}`, {
        method:"DELETE",
      })
      .then(res =>res.json())
      .then(data =>{
        if (data.deletedCount) {
          alert("Delete Successfully")
          const remainig = orders.filter(order => order._id !== id);
          setOrdersConfirm(remainig);
        }
      })

    }
    
    return (
        <div>
           <h3>This is My Orders:{orders.length}</h3> 
               <TableContainer  component={Paper}>
      <Table sx={{}} aria-label="Orders Table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">E-mail</TableCell>
            <TableCell align="right">orderName</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Action</TableCell>
            <TableCell align="right">Cancel</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow
              key={order._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {order.clientName}
              </TableCell>
              <TableCell align="right">{order.email}</TableCell>
              <TableCell align="right">{order.productName}</TableCell>
              <TableCell align="right">${order.price}</TableCell>
              <TableCell align="right">{order.payment ? 
              "paid":
              <Link to={`/dashboard/payment/${order._id}`}> <Button  color="secondary" variant="contained">Pay</Button></Link>
              }</TableCell>
              
              <Button onClick={()=>handleDelete(order?._id)} color="error" variant="contained">Cancel</Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </div>
    );
};

export default MyOrders;