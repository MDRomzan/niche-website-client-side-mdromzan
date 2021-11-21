import { CircularProgress } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React,{useEffect, useState} from 'react';
import useAuth from "../../../Hooks/useAuth";
const CheckOutFrom = ({order}) => {
  const {token,user}=useAuth();
    const {price,clientName,_id}=order;
    const stripe=useStripe();           
    const elements=useElements();
    const [success,setSuccess]=useState();
    const [error,setError]=useState("");
    const [clientSecret,setClientSecret]=useState("");
    const [procssing,setProcssing]=useState(false);
    console.log(clientSecret);
    useEffect(()=>{
        fetch("https://sheltered-mountain-47444.herokuapp.com/create-payment-intent",{
            method:"POST",
            headers:{
              "authorization": `Bearer ${token}`,
                'content-type':'application/json'
            },
            body:JSON.stringify({price})
        })
        .then(res =>res.json())
        .then(data => setClientSecret(data.clientSecret));
    },[price])
    const handleSubmit=async (e)=>{
         e.preventDefault();
        if(!stripe || !elements){
            return;
        }
        const card =elements.getElement(CardElement);
        if(card ===null) {
            return;
        }
        setProcssing(true) ;
        const {error,paymentMethod}=await stripe.createPaymentMethod({
            type:"card",
            card
        });
        if(error){
          setError(error.message);
          setSuccess("");
        }
        else{
            setError("");
            console.log(paymentMethod);
        }
        // payment intent use
        const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method: {
              card: card,
              billing_details: {
                name: clientName,
                email:user.email
              },
            },
          },
        );
        if(intentError){
          setError(intentError.message);
          setSuccess("");
        }
        else{
          setError("");
          setSuccess("Your payment successfully");
          console.log(paymentIntent);
          setProcssing(false);
          // database save
          const payment={
              amount:paymentIntent.amount,
              created:paymentIntent.created,
              last4:paymentMethod.last4,
              transaction:paymentIntent.client_secret.slice("_secret")[0]
          } 
          const url = `https://sheltered-mountain-47444.herokuapp.com/allOrders/${_id}`
          fetch(url,{
            method:"PUT",
            headers:{
              "content-type":"application/json"
            },
            body:JSON.stringify(payment)
          })
          .then(res =>res.json())
          .then(data=>{
            console.log(data)
          })


        }



       
    }
    return (
        <div>
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      {procssing ? <CircularProgress></CircularProgress> : <button type="submit" disabled={!stripe || success}>
        Pay ${price}
      </button>}
    </form>
    {
        error && <p style={{color:"red"}}>{error}</p>
    }
     {
        success && <p style={{color:"green"}}>{success}</p>
    }

    
        </div>
    );
};

export default CheckOutFrom;

/*
1.install stripe and stripe-react ,
2.set publishable key,
3.Elements 
4.CheckOut Form 
..............
5. Create payment method
6.ami doiadd
*/