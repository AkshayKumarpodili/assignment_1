import React, { useState } from 'react';
import '../cssfiles/sidebar.css';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { SideBardata } from './SidebarData';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

function Home() {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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

  const fpname=localStorage.getItem("fpname");


  return (
    <>


   <div className='w-75 m-5 m-auto shadow rounded text-center'>

          <h4 className='mt-3'> Hello, {user && user.displayName} {fpname}</h4>
        <h3 className='font'>Check More Options by clicking on 'Launch' button</h3>

        
        
        <Button variant="dark m-2" type='submit' onClick={handleShow}> Launch</Button> 
        <Button variant='primary' onClick={handleLogOut}>Log Out</Button> 
    </div>

    
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <ul>
            {SideBardata.map((val,key)=> {
               return <li className='no-bullets mb-4 w-100' key={key} onClick={() => {window.location.pathname = val.link}}>
                  
                  <div>{val.Icon}   {val.title}</div>
                  
               </li>
            })}
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Home;