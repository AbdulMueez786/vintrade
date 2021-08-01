import React, { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import {useStateValue} from './StateProvider';
import { auth } from './firebase';
import Footer from './Footer';
import Account from './Account';
import ProductDescription from './ProductDescription';
import CheckOut from './CheckOut';
import Payment from './Payment';
import ThankYouPage from './ThankYouPage';
import SellingProduct from './SellingProduct';
import successfullyDone from './SuccessfullyDone';

import {loadStripe} from "@stripe/stripe-js";

import {Elements} from "@stripe/react-stripe-js";
import SuccessfullyDone from './SuccessfullyDone';
import OrderHistory from './OrderHistory';
import Order_detail from './Order_detail';


//PUBLIC KEY
const promise=loadStripe('pk_test_51HQvEdCKaIrpV2K9b51mcp70xV3aBLascgwU01nQZkF0sQzWPlCXQqguKFiuc0tcgzk9CTUX1q66tzfpIE4JOwI100JdSvDiUB');


function App() {

  const [{user},dispatch] = useStateValue();
  
  const [option,setoption]=useState();
  useEffect(() => {
  console.log(option)
    }, [option])

  useEffect(() => {
  
  const unsubscribe=auth.onAuthStateChanged((authUser)=>{
  if(authUser){
    //the user loged in
    dispatch({
      type:"SET_USER",
      user:authUser
    }) 
  }
  else{
    dispatch({
      type:"SET_USER",
      user:null
    }) 
     //the user is loged out
  }
});
return ()=>{
  unsubscribe();
  //Any cleanup operation go in here...
} 

  }, [])
  return (

     <Router>
       <div className="app">
         <Switch>
           <Route path="/checkout">
           <Header/>
          <CheckOut/>
            <Footer/>
           </Route>
           <Route path="/order_detail">
           <Header/>
          <Order_detail/>
            <Footer/>
           </Route>
           <Route path="/order_history">
           <Header/>
          <OrderHistory/>
            <Footer/>
           </Route>
           <Route path="/thankyoupage">
           <Header/>
          <ThankYouPage/>
            <Footer/>
           </Route>
           <Route path="/payment">
             <Header/>
             <Elements stripe={promise}>
                <Payment/>      
              </Elements>
             <Footer/>       
           </Route>
           <Route path="/login">
           <Header/>
             <Login/>
           </Route>
           <Route path="/signup">
           <Header/>
             <Signup/>
           </Route>
           <Route path="/productdescription">
             <Header/>
             <ProductDescription/>
            <Footer/> 
           </Route>
           <Route path="/sellingproduct">
             <Header/>
             <SellingProduct/>   
            <Footer/>
           </Route>
           <Route path="/successfullyDone">
             <Header/>
             <SuccessfullyDone/>   
            <Footer/>
           </Route>
           <Route path="/account">
             <Account/>
           </Route>
          {/*Default*/}
           <Route path="/">
             <Header setoption={setoption}/>
                <Home option={option} />
                <Footer/>       
           </Route>
         </Switch>
       </div>
     </Router>
  );
}

export default App;
