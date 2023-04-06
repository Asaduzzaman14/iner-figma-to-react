import React from 'react';
import iamge1 from '../asset/offerig/image1.png'
import iamge2 from '../asset/offerig/image2.png'
import iamge3 from '../asset/offerig/image3.png'
import { BsArrowRight } from 'react-icons/bs';
import rightArrow from '../asset/icon/rightArrow.png'

const PreBooking = () => {


    return (
        <div className='grid gap-[46px] grid-cols-1 lg:grid-cols-2 '>
            <div className='card w-[330px] md:w-[711px] p-4'>
                <div className='text-start'>
                    <img className='w-[663px] mx-auto' src={iamge1} alt="" />
                    <h2 className='cart-title text-xl'> Background Verification</h2>
                    <p className='cart-desc text-[#1A1A1A] opacity-60 text-sm lg:text-lg text-justify'>It is observed that people invest more than 10 years of savings in real estate. Hence, they are automatically conscious of the developer brand, past track record of the project delivered, the project progress, and the financial acumen of the developer. This is especially significant in the case of primary transactions. Here, InRe brings the proposition of “ Background verification of developers”. Based on our experience and industry...</p>

                    <div className='card-button'>
                        <button className=' btn border  rounded-sm  outline outline-1 text-sm lg:text-lg font-sans font-semibold text-[#01244A] p-2 px-4 flex items-center gap-2'>Contract Now <img src={rightArrow} alt="" /></button>
                        <span className='text-[#002550]'>INR 3000/Project</span>
                    </div>
                </div>
            </div>

            <div className='card w-[330px] md:w-[711px] p-4'>
                <div className='text-start'>
                    <img className='w-[663px] mx-auto' src={iamge2} alt="" />
                    <h2 className='cart-title text-xl'> Pre-booking Virtual site visit</h2>
                    <p className='cart-desc text-[#1A1A1A] opacity-60 text-sm lg:text-lg text-justify'>This requires multiple visits in multiple places deferring the buying process by more than 45 days. Also, it is difficult for people to compare two properties just based on visits. Here, InRe brings the proposition of “ Virtual visits at Pre- Booking stage”. We help the customer to visit the site with the help of AI enabled UAVs. This can replace the physical visit to the maximum possible extent by providing the live streaming feature. It also ...</p>

                    <div className='card-button'>
                        <button className=' btn border  rounded-sm  outline outline-1 text-sm lg:text-lg font-sans font-semibold text-[#01244A] p-2 px-4 flex items-center gap-2'>Contract Now <img src={rightArrow} alt="" /></button>
                        {/* <span>INR 3000/Project</span> */}
                    </div>
                </div>
            </div>


        </div>
    );
};

export default PreBooking;