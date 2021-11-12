import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';
import"./UpdateUser.css"

const UpdateUser = () => {
    const {id}=useParams()
    const [product,setproduct]=useState({});
   
    useEffect(()=>{
        const url = `https://sheltered-mountain-47444.herokuapp.com/explores/${id}`;
        fetch(url)
        .then(res =>res.json())
        .then(data=>setproduct(data))
    },[id]);
    const handleNameChange=(e)=>{
        console.log(e.target.value);
         const updateName=e.target.value;
         const updateproduct={name:updateName,price:product.price,img:product.img,Description:product.Description}
        // const updatedproduct={...product};
        // updatedproduct.name=updateName;
        // setproduct(updatedproduct)
        setproduct(updateproduct)
    }
     const handleImgChange=(e)=>{
        const updateImg=e.target.value;
        const updateproduct={name:product.name,price:product.price,img:updateImg,Description:product.Description}
        setproduct(updateproduct)
    }
    const handlePriceChange=(e)=>{
        const updatePrice=e.target.value;
        const updateproduct={name:product.name,price:updatePrice,img:product.img,Description:product.Description}
        setproduct(updateproduct)
    }
    const handleDescriptionChange=(e)=>{
        const updateDescription=e.target.value;
        const updateproduct={name:product.name,price:product.price,img:product.img,Description:updateDescription}
        setproduct(updateproduct)
    }
     const handleproductUpdate=(e)=>{
        const url = `https://sheltered-mountain-47444.herokuapp.com/explores/${id}`;
         fetch(url,{
            method:"PUT",
            headers:{
                 "content-type":"application/json"
                },
                 body:JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if (data.modifiedCount > 0){
                alert("Updated Successfully");
                setproduct({});
             }
        })
        e.preventDefault();
    }
    return (
        <>
        <Navigation></Navigation>
        <div className="update">
            <h1> This is Name:{product.name}</h1>
            <h3>This is update user:{id}</h3>
              <form onSubmit={handleproductUpdate}>
            <input type="text"placeholder="name"onChange={handleNameChange}  value={product.name ||""} />
            <input type="text" placeholder="price" onChange={handlePriceChange}  value={product.price || ""}  />
             <input type="Description" onChange={handleDescriptionChange}  placeholder="Description"  value={product.Description|| ""}  />
            <input type="text"placeholder="image url" onChange={handleImgChange}  value={product.img || ""}  />
            <input type="submit" value="Update" />
          </form> 
        </div>
        
        </>
    );
};

export default UpdateUser;