import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [orders,setOrders]=useState([]);
    const [status,setStatus]=useState("");

    const handleStatus=(e)=>{
        setStatus(e.target.value);
    }
    // console.log(status);


    useEffect(()=>{
        fetch("http://localhost:5000/orders")
        .then(res =>res.json())
        .then(data =>setOrders(data))
    },[])
    const handleUpdate=(id)=>{
        fetch(`http://localhost:5000/updateStatus/${id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({status}),
        })
        .then(res =>res.json())
        .then(data =>{
            if (data.modifiedCount > 0) {
                alert("Updated Successfully");
                
            }
        })
        // console.log(id)
    }

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
          setOrders(remainig);
        }
      })

    }
    return (
        <div>
           <h2>This is Manage All Orders:{orders.length}</h2>
            <TableContainer  component={Paper}>
      <Table sx={{}} aria-label="Orders Table">
        <TableHead>
          <TableRow>
            <TableCell>ProductName</TableCell>
            <TableCell align="right">E-mail</TableCell>
            <TableCell align="right">Status</TableCell>
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
                {order.productName}
              </TableCell>
              
              <TableCell align="right">{order.email}</TableCell>
              <TableCell align="right">
                  <input onChange={handleStatus} type="text" defaultValue={order.status}/>
                  
              </TableCell>
              <TableCell align="right">{order.date}</TableCell>
              <Button onClick={()=>handleUpdate(order._id)}    color="success" variant="contained">update</Button>
              <Button onClick={()=>handleDelete(order._id)} color="error"  variant="contained">Cancel</Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 
        </div>
    );
};

export default ManageAllOrders;