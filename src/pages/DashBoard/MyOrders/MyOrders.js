import React, { useEffect, useState } from 'react';
import useAuth from"../../../Hooks/useAuth";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const MyOrders = () => {
    const {user}=useAuth();
    const [orders,setOrders]=useState([]);

    useEffect(()=>{
        const url=`https://sheltered-mountain-47444.herokuapp.com/orders/?email=${user.email}`
        fetch(url)
        .then(res =>res.json())
        .then(data =>setOrders(data));
    },[user.email]);
    const handleDelete=(id)=>{
      // console.log(id)
      fetch(`http://localhost:5000/deleteOrder/${id}`, {
        method:"DELETE",
      })
      .then(res =>res.json())
      .then(data =>{
        if (data.deletedCount) {
          alert("Delete Successfully")
          const remainig = orders.filter(order => order._id !== id);
          setOrders(remainig);
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
              <TableCell align="right">{order.date}</TableCell>
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