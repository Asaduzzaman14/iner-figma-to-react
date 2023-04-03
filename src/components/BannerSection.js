import React from 'react';
import banner from '../asset/banner.png'

const BannerSection = () => {
    return (
        <div className='mt-[70px] text-center px-5 px-lg:10 xl:px-[200px]'>
            <div className='relative'>
                <img className='mx-auto' src={banner} alt="" />
                <p className='absolute top-10 items left-[54px] text-xl text-start text-white lg:text-[48px]'>Making your <span className='text-[#FAFF00]'> real <br />
                    estate </span> purchase <br />
                    journey faster and <br /> transparent</p>
            </div>

        </div>
    );
};

export default BannerSection;