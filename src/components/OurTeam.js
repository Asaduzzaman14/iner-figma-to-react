import React from 'react';
import image1 from '../asset/ourTeam/image1.png'
import image2 from '../asset/ourTeam/image2.png'
import image3 from '../asset/ourTeam/image3.png'

const OurTeam = () => {
    return (
        <div className='px-5 px-lg:10 xl:px-[200px]'>
            <h2 className='title pb-[35px]'>Our Team Members</h2>

            <div>
                <div className='grid gap-[46px] grid-cols-1 lg:grid-cols-3 '>
                    <div className='card md:w-[455px] p-4'>
                        <div className='text-start'>
                            <img className='w-full' src={image1} alt="" />
                            <h2 className='pt-5 text-[28px] font-semibold'>Brajesh Pathak</h2>
                            <p className='cart-desc text-[#1A1A1A] text-justify'>A Chartered Accountant & Company Secretary, has over a decade of experience in managing realty focused venture capital funds, and was heading Azure Capital Advisors Private Limited. He has also been...</p>
                        </div>
                        <div>
                            <p className='text-end py-4 text-[#002550] font-normal text-[16px] cursor-pointer'> View More</p>
                        </div>
                    </div>
                    <div className='card md:w-[455px] p-4'>
                        <div >
                            <img className='w-full' src={image2} alt="" />
                            <h2 className='pt-5 text-[28px] font-semibold'>Deepak Shukla</h2>
                            <p className='cart-desc text-[#1A1A1A] text-justify'>Deepak Shukla has completed his B.Tech (hons.) from the Indian Institute of Technology (IIT) Kharagpur and obtained an MBA from the Indian Institute of Management (IIM) Ahmedabad, India. He has an overall experience...</p>
                        </div>
                        <div>
                            <p className='text-end py-4 text-[#002550] font-normal text-[16px] cursor-pointer'> View More</p>
                        </div>
                    </div>

                    <div className='card md:w-[455px] p-4'>
                        <div>
                            <img className='w-full' src={image3} alt="" />
                            <h2 className='pt-5 text-[28px] font-semibold'>Alok Kumar Singh</h2>
                            <p className='cart-desc text-[#1A1A1A] text-justify'>Entrepreneur with pedigree from IIT-BHU and IIML, and more than 25 years of experience in management responsibilities in top tier companies including Infosys, Infosys BPO and Azure Capital. Co-Founded Azure Capital, a Real</p>
                        </div>
                        <div>
                            <p className='text-end py-4 text-[#002550] font-normal text-[16px] cursor-pointer'> View More</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OurTeam;