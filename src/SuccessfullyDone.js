import React from 'react'
import './SuccessfullyDone.css'
import logo from './images/done.png';
function SuccessfullyDone() {
    return (
        <div className="successfullyDone">
             <img className="successfullyDone_image"
                     src={logo} 
                     alt="Not Loaded"/>
             <h3 style={{fontWeight:'bold'}}>successfully uploaded</h3>       
        </div>
    )
}

export default SuccessfullyDone
