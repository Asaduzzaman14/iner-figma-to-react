import React from 'react';
import bannerImage from '../../asset/blog/bannerImage.png'


const BlogBanner = () => {
    return (
        <div className=' bg-[#E6EAEE] '>
            <div className='py-[35px] px-3 px-lg:10 xl:px-[200px]'>
                <div className='height-[480px] bg-[#F2F4F6] p-4 md:p-6 lg:p-7 grid grid-cols-1 lg:grid-cols-2 items-center content-center  gap-4'>
                    <div>
                        <img className='w-[340px] lg:w-[731px] mx-auto' src={bannerImage} alt="" />
                    </div>
                    <div className='text-start grid content-center'>
                        <h2 className='font-sans text-sm md:text-xl text-[#1A1A1A] lg:text-3xl font-semibold pb-[10px] lg:pb-8'>The Most Expensive Bangalore Real Estate Sales For 2023</h2>
                        <p className='normal-text text-[#98A1B3] text-justify'>with several sales in the Bangalore eclipsing the Rs.200 cr mark. As the pandemic continued, the ultra-wealthy sought second (and third) homes to add to their portfolios and were willing to spend a fortune to make their residences more comfortable for extended periods.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogBanner;