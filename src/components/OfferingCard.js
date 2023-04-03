import React from 'react';
import iamge1 from '../asset/offerig/image1.png'
import iamge2 from '../asset/offerig/image2.png'
import iamge3 from '../asset/offerig/image3.png'

const OfferingCard = () => {
    return (
        <div className='grid gap-[46px] grid-cols-1 lg:grid-cols-3 '>
            <div className='card md:w-[455px] p-4'>
                <div className='text-start'>
                    <img src={iamge1} alt="" />
                    <h2 className='cart-title'>Background verification</h2>
                    <p className='cart-desc'>Assuring your capital is in safe hands, we provide detailed verification reports of the project and developer. These are customized and detailed...</p>

                    <div className='card-button'>
                        <button className=' btn border  rounded-sm  outline outline-1  md:text-lg p-1 px-4'>Contract Now</button>
                        <span>INR 3000/Project</span>
                    </div>
                </div>
            </div>
            <div className='card md:w-[455px] p-4'>
                <div >
                    <img src={iamge2} alt="" />
                    <h2 className='cart-title'>Background verification</h2>
                    <p className='cart-desc'>Assuring your capital is in safe hands, we provide detailed verification reports of the project and developer. These are customized and detailed...</p>

                    <div className='card-button'>
                        <button className=' btn border  rounded-sm  outline outline-1  md:text-lg p-1 px-4'>Contract Now</button>
                    </div>
                </div>
            </div>
            <div className='card md:w-[455px] p-4'>
                <div>
                    <img src={iamge3} alt="" />
                    <h2 className='cart-title'>Background verification</h2>
                    <p className='cart-desc'>Assuring your capital is in safe hands, we provide detailed verification reports of the project and developer. These are customized and detailed...</p>

                    <div className='card-button'>
                        <button className=' btn border  rounded-sm  outline outline-1  md:text-lg p-1 px-4'>Contract Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OfferingCard;
