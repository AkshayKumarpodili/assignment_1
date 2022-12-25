import React from 'react';
import Home from './components/Home';
import { Routes,Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import DefaultPage from './components/DefaultPage';
import "./App.css";
import {UserAuthContextProvider} from "./context/UserAuthContext";
import DefaultSignupPage from './components/signupdefault';
import Defaultforgotpassword from './components/Defaultforgotpassword';
import Verify from './components/VerifyEmail';

function App() {
  return (
    <Container >
    <Row>
      <Col>
        <UserAuthContextProvider>
          <Routes>
          <Route path="/home" element={<Home />} />
            <Route path="/" element={<DefaultPage />} />
            <Route path="/signup" element={<DefaultSignupPage />} />
            <Route path="/forgotpassword" element={<Defaultforgotpassword />} />
            <Route path="/verify" element={<Verify />} />
          </Routes>
        </UserAuthContextProvider>  
      </Col>
    </Row>
  </Container>

  )
}

export default App;