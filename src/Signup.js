import './Signup.css'
import React, { useState } from 'react';
import {Link,useHistory} from "react-router-dom";
import logo from './images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
function Signup() {
    const history=useHistory(); 
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    const [UserType,setUserType]=useState("Set User Type");
    const [{user},dispatch] = useStateValue();

    const loginGoogle = e =>{
      e.preventDefault();
    auth.signInWithPopup(provider).
    then(result => {
        dispatch({
            type:'SET_USER',
            user:result.user,
        })
        history.push('/');
    } )
    .catch(error =>alert(error.message));
  }

    const register=e=>{
      e.preventDefault();
       auth.createUserWithEmailAndPassword(email,password)
       .then(auth=>{
        history.push('/');
        
    //create a user and login in redirect to home page 
        })
       .catch((e)=>alert(e.message));
     }
    return (
        <center>  
        <div className="signup">
            <Link to="/">
            <img class="login__logo" src={logo} alt=""/>
            </Link>
            <div class="login__container">
            <h1>Sign Up</h1>
            <form>
                <h5>E-mail</h5>
                <input className="g" type="text"  onChange={event => setEmail(event.target.value)} value={email}/>
                <h5>Password</h5>
                <input className="g" type="password"  onChange={event => setPassword(event.target.value)} value={password}/>
                <h5>Confirm Password</h5>
                <input className="g" type="password"  onChange={event => setPassword(event.target.value)} value={password}/>
                <p><b>Please Specify your user type</b></p>
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret>
                {UserType}
             </DropdownToggle>
                <DropdownMenu>
                   <DropdownItem onClick={()=>setUserType("Buyer")}>Buyer</DropdownItem>
                   <DropdownItem onClick={()=>setUserType("Seller")}>Seller</DropdownItem>
                </DropdownMenu>
              </Dropdown>
                <p className="pp">By signing-Up you agree to Vintrade's Conditions of 
               Use &amp; Sale. Please see our Privacy Notice, our 
               Cookies Notice and our Interest-Based Ads Notice.</p>
                <button onClick={register} type="submit" class="login__signInButton">Sign up
                </button>
                <button onClick={loginGoogle} type="submit" class="login__signInButton">Signup with Google
                </button>

            </form>
    
           
            </div> 
          </div>
        </center>      
    )
}
export default Signup
