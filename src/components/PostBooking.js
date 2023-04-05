import React from 'react';
import iamge1 from '../asset/offerig/image1.png'
import iamge2 from '../asset/offerig/image2.png'
import iamge3 from '../asset/offerig/image3.png'
import { BsArrowRight } from 'react-icons/bs';


const PostBooking = () => {
    return (
        <div className='grid gap-[46px] grid-cols-1 lg:grid-cols-2 '>
            <div className='card w-[360px] md:w-[455px] p-4'>
                <div className='text-start'>
                    <img className='' src={iamge1} alt="" />
                    <h2 className='cart-title text-xl'>Title Diligence</h2>
                    <p className='cart-desc text-sm lg:text-lg text-justify'>Title diligence is normally seen as an activity that requires the serious involvement of experienced legal consulates as the entire premise of ownership lies in title diligence and various compliances with housing norms. This activity also requires a lot of coordination between the legal consulates and developers which is a time-consuming affair without understanding the context, We using Ai enabled platform has eased out the process...</p>

                    <div className='card-button'>
                        <button className=' btn border  rounded-sm  outline outline-1 text-sm lg:text-lg font-sans font-semibold text-[#01244A] p-1 px-4 flex items-center gap-2'>Contract Now<span><BsArrowRight /></span></button>
                        <span>INR 3000/Project</span>
                    </div>
                </div>
            </div>

            <div className='card w-[360px] md:w-[455px] p-4'>
                <div >
                    <img src={iamge2} alt="" />
                    <h2 className='cart-title text-xl'>Sustainable Marketability Of Title</h2>
                    <p className='cart-desc text-sm lg:text-lg text-justify'>Real estate is still the most informal industry in India with certain malpractices. It is frequently observed that sellers create multiple rights on the same property which makes the purchase experience unpleasant. Here, we bring the proposition of regular checks on the government records like the encumbrance certificate of the particular property. This is further supplemented with a legal opinion report by the expert. This ensures that...</p>

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

export default PostBooking;