import React, { useState } from 'react';
import './Login.css';
import {Link,useHistory} from "react-router-dom";
import { auth, provider } from './firebase';
import logo from './images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from '@material-ui/core';
import { useStateValue } from './StateProvider';

function Login() {
    const history=useHistory(); 
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [{user},dispatch] = useStateValue();

    const login =e=>{
      e.preventDefault();
      auth.signInWithEmailAndPassword(email,password)
       .then((auth)=>{
        history.push('/');
        //login in ,redirect to home page
        })
       .catch(e=>alert(e.message)); 
      }
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
        <div className="login">
            <Link to="/">
            <img class="login__logo" src={logo} alt=""/>
            </Link>
            <div class="login__container">
            <h1>Login</h1>
            <form>
                <h5>E-mail</h5>
                <input className="g" type="text"  onChange={event => setEmail(event.target.value)} value={email}/>
                <h5>Password</h5>
                <input className="g" type="password"  onChange={event => setPassword(event.target.value)} value={password}/>
                <p>By signing-in you agree to Vintrade's Conditions of 
               Use &amp; Sale. Please see our Privacy Notice, our 
               Cookies Notice and our Interest-Based Ads Notice.</p>
                <button onClick={login} type="submit" class="login__signInButton">Login
                </button>
                <button onClick={loginGoogle} type="submit" class="login__signInButton">Login With Google
                </button>

            </form>
         
         
            </div> 
        </div>
        </center>      
    )
}
export default Login
