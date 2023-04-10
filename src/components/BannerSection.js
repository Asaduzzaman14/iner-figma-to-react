import React from 'react';
import banner from '../asset/banner.png'

const BannerSection = () => {
    return (
        <div className='lg:mt-[70px]  lg:px-10 xl:px-[200px]'>
            <div className='relative'>
                <img className='w-full' src={banner} alt="" />

                <div className='absolute capitalize inset-0 flex  items-center left-4 lg:left-[54px] text-sm lg:text-5xl text-start text-white '>
                    <p className='font-solway banner_title w-[25%] lg:w-[30%]'>
                        Making your <span className='text-[#FAFF00]'>real estate</span> purchase journey faster and transparent
                        {/* Making your <span className='text-[#FAFF00]'> real <br />
                            estate </span> purchase <br />
                        journey faster and <br className='' />
                        <p className='font-solway banner_title'>transparent</p> */}
                    </p>
                </div>
            </div>

        </div>
    );
};

export default BannerSection;
