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
import Dashboard from './homecomponents/Dashboard'
import CatalogManagement from './homecomponents/CatalogMangement'
import ProductCatalog from './homecomponents/ProductCatalog'
import Feedback from './homecomponents/Feedback'
import Coupons from './homecomponents/Coupons';

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

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/coupons" element={<Coupons />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/management" element={<CatalogManagement />} />
            <Route path="/catalog" element={<ProductCatalog />} />
          </Routes>
        </UserAuthContextProvider>  
      </Col>
    </Row>
  </Container>

  )
}

export default App;