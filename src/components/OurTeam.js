import React from 'react';
import image1 from '../asset/ourTeam/image1.png'
import image2 from '../asset/ourTeam/image2.png'
import image3 from '../asset/ourTeam/image3.png'

const OurTeam = () => {
    return (
        <div className='px-5 px-lg:10 xl:px-[200px]'>
            <div className='relative text-center'>
                <h2 className='title py-[25px] lg:py-[35px]'>Our Team Members</h2>
                <div className=' border-2 rounded-full h-[2px] w-[103px]  inset-x-0 mx-auto border-[#002550] absolute bottom-4'></div>
            </div>

            <div>
                <div className='grid gap-[46px] grid-cols-1 lg:grid-cols-3 '>

                    <div className='card w-[360px] lg:w-[455px] p-4 lg:p-6'>
                        <div className='text-start'>
                            <img className='w-[330px] lg:w-[407px]' src={image1} alt="" />
                            <h2 className='pt-5 text-xl text-[#002550] font-semibold'>Brajesh Pathak</h2>
                            <div className='py-3'>
                                <span className='text-[#1A1A1A] opacity-40'>Co-Founder</span>
                            </div>
                            <p className='cart-desc text-sm lg:text-lg text-[#1A1A1A] opacity-60 text-justify'>A Chartered Accountant & Company Secretary, has over a decade of experience in managing realty focused venture capital funds, and was heading Azure Capital Advisors Private Limited. He has also been...</p>
                        </div>
                        <div className=''>
                            <p className='text-end pt-4 text-[#002550] font-normal text-[16px] opacity-60  cursor-pointer'> View More</p>
                        </div>
                    </div>

                    <div className='card w-[360px] lg:w-[455px] p-4 lg:p-6'>
                        <div className='text-start'>
                            <img className='w-[330px] lg:w-[407px]' src={image2} alt="" />
                            <h2 className='pt-5 text-xl text-[#002550] font-semibold'>Deepak Shukla</h2>
                            <div className='py-3'>
                                <span className='text-[#1A1A1A] opacity-40 pb-3'>Co-Founder</span>
                            </div>
                            <p className='cart-desc text-sm lg:text-lg text-[#1A1A1A] opacity-60 text-justify'>Deepak Shukla has completed his B.Tech (hons.) from the Indian Institute of Technology (IIT) Kharagpur and obtained an MBA from the Indian Institute of Management (IIM) Ahmedabad, India. He has an overall experience...</p>
                        </div>
                        <div>
                            <p className='text-end pt-4 text-[#002550] font-normal text-[16px] opacity-60 cursor-pointer'> View More</p>
                        </div>
                    </div>

                    <div className='card w-[360px] lg:w-[455px] p-4 lg:p-6'>
                        <div className='text-start'>
                            <img className='w-[330px] lg:w-[407px]' src={image3} alt="" />
                            <h2 className='pt-5 text-xl text-[#002550] font-semibold'>Alok Kumar Singh</h2>
                            <div className='py-3'>
                                <span className='text-[#1A1A1A] opacity-40 pb-3'>Advisor</span>
                            </div>
                            <p className='cart-desc text-sm lg:text-lg text-[#1A1A1A] opacity-60 text-justify'>Entrepreneur with pedigree from IIT-BHU and IIML, and more than 25 years of experience in management responsibilities in top tier companies including Infosys, Infosys BPO and Azure Capital. Co-Founded Azure Capital, a Real..</p>
                        </div>
                        <div>
                            <p className='text-end pt-4 text-[#002550] font-normal text-[16px] opacity-60 cursor-pointer'> View More</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OurTeam;