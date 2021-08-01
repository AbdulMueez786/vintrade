import React from 'react'
import './ThankYouPage.css'
import logo from './images/ThankYou.png';
function ThankYouPage() {
    return (
    <div class="wrapper">
        <div data-reactroot>
          <div className="thankyoupage">
          <img className="thankyoupage_image"
                     src={logo} 
                     alt="Not Loaded"/>
          </div>
        </div>
      </div>
    )
}

export default ThankYouPage
