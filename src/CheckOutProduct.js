import React,{forwardRef} from 'react'
import {useStateValue} from './StateProvider';
import './CheckOutProduct.css'
import { Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
const CheckOutProduct=forwardRef(({id,title,image,price,rating},ref) =>{
    const [{basket},dispatch] = useStateValue();

    const removeFromBasket =()=>{
        //remove item from basket
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        });
    }
    const submit = () => {
        confirmAlert({
          title: '',
          message: 'Are you sure you want to remove from cart',
          
          buttons: [
            {
              label: 'Yes',
              onClick: () => removeFromBasket()       
            },
            {
              label: 'No',
             
            }
          ]
        })
      };

    return (
        
        <div ref={ref} className="checkoutproduct">
            <img className="checkoutproduct__image" src={image} alt=""/>
            <div className="checkoutproduct__info">
            <p className="checkoutproduct__title">{title}</p>
            <p className="checkoutproduct__price">{"$"+price}</p>
            
            <div className="checkoutproduct__rating">
                 {
                     Array(rating)
                     .fill()
                     .map((_)=>(<p>⭐</p>))
                 }
            </div>
            <Button color="inherit"  variant="contained"  disableElevation onClick={submit}
            startIcon={<DeleteForeverIcon/>}
            >
              Remove from basket
            </Button>
            </div>
        </div>
    )
}
)
export default CheckOutProduct
