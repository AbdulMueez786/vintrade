import { Button } from '@material-ui/core';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from './axios';
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link,useHistory } from 'react-router-dom';
import CheckOutProduct from './CheckOutProduct';
import './Payment.css'  
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
function Payment() {
    const [{basket,user},dispatch] = useStateValue();
  
    const stripe=useStripe();
    const elements=useElements();
    const history = useHistory();
    
   const [succeeded,setSucceeded]=useState(false);
   const [processing,setProcessing]=useState("");

    const [error,setError]=useState(null);
    const [disabled,setDisable]=useState(true);
    const [clientSecret,setClientSecret]=useState(true);

    useEffect(() => {
        //generate the special stripe secret which allow us to charge the customer
         
            /*
            axios is like we can make a requests,
            axios is a very popular fetching library,
            you can fetch in you post requests and 
            it allow you to interact with api very easily
            install axios through npm i axios
            make a file name axios.js
            */            
           const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
        }, [basket])
        
        console.log(getBasketTotal(basket));
        console.log('THE SECRET IS >>>', clientSecret)
        console.log('👱', user)
    

    const handleSubmit=async (event)=>{
         //do all fancy stripe here        
         event.preventDefault();
         history.push("/thankyoupage")
         setProcessing(true);
 
         const payload = await stripe.confirmCardPayment(clientSecret, {
             payment_method: {
                 card: elements.getElement(CardElement)
             }
         }).then(({ paymentIntent }) => {
             // paymentIntent = payment confirmation
          
             //paymentIntent= payment confirmation
             setSucceeded(true);
             setError(null)
             setProcessing(false)
 
             dispatch({
                 type: 'EMPTY_BASKET'
             })
 
             history.replace('/orders')
         })
    }
    const handleChange=event=>{
        //listen for changes in the card element
        //and display any errors as the customer type there card detail
        setDisable(event.empty);
        setError(event.error ? event.error.message:"");

    }


    return (
        <div className="payment">
            <div className="payment__container">
               <h1>
                    Checkout(<Link to="/checkout">{basket?.length} items</Link>)     
               </h1>
                {/*paymentSection -> Delivery Address*/}
                <div className="payment_section">
                     <div className="payment__title">
                         <h3>Deliver Address</h3>
                     </div>
                     <div className="payment__address">
                            <p>{user?.email}</p>
                            <p>G11/3 Street 100</p>
                            <p>Islamabad Pakistan</p>
                     </div>

                </div>
                {/*paymentSection -> Review Items*/}
                <div className="payment_section">
                <div className="payment__title">
                         <h3>Review item and delivery</h3>
                </div>
                <div className="payment__items">
                         {basket.map(item => (
                                  <CheckOutProduct
                                  id={item.id}
                                  title={item.title}
                                  image={item.image}
                                  price={item.price}
                                  rating={item.rating}
                                  />
                         ))}
                </div>
               </div>
                {/*paymentSection -> Payment Method*/}
                <div className="payment_section">
                     <div className="payment__title">
                           <h3>Payment Method</h3>
                     </div> 
                     <div className="payment__details">
                             {/*Stripe Magic will go*/}

                             <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange}/>

                                <div className='payment__priceContainer'>
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                                    <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                    </button>
                                </div>

                                  {/* Errors */}
                                {error && <div>{error}</div>}
                            </form>

                     </div>
                 </div>
            </div>
        </div>
    )
}

export default Payment
