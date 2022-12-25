//import { async } from '@firebase/util';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

const Home = () => {

  let {user,logOut} = useUserAuth();
  
  const navigate=useNavigate();

  const handleLogOut = async(e) => {
    e.preventDefault();
     
    try 
     {
         await logOut();   
         localStorage.clear();
        navigate('/');
     }

     catch(err) 
     {
        console.log(err.message);
     }
  }


  return (
    <>
       <div className='p-4 box mt-3 text-center'>Hello Welcome <br /> {user && user.displayName}</div> 
       <div className='d-grid gap-2'> <Button variant='primary' onClick={handleLogOut}>Log Out</Button> </div>
    </>
  );
};

export default Home;