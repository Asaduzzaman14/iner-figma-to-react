import React from 'react';
import iamge1 from '../asset/offerig/postReg1.png'
import iamge2 from '../asset/offerig/postreg2.png'
import iamge3 from '../asset/offerig/postreg-4.png'
import rightArrow from '../asset/icon/rightArrow.png'
import { BsArrowRight } from 'react-icons/bs';

import Slider from "react-slick";


const PostRegistration = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        // nextArrow: {color:"#000"}
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 777,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },

        ],
    };
    return (
        // <div className='grid gap-[46px] grid-cols-1 lg:grid-cols-3 '>
        <Slider {...settings}>

            <div>
                <div className='card w-[360px] lg:w-[711px] p-4 lg:p-6'>
                    <div >
                        <img className='w-' src={iamge1} alt="" />
                        <h2 className='cart-title text-xl'>Khata Transfer</h2>
                        <p className='cart-desc text-[#1A1A1A] opacity-60 text-sm lg:text-lg text-justify'>Various processes like Khata transfer and Bescom transfer after registration consume your precious time and money. Let us help you with those at nominal costs ensuring fast and transparent delivery.</p>

                        <div className='card-button'>
                            <button className=' btn border  rounded-sm  outline outline-1 text-sm lg:text-lg font-sans font-semibold text-[#01244A] p-2 px-4 flex items-center gap-2'>Contract Now <img src={rightArrow} alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='card w-[360px] lg:w-[711px] p-4 lg:p-6'>
                    <div >
                        <img src={iamge2} alt="" />
                        <h2 className='cart-title text-xl'>Khata Transfer</h2>
                        <p className='cart-desc text-[#1A1A1A] opacity-60 text-sm lg:text-lg text-justify'>Various processes like Khata transfer and Bescom transfer after registration consume your precious time and money. Let us help you with those at nominal costs ensuring fast and transparent delivery.</p>

                        <div className='card-button'>
                            <button className=' btn border  rounded-sm  outline outline-1 text-sm lg:text-lg font-sans font-semibold text-[#01244A] p-2 px-4 flex items-center gap-2'>Contract Now <img src={rightArrow} alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='card w-[360px] lg:w-[711px] p-4 lg:p-6'>
                    <div >
                        <img src={iamge3} alt="" />
                        <h2 className='cart-title text-xl'>Khata Transfer</h2>
                        <p className='cart-desc text-[#1A1A1A] opacity-60 text-sm lg:text-lg text-justify'>Various processes like Khata transfer and Bescom transfer after registration consume your precious time and money. Let us help you with those at nominal costs ensuring fast and transparent delivery.</p>

                        <div className='card-button'>
                            <button className=' btn border  rounded-sm  outline outline-1 text-sm lg:text-lg font-sans font-semibold text-[#01244A] p-2 px-4 flex items-center gap-2'>Contract Now <img src={rightArrow} alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='card w-[360px] lg:w-[711px] p-4 lg:p-6'>
                    <div >
                        <img src={iamge2} alt="" />
                        <h2 className='cart-title text-xl'>Khata Transfer</h2>
                        <p className='cart-desc text-[#1A1A1A] opacity-60 text-sm lg:text-lg text-justify'>Various processes like Khata transfer and Bescom transfer after registration consume your precious time and money. Let us help you with those at nominal costs ensuring fast and transparent delivery.</p>

                        <div className='card-button'>
                            <button className=' btn border  rounded-sm  outline outline-1 text-sm lg:text-lg font-sans font-semibold text-[#01244A] p-2 px-4 flex items-center gap-2'>Contract Now <img src={rightArrow} alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>


        </Slider >

    );
};

export default PostRegistration;