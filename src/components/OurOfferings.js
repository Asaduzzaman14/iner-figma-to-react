import React from 'react';
import OfferingCard from './OfferingCard';

const OurOfferings = () => {
    return (
        <div className='px-5 px-lg:10 xl:px-[200px]'>
            <h2 className='title '>Our Offerings</h2>
            <p className='normal-text mt-5'>This whole purchase journey can be divided into three stages. For more details, Click Here</p>
            <div className='py-8'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-7'>
                    <div className='flex items-center justify-center gap-5 bg-[#F2F4F6] text-center py-5'>
                        <span className='number '>1</span>
                        <span className='normal-text text-xl font-normal'>Pre-Booking</span>
                    </div>
                    <div className='flex items-center justify-center gap-5 bg-[#CCD3DC] text-center py-5'>
                        <span className='number '>2</span>
                        <span className='normal-text text-xl font-normal'>Post-Booking & <br /> Pre-Registration</span>
                    </div>
                    <div className='flex items-center justify-center gap-5 bg-[#F2F4F6] text-center py-5'>
                        <span className='number'>3</span>
                        <span className='normal-text text-xl font-normal'>Post-Registration </span>
                    </div>

                </div>
            </div>


            {/*=================================
            =        Section OfferingCard     =
            ===================================*/}



            <OfferingCard />
        </div>
    );
};

export default OurOfferings;