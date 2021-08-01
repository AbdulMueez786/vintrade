import React, { useState } from 'react'
import './Header.css';
import { Link, useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from './StateProvider';
import { auth } from './firebase';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Button, Navbar,Nav,Form,NavDropdown, InputGroup } from 'react-bootstrap';
import logo from './images/logo.png';
import LockOpenTwoToneIcon from '@material-ui/icons/LockOpenTwoTone';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
import { Avatar } from '@material-ui/core';
import Autocomplete from "./Autocomplete";
import { prettyDOM } from '@testing-library/react';
import HistoryIcon from '@material-ui/icons/History';
import HomeIcon from '@material-ui/icons/Home';



const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 10,
  
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  
function Header(props) {
 
  const [{basket,user}] = useStateValue();
  const classes = useStyles();
  const [age, setAge] = useState('');
  const history=useHistory();

  const a=()=>{
    //props.setoption(9);
    if(props!=null){
        //props.setoption(23);
    }
    //history.push("/");

  }
  const handleChange = (event) => {
    setAge(event.target.value);
  };
//{basket,user} is state but it is destructured to basket and user
const logout=()=>{
    if(user){
      auth.signOut();
    }
}
const login=()=>{
  if(!user){
    history.push('/Login');
  }
}
const Signup=()=>{
  if(!user){
    history.push('/signup');
  }
}
//const getUsername=(var size)=>{
 //  for(let i=0;i<size;i++){

//   }
//}


return (
<div>
    
<Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark" >
             <Link to="/"
             onClick={a}
             >
                <img className="header__logo" 
                     src={logo} 
                     alt="Not Loaded"/>
            </Link>
 
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
               <div className="header__search">
                
               <Autocomplete
               
               setoption={props.setoption}
            
        suggestions={[
          "SUSPENDER PANTS (1930s)",
          "NAVY WHITE PIN STRIPE (1930s)",
          "SHORT SLEEVE (1930s)",
          "PINK STRIPE PANTS (1930s)",
          "1931 FORD",
          "CHEVROLET CORVETTE",
          "DEVAUX 6-75",
          "FORD ROADSTER",
          "VICTORIAN GREEN BOOK",
          "VINTAGE BOOK SETS",
          "VICTORIAN OLD ROSE BOOK",
          "ANTIQUE BOOK SET STACK STACK"
        ]}
      />

      
                
                 <SearchIcon className="header__searchIcon"/>
                </div>
                         
                <Link to="/sellingproduct" className="header__link">
                    <div className="header__option">
                    <span className="header__optionlineone">SELL</span>
                    <span className="header__optionlinetwo">Product</span>
                    </div>
                    </Link>
                    <Link to="/order_history" className="header__link">
                    <div className="header__option">
                      <HistoryIcon/>
                      </div>
                    </Link>
                    
                    <Link to="/" className="header__link" onClick={a}>
                    <div className="header__option">
                    <HomeIcon/>
                    </div>
                    </Link>
                    <Link to="/checkout" className="header__link">
                        <div className="header__optionbasket">
                        <ShoppingBasketIcon/>
                    <span className="header__optionlinetwo header__basketcount">{basket?.length}</span>
                        </div>
                        
                         </Link>
                         {
                               user ?
                        <FormControl variant="filled" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-filled-label"><LockTwoToneIcon className="colo"/></InputLabel>
                                <Select
                                 labelId="demo-simple-select-filled-label"
                                 id="demo-simple-select-filled"
                                 value={age}
                                 onChange={handleChange}
                                >
                        <MenuItem onClick={logout} value={10} >LogOut</MenuItem>
                        </Select>
                        
                        </FormControl>
                        :
                        <FormControl variant="filled" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-filled-label"><LockOpenTwoToneIcon className="colo"/></InputLabel>
                                <Select
                                 labelId="demo-simple-select-filled-label"
                                 id="demo-simple-select-filled"
                                 value={age}
                                 onChange={handleChange}
                                >
          
                        <MenuItem onClick={login} value={10}>Login</MenuItem>
                   
                        <MenuItem onClick={Signup} value={20}>SignUp</MenuItem>
                       
                        </Select>

                        </FormControl>
}                
<Avatar src={user?.photoURL}></Avatar>

  </Navbar.Collapse>
</Navbar>
       
    {
        /*
        <nav className="header">
                <Link to="/">
                <img className="header__logo" 
                     src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                     alt="Not Loaded"/>
                </Link>
                <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
                </div>
          

                 <div className="header__Nav"> 
                    <Link to={!user && "/login"} className="header__link">
                     <div onClick={login} className="header__option">
                      <span className="header__optionlineone">Hello {user?.email}</span>
                    <span className="header__optionlinetwo">
                        {user ? 'Sign Out' :'Sign In'}
                    </span>
                    </div>
                    </Link>
                    <Link to="/" className="header__link">
                    <div className="header__option">
                    <span className="header__optionlineone">Return</span>
                    <span className="header__optionlinetwo">& Orders</span>
                    </div>
                    </Link>
                    <Link to="/" className="header__link">
                    <div className="header__option">
                    <span className="header__optionlineone">Your</span>
                    <span className="header__optionlinetwo">Prime</span>
                    </div>
                    </Link>
                    <Link to="/checkout" className="header__link">
                        <div className="header__optionbasket">
                        <ShoppingBasketIcon/>
                    <span className="header__optionlinetwo header__basketcount">{basket?.length}</span>
                        </div>
                    </Link>
                 </div>  
       
        </nav>
    */}
    </div>  
    )
}

export default Header
