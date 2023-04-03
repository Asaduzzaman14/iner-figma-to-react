import React from 'react';
import banner from '../asset/banner.png'

const BannerSection = () => {
    return (
        <div className='mt-[70px] text-center px-5 px-lg:10 xl:px-[200px]'>
            <div className='relative'>
                <img className='mx-auto' src={banner} alt="" />
                <div className='absolute  inset-0 flex  items-center left-[54px] text-xl text-start text-white lg:text-3xl'>
                    <p className=''>Making your <span className='text-[#FAFF00]'> real <br />
                        estate </span> purchase <br />
                        journey faster and <br className='' />
                        <p>transparent</p>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default BannerSection;