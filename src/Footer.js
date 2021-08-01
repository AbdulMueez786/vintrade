import React from 'react'
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';
import fb from './images/facebook.png'; // gives image path
import twit from './images/twitter.png';
import inst from './images/instagram.png';
import {useStateValue} from './StateProvider';
import { auth } from './firebase';
function Footer() {
  const [{basket,user}] = useStateValue();
  const login=()=>{
    if(user){
      auth.signOut();
    }
}
  return (
    <div className="footer">
        <footer class="page-footer font-small stylish-color-dark pt-4">
        
   
          <div class="container text-center text-md-left">
        
    
            <div class="row">
        
   
              <div class="col-md-4 mx-auto">
        
                <h5 class="font-weight-bold text-uppercase mt-3 mb-4">VinTrade</h5>
                <p>
VinTrade.com, Inc., is an American multinational technology company based in Seattle, Washington.VinTrade  focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence..</p>
        
              </div>
   
        
              <hr class="clearfix w-100 d-md-none"/>
     
              <div class="col-md-2 mx-auto">
        

                <h5 class="font-weight-bold text-uppercase mt-3 mb-4">ADDRESS</h5>
        
                <ul class="list-unstyled">
                  <li className="footer_Address">
                    <HomeIcon/>
                    <p>G11/3 Street 100</p>
                  </li>
                  <li className="footer_email">
                    <EmailIcon/>
                    <p>i170123@nu.edu.pk</p>
                  </li>
                  <li className="footer_phone">
                    <PhoneIcon/>
                    <p>0303-4799116</p>
                  </li>

                </ul>
        
              </div>
          
        
              <hr class="clearfix w-100 d-md-none"/>

              <div class="col-md-2 mx-auto">
        
       
                <h5 class="font-weight-bold text-uppercase mt-3 mb-4 mx-auto">FOLLOW US ON</h5>
        
                <ul className="ICON_list" >
                  <li>
                      <img className="icon" src={fb}/>
                  </li>
                  <li>
                  <img className="icon" src={inst}/>
                  </li>
                  <li>
                  <img className="icon" src={twit}/>
                  </li>
                </ul>
        
              </div>
      
          
        
        
          
       
        
            </div>
         
        
          </div>


        
    
          <ul class="list-unstyled list-inline text-center py-2">
            <li class="list-inline-item">
              <h5 class="mb-1">Register for free</h5>
            </li>
            <li class="list-inline-item">
              <button onClick={login} class="btn btn-danger btn-rounded">Sign up!</button>
            </li>
          </ul>
     
          <hr/>
        

          


          <div class="footer-copyright text-center py-3">© VinTrade.com
            <a href="https://mdbootstrap.com/"> Abdul Mueez</a>
          </div>
          
        
        </footer>
        </div>
               
    )
}

export default Footer
