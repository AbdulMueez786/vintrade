//import React, { useEffect } from 'react'
//import { useHistory } from 'react-router-dom';
//import './ProductDescription.css';
import StateContext, { useStateValue } from './StateProvider';

import React from 'react';
import './App.css';
import Colors from './components/Colors'
import DetailsThumb from './components/DetailsThumb';
import './ProductDescription.css';
import { initializeApp } from 'firebase';

class ProductDescription extends React.Component{
  
  static contextType = StateContext;
  static data=this.content;
  constructor(){
    super();
    //this.contextType = StateContext
    //console.log(this.context);
    //this.componentDidMount();
  } 



  state = {
     
    products: [
      {
        "_id": "1",
        "title": "",
        "src": [
            "",
            "",
            "",
            ""
          ],
        "description": "SDS",
        "price": 0,
        "rating":0.0,
        "colors":["red","black","crimson","teal"],
        "count": 1
      }
    ],
    index: 0
  };

  myRef = React.createRef();
initialize=()=>{
  this.state.products[0].title=this.context[0].selectedProduct.title;
  this.state.products[0].src[0]=this.context[0].selectedProduct.image1;
  this.state.products[0].src[1]=this.context[0].selectedProduct.image2;
  this.state.products[0].src[2]=this.context[0].selectedProduct.image3;
  this.state.products[0].src[3]=this.context[0].selectedProduct.image4;
  this.state.products[0].description=this.context[0].selectedProduct.productDetail;
  this.state.products[0].price=this.context[0].selectedProduct.price;
  this.state.products[0].rating=this.context[0].selectedProduct.rating;
}
  handleTab = index =>{
   console.log(this.context[0].selectedProduct);
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount(){
 
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }
  

  render(){
    const {products, index} = this.state;
    return(

      <div className="productdescription">
 
        {
          this.initialize(),
          products.map(item =>(
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  <span>${item.price}</span>
                </div>
                <Colors colors={item.colors} />

                <p>{item.description}</p>
                <div className="product__rating">
                  {
                      Array(item.rating) 
                      .fill()
                      .map((_)=>(<p>⭐</p>))
                  }
             </div>

                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                <button className="cart">Add to cart</button>

              </div>
            </div>
          ))
        }
      </div>
    );
  };
}

export default ProductDescription;



/*function ProductDescription() {
    const [{selectedProduct}] = useStateValue();
    const history=useHistory();
    useEffect(()=>{
      if(selectedProduct==null){
        history.push("/");
      }   
},[selectedProduct]);
    return (
        <div>
          <div className="details">
              <div className="big-img">
                  <img src={selectedProduct?.image}/>
              </div>
               <div className="box">
                    <div className="row">
                        <h2>{selectedProduct?.title}</h2>
                          <span>${selectedProduct?.price}</span>
                    </div>
                    <div className="colors">
                  
                    </div>
                    <p>Product Detail : {selectedProduct?.productDetail}</p>
                    <p>Product SellerDetail : {selectedProduct?.productSellerdetail}</p>
                    <div className="thumb">
                           <img src={selectedProduct?.image} alt="Not Loaded"></img>
                    </div>
                    <button className="cart">Add to cart</button>
               </div>
            </div>  
                  
            <p>Rating : {selectedProduct?.rating}</p>
   
          
        
        
        </div>
    )
}

export default ProductDescription
*/