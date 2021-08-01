import React, { useState } from 'react'
import './SellingProduct.css'
import { InputGroup,FormControl,DropdownButton,ProgressBar,Dropdown} from 'react-bootstrap';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function SellingProduct() {
  const now = 100;
  const history =useHistory();  

  const [Image,setImage]=useState(null);
  const [progress,setprogress]=useState(0);
  const [caption,setcaption]=useState('');
  const handleChange=(e)=>{ 
      if(e.target.files[0]){
         setImage(e.target.files[0]);
       }
  }

  
/*
   <div className="sellingproduct_progessBar">
           
           <ProgressBar animated now={now} label={`${now}%`}/>

           </div>
*/
  return (
        <div className="sellingproduct">
          <div className="text_style">
            <h3 style={{fontWeight:'bold'}}>Sell Your Product</h3>
            </div>   


           <div className="sellingproduct_productName">
           <InputGroup className="mb-3">
                <FormControl
                  placeholder="Enter Product Name"
                  aria-label="Enter Product Name"
                  aria-describedby="basic-addon2"
                />
            </InputGroup>
           </div>

          <div className="sellingproduct_category">
          <InputGroup className="mb-3">
              <FormControl
                placeholder="Enter Category"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
             <DropdownButton
              as={InputGroup.Append}
              variant="outline-secondary"
              title="Dropdown"
              id="input-group-dropdown-2"
              >
              <Dropdown.Item href="#">Clothes</Dropdown.Item>
              <Dropdown.Item href="#">Cars</Dropdown.Item>
              <Dropdown.Item href="#">Books</Dropdown.Item>
 
            </DropdownButton>
          </InputGroup> 
          </div> 
          <div className="sellingproduct_price">
          <InputGroup className="mb-3">
             <FormControl
              placeholder="Product Price"
              aria-label="Amount (to the nearest dollar)"
             />
             <InputGroup.Append>
              <InputGroup.Text>$</InputGroup.Text>
              <InputGroup.Text>0.00</InputGroup.Text>
              </InputGroup.Append>
             </InputGroup>
            </div>         
           <div className="sellingproduct_phoneNo">
           <InputGroup className="mb-3">
                <FormControl
                  placeholder="Seller Phone Number"
                  aria-label="Enter Product Name"
                  aria-describedby="basic-addon2"
                />
            </InputGroup>
           </div>
           <div className="sellingproduct_upload">
             <h5>please select the product image</h5>
             <input name="sjsjj"  type="file"  onChange={handleChange}
                 className="sellingproduct_button" />
              </div>
           <div>

          
           </div>
        
           <div className="sellingproduct_submit"> 
           <Button onClick={e=>history.push('/successfullyDone')} variant="contained" color="primary" disableElevation>
               Submit
           </Button>
           </div>

           

        </div>
    )
}

export default SellingProduct
