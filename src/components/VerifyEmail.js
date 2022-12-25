import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { auth } from '../firebase';
//import {toast} from 'react-toastify';


function Verify() {

    const navigate=useNavigate();

    const handleClick = () => {
      
      if(auth.currentUser.emailVerified === true)
      {
         navigate('/');
      }

      else{
       alert("Email Not Verified")
      }
        
    }

          
  return (
    <div className='w-75 m-5 m-auto shadow rounded text-center'>
        <h3 className='font'>Check Your Mail And Refresh Page</h3>
        <Button variant="dark m-2" type='submit' onClick={handleClick}>Continue...</Button> 
    </div>
  )
}

export default Verify;