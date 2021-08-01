import React from 'react'
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';
function Subtotal() {
  const history =useHistory();  
  const [{basket},dispatch] = useStateValue();
    
    return (
   
        <Card  collapseOnSelect expand="lg" style={{ margin: '10px',backgroundColor:'transparent',border:'none' }}>
       
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value)=>(
              <>
                <p>Subtotal ({basket.length}items):<strong>{value}</strong></p>
                <small className="subtotal__gift">
                   <input type="checkbox"/> This order contains a gift
                 </small> 
              </>
            )}            
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
            <button onClick={e=>history.push('/payment')}>Proceed to Checkout</button>
        </div>
      </Card>
    )
}

export default Subtotal
