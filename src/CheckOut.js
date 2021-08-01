import React from 'react'
import {useStateValue} from './StateProvider';
import './CheckOut.css';
import CheckOutProduct from './CheckOutProduct';
import Subtotal from './Subtotal';
import CurrencyFormat from 'react-currency-format';
import FlipMove from 'react-flip-move';
import add from './adds/vintage_adds.PNG';

function CheckOut() {
    
    const [{basket,user}] = useStateValue();//disatch used hen you want to manaupalate the data in data layer


    return (
    <div class="checkout">
        

      <div className="checkout__left">

      <img class="checkout__ad" 
        src={add} 
        alt=""></img>     
        {basket?.length === 0 ? (
     
     
            <div>

                <h2>Your Shopping Basket is empty</h2>
                <p>You have no basket in your item in your basket.To buy click
                    "Add to basket" next to the item.
                </p>
            </div>
    

        ):(

            <div>
                        <h3>Hello {user?.email}</h3>
                <h2 className="checkout__title">Your Shopping Basket</h2>
                <FlipMove duration={750} easing="ease-out">
                {
                    basket.map(item =>(
                        
                        <CheckOutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))
                }
            </FlipMove>
            </div>
        )
        }

      </div>
      {basket?.length>0 && (
      <div className="checkout__right"> 
       <Subtotal></Subtotal>
      </div>)
       }
        </div>
    )
}
//to install react-currency-format
export default CheckOut
