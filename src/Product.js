import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import './Product.css';
import {useStateValue} from './StateProvider';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import styled from "@emotion/styled/macro";
import { sizing } from '@material-ui/system';

function Product({id,title,price,rating,image,image1,image2,image3,image4,productDetail,option}) {
    const history=useHistory(); 

    const [count, setCount] = useState(0);   
    
    const [flag,setFlag]=useState(false);

    const [{basket,selectedProduct},dispatch] = useStateValue();
    
    useEffect( () => {
         
      if(option==1){
           Discription();
         }else{

         }
    }, 
    [option]);
  

    const removeFromBasket =()=>{
      if(count==1){
        setFlag(false);
      }  
      if(count!=0){
      setCount(count - 1);
    
    }
      //remove item from basket
      dispatch({
          type:"REMOVE_FROM_BASKET",
          id:id,
      });

  }


    const Discription=()=>{
        
        dispatch({
            type:'SET_SELECTED_PRODUCT',
            selectedProduct:{
            id:id,
            title:title,
            image:image,
            image1:image1,
            image2:image2,
            image3:image3,
            image4:image4,
            price:price,
            rating:rating,
            productDetail:productDetail,
            productSellerdetail:"HJDHDH",
            }
        })
        
        history.push('/productdescription');

    }




    const addToBasket=()=>{
     //add item to basket
     setFlag(true);
     setCount(count + 1);
     dispatch({
         type:'ADD_TO_BASKET',
         item:{
          id:id,
         title:title,
         image:image1,
         price:price,
         rating:rating
         }
     })
    };

    
  const Hover = styled.div({
    opacity: 0,
    transition: "opacity 350ms ease",
  });
  
  const DisplayOver = styled.div({
    height: "100%",
    left: "0",
    position: "absolute",
    top: "0",
    width: "100%",
    zIndex: 2,
    transition: "background-color 350ms ease",
    backgroundColor: "transparent",
    padding: "20px 20px 0 20px",
    boxSizing: "border-box",
  });
  
  const BigTitle = styled.h2({
    textTransform: "uppercase",
    fontFamily: "Helvetica",
  });
  
  const SubTitle = styled.h4({
    fontFamily: "Helvetica",
    transform: "translate3d(0,50px,0)",
    transition: "transform 350ms ease",
  });
  
  const Paragraph = styled.p({
    transform: "translate3d(0,50px,0)",
    transition: "transform 350ms ease",
  });
  
  const Background = styled.div({
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "#FFF",
    position: "relative",
    width: "300px",
    height: "250px",
    cursor: "pointer",
    
   // backgroundImage: `url(${imgpath})`,
    [`:hover ${DisplayOver}`]: {
      backgroundColor: "rgba(0,0,0,.5)",
    },
    [`:hover ${SubTitle}, :hover ${Paragraph}`]: {
      transform: "translate3d(0,0,0)",
    },
    [`:hover ${Hover}`]: {
      opacity: 1,
    },
  });
  
  const CTA = styled.a({
    position: "absolute",
    bottom: "20px",
    left: "20px",
  });

  const add={
    //addquantity(1);
  }
    return (
       
        <Card  collapseOnSelect expand="lg" style={{ margin: '10px',backgroundColor:'transparent',border:'none' }}>
        <div className="product">
             <div style={{backgroundImage:`url(${image})`, width: "300px",height: "250px",margin:"10px"}}>
        <Background >
          <DisplayOver>
          
            <Hover>
            <BigTitle>{title}</BigTitle>
            <p className="product__price">
                 Price : <small>$</small>
                    <strong>{price}</strong>
             </p>  
             <div className="product__rating">
                  {
                      Array(rating)
                      .fill()
                      .map((_)=>(<p>⭐</p>))
                  }
             </div>
              <Paragraph>
                More description about this really ...
              </Paragraph>
              
              <CTA onClick={Discription}>View More +</CTA>
            </Hover>
          </DisplayOver>
          
        </Background>
        
        </div>                    
           
           {
             (flag==false) &&
             <Button color="inherit"  variant="contained"  disableElevation onClick={addToBasket}
               startIcon={<ShoppingCartIcon/>}
              >
                 Add to Cart
             </Button>
              }  
            
            { 
            (flag==true) &&
            <div>
            
            
             <button className="button2" onClick={removeFromBasket}>-</button>
                    {count}
             <button className="button3" onClick={addToBasket}>+</button>
             </div>
             }

         </div>
      </Card>


      /*  
       <div className="product">
            <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                   <strong>{price}</strong>
            </p>
            <div className="product__rating">
                 {
                     Array(rating)
                     .fill()
                     .map((_)=>(<p>⭐</p>))
                 }
            </div>
         
            </div>
            <img src={image} alt="Not loaded"/>
            <Button color="inherit"  variant="contained"  disableElevation onClick={addToBasket}
            startIcon={<ShoppingCartIcon/>}
            >
                Add to Basket
            </Button>
       
        </div>*/
    )
}

export default Product
