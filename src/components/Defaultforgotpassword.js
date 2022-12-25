import React from 'react';
import loginsvg from '../images/3.svg';
import '../cssfiles/defaultpage.css';
import ForgotPassword from './ForgotPassword';

function Defaultforgotpassword() {
  return (
    <div className='d-flex justify-content-between '>
     
      
    <div className='qwer '>
        

        <div>
          <div className='row '>
            <ForgotPassword/>
          </div>
            
        </div>
      </div>
      <img className="er" src={loginsvg} />
  </div>
  )
}

export default Defaultforgotpassword