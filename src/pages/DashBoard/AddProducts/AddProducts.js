import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import "./AddProducts.css";
const AddProducts = () => {
    const {handleSubmit,reset,register}=useForm()
    const onSubmit=(data)=>{
        console.log(data);

        axios.post("https://sheltered-mountain-47444.herokuapp.com/explores/", data)
        .then(res =>{
            // console.log(res);
            if(res=>data.inserted){
                alert("Successfully Added Done");
                reset()
            }
        })
       

    };
    return (
        <div className="add-service">
        <h2>Please add Service</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" /> 
            <br/>
            <textarea {...register("Description")} placeholder="description" />
            <br/>
            <input type="text" {...register("price")} placeholder="Price" />
            {/* <input type="Date" {...register("price")} placeholder="Price" /> */}
            <br/>
            <input {...register("img")} placeholder="Image Url" />
            <br />
            <input type="submit" />
        </form>
        </div>
    );
};

export default AddProducts;