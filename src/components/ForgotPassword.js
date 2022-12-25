import React,{useState} from 'react';
import { Button, Alert } from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Link,useNavigate} from 'react-router-dom';
import {getDoc,doc} from 'firebase/firestore';
import {db} from '../firebase';

const ForgotPassword = () => {

    const [name, setName] = useState("");
    const [email,setEmail] = useState("");
    const [error,setError] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = async(e) => {
         e.preventDefault();

         try {
          const userid=localStorage.getItem("username");
          console.log("userid = ",userid);
          const docRef = doc(db,"alphax",name);
          const docSnap= await getDoc(docRef);
          localStorage.setItem("fpname",name); 

          if(docSnap.exists())
          {
              navigate('/home');
          }

          else
          {
              alert("You are not signup yet..")
          }

         } catch (error) {
           
           setError(error.message);
         }
    }



  return (
    <div>
    <div className="p-4 box">
      <h5 className="mb-3">Welcome !</h5>
      <h3 className='mt-5'>Forgot Password?</h3>
      <h6 className='mb-4'>Lorem Ipsum is simply</h6>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
      
         

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>User name</Form.Label>
          <Form.Control type="name" placeholder="Enter your username"  value={name}  onChange={(e) => setName(e.target.value)}/>
      </Form.Group>

      <div className="d-grid gap-2 mb-5">
            <Button variant="dark" type="Submit"> Login </Button>
          </div>
    </Form>

    <div className='ps-3' style={{ color: 'grey'}}> Already have an account? <Link to="/" style={{ color: 'black', fontWeight: 'bold', textDecoration: 'none'}} >Login</Link> </div>

    </div>
    </div>  
  )
}

export default ForgotPassword;