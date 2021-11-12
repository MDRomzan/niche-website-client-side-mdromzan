import React, { useEffect, useState } from 'react';
import { Link  } from 'react-router-dom';
import "./ManageProducts.css";

const ManageProducts = () => {
    const [products,setproducts]=useState([]);
    
    useEffect(()=>{
        fetch("https://sheltered-mountain-47444.herokuapp.com/explores")
        .then(res=>res.json())
        .then(data=>setproducts(data))

    },[])

    const handleDelete =(id)=>{
        const url = `https://sheltered-mountain-47444.herokuapp.com/explores/${id}`
        fetch(url,{
            method:"DELETE"
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            if(data.deletedCount){
                alert("Delete Successfully")
                const remainig=products.filter(product =>product._id !==id);
                setproducts(remainig);
            }
           
        })
    }
   
    return (
        <div className="row">
            <h3 className="text-warning text-center">This is Manage products</h3>
            {
            products.map(product=> <div className="col-md-4  text-center col-lg-4 my-3 p-4" key={product._id}>
            <div className="">
                <img className="ima-size" src={product?.img}alt="" />
                <h3>{product?.name}</h3>
                <button onClick={()=>handleDelete(product._id)} className="btn-button">Delete</button>
               <Link to={`/update-user/${product._id}`}>
                    <button className="btn-button">Update</button>
               </Link>
                
               
            </div>
                

            </div> )
            }
        </div>
    );
};

export default ManageProducts;