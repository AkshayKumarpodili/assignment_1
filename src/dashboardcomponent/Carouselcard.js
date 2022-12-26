import React from 'react'
import './Carouselcard.css'
import { IoInformationCircleSharp } from "react-icons/io5";
function Carouselcard() {
    return (
        <div className='ccard mx-auto'>
            <div className='d-flex justify-content-between'>
                <p className='ms-4 mt-3 fw-bold'>Products by revenue</p>
                <i className='me-4 mt-3'><IoInformationCircleSharp/></i>
            </div>
            <hr className='solid' />
            <div className='p-4'>
                <div className='d-flex'>
                    <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71jG+e7roXL._SL1500_.jpg" className='cimage' alt="" />
                    <p className='mt-4 ms-2'>2023 Apple Macbook Air...</p>
                </div>
                <hr className='solid' />
                <div className='d-flex'>
                    <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51g12kaYslL._SL1125_.jpg" className='cimage' alt="" />
                    <p className='mt-4 ms-2'>Acer Aspires...</p>
                </div>
                <hr className='solid' />
                <div className='d-flex'>
                    <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61Rxxi-P9lL._SL1200_.jpg" className='cimage' alt="" />
                    <p className='mt-4 ms-2'>2022 GigaByte Areo...</p>
                </div>
                <hr className='solid' />
                <div className='d-flex'>
                    <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61mWU77xHGL._SL1280_.jpg" className='cimage' alt="" />
                    <p className='mt-4 ms-2'>Dell XPS 15 9500...</p>
                </div>
            </div>
        </div>
    )
}

export default Carouselcard