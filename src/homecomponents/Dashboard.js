import React from 'react';
import { Row,Col,Container, Button } from 'react-bootstrap';
import { IoStatsChartSharp} from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { BiFilm } from "react-icons/bi";
import '../cssfiles/secondrow.css';
import {FcApproval,FcDown} from 'react-icons/fc';
import { CiViewBoard } from "react-icons/ci";
import Dropdown from 'react-bootstrap/Dropdown';




function Dashboard() {
  return (
   <div>
      <div className='start'>
         <p className='ps-1 fs-2'><FcApproval/> Updated at May 4, 2022 </p>
       <div className='forthrow'> 
         <h2>General dashBoard</h2>
          <Dropdown className='buttonTwo'>
              <Dropdown.Toggle id="dropdown-basic">May 31,22 - june 29,22</Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
                <button className='buttonTwo m-2'>Download <FcDown/></button>
                <button className='buttonTwo m-2'>Share Board <CiViewBoard/></button>
        </div>        

         
      </div>





    <Row className='secondrow '>
      
      <Col className='column-one'>
                    <h4>Since joined</h4>
                    <h2 className='mt-3'>Performance <br/>Overview</h2>
      </Col>

      <Col className='column-two'>
            <Row className='icon-one fs-2 d-flex'><IoStatsChartSharp/>   <h6 className='mt-2'>Total Revenues</h6></Row>
            <Row><h1>$125,24</h1></Row>                      
      </Col>


      <Col className='column-two'>
            <Row className='icon-one fs-2 d-flex'><FaShoppingCart/>   <h6 className='mt-3'>Total item Orders</h6></Row>
            <Row><h1>20,234</h1></Row>                      
      </Col>

    </Row>





    <Row className='thirdrow'>
      
      <Row><h6>Top placements</h6></Row>
      <Col className='column-two'>         
        <img src='https://m.media-amazon.com/images/I/61nywCQX6kS._SX679_.jpg' className='image-one' alt='image' /> 
        <Row><h6>$17,500</h6></Row>
        <Row><h5>Vaccum Cleaners</h5></Row>     
      </Col>

      <Col className='column-one'>
            <Row>
              <Col className='column-two'>
                 <Row className='icon-one fs-2 d-flex'><BiFilm/></Row>
                 <Row><h6>$17,500</h6></Row>
                <Row><h5>Portable...</h5></Row>
              </Col>

              <Col className='column-two'>
                 <Row className='icon-one fs-2 d-flex'><BiFilm/></Row>
                 <Row><h6>$17,500</h6></Row>
                <Row><h5>Portable...</h5></Row>
              </Col>              
            </Row>

            <Row className='mt-3'>
              <Col className='column-two'>
                 <Row className='icon-one fs-2 d-flex'><BiFilm/></Row>
                 <Row><h6>$17,500</h6></Row>
                <Row><h5>Portable...</h5></Row>
              </Col>

              <Col className='column-two'>
                 <Row className='icon-one fs-2 d-flex'><BiFilm/></Row>
                 <Row><h6>$17,500</h6></Row>
                <Row><h5>Portable...</h5></Row>
              </Col>              
            </Row>              
      </Col>
    </Row>  



    <Row className='lastrow'>
    <h1 className='text-light fw-bold'>Learn more <br />about<i className='fw-lighter'> Commission <br />and Exposure</i></h1>
            <p className='text-light fw-light'>Subscribe to get exclusive deals, item recommendations,<br />and shopping inspirations right into your inbox</p>
        <p className='text-light'>Read more</p>
    </Row>




</div>
  )
}

export default Dashboard