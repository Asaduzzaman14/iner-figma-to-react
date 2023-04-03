import React from 'react';
import banner from '../asset/banner.png'

const BannerSection = () => {
    return (
        <div className='mt-[70px] text-center px-5 px-lg:10 xl:px-[200px]'>
            <img className='mx-auto' src={banner} alt="" />
        </div>
    );
};

export default BannerSection;