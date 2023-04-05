import React from 'react';
import iamge1 from '../asset/offerig/image1.png'
import iamge2 from '../asset/offerig/image2.png'
import iamge3 from '../asset/offerig/image3.png'
import { BsArrowRight } from 'react-icons/bs';


const PostRegistration = () => {
    return (
        <div className='grid gap-[46px] grid-cols-1 lg:grid-cols-3 '>
            <div className='card md:w-[455px] p-4'>
                <div className='text-start'>
                    <img className='w-[330px]' src={iamge1} alt="" />
                    <h2 className='cart-title text-xl'>Virtual Site Visit</h2>
                    <p className='cart-desc text-sm lg:text-lg text-justify'>It becomes imperative to observe your apartment or plot very closely before paying the booking amount. We are here to assist with an AI-enabled UAV system. You just need to choose your convenient date and hour slots. We will provide both live streaming and...</p>

                    <div className='card-button'>
                        <button className=' btn border  rounded-sm  outline outline-1 text-sm lg:text-lg font-sans font-semibold text-[#01244A] p-1 px-4 flex items-center gap-2'>Contract Now<span><BsArrowRight /></span></button>
                        <span>INR 3000/Project</span>
                    </div>
                </div>
            </div>
            <div className='card md:w-[455px] p-4'>
                <div >
                    <img src={iamge2} alt="" />
                    <h2 className='cart-title text-xl'>Khata Transfer</h2>
                    <p className='cart-desc text-sm lg:text-lg text-justify'>Various processes like Khata transfer and Bescom transfer after registration consume your precious time and money. Let us help you with those at nominal costs ensuring fast and transparent delivery.</p>

                    <div className='card-button'>
                        <button className=' btn border  rounded-sm  outline outline-1 text-sm lg:text-lg font-sans font-semibold text-[#01244A] p-1 px-4 flex items-center gap-2'>Contract Now<span><BsArrowRight /></span></button>
                    </div>
                </div>
            </div>
            {/* <div className='card md:w-[455px] p-4'>
                <div>
                    <img src={iamge3} alt="" />
                    <h2 className='cart-title text-xl'>Background verification</h2>
                    <p className='cart-desc text-sm lg:text-lg text-justify'>Assuring your capital is in safe hands, we provide detailed verification reports of the project and developer. These are customized and detailed...</p>

                    <div className='card-button'>
                        <button className=' btn border  rounded-sm  outline outline-1 text-sm lg:text-lg font-sans font-semibold text-[#01244A] p-1 px-4 flex items-center gap-2'>Contract Now<span><BsArrowRight /></span></button>
                    </div>
                </div>
            </div> */}

        </div>
    );
};

export default PostRegistration;