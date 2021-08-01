import React, { useState } from 'react';
import './Account.css';
import {Link,useHistory} from "react-router-dom";
import { auth } from './firebase';
import logo from './images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from '@material-ui/core';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { useStateValue } from './StateProvider';
//import {Alert } from 'react-alert'
function Login() {

  const [{usertype},dispatch] = useStateValue();
  const history=useHistory(); 
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const [UserType,setUserType]=useState("Set User Type");
    
    const AccountType =e=>{
       e.preventDefault();
       console.log("____________________________________________"+UserType);
      if(UserType!="Set User Type"){
        dispatch({
          type:"SET_USER_TYPE",
          usertype:UserType
        }); 
        history.push('/Login');
       }
       else{
         alert("Please Select Your User Type");
       }
     }
    return (
        <center>  
        <div className="login">
            <Link to="/">
            <img class="login__logo" src={logo} alt=""/>
            </Link>
            <div class="login__container">
            <h1><i>VinTrade</i></h1>
            <form>
            <p>Please Specify your user type</p>
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret>
                {UserType}
             </DropdownToggle>
                <DropdownMenu>
                   <DropdownItem onClick={()=>setUserType("Buyer")}>Buyer</DropdownItem>
                   <DropdownItem onClick={()=>setUserType("Seller")}>Seller</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <br/>
              <button onClick={AccountType} type="submit" class="login__signInButton">Sign In
                </button>
     

            </form>
            <p>By signing-in you agree to Vintrade's Conditions of 
               Use &amp; Sale. Please see our Privacy Notice, our 
               Cookies Notice and our Interest-Based Ads Notice.</p>
        
            </div> 
        </div>
        </center>      
    )
}
export default Login
