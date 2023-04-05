import React from 'react';
import About from '../components/About';
import image1 from '../asset/ourTeam/image1.png'
import image2 from '../asset/ourTeam/image2.png'
import image3 from '../asset/ourTeam/image3.png'

const OurTeampage = () => {
    return (
        <div>
            <About />

            <div className='px-5 px-lg:10 xl:px-[200px]'>

                <div className='pt-4 pb-9'>
                    <div className='grid lg:grid-flow-row gap-[46px] grid-cols-1 '>

                        <div className='card w-[360px] lg:w-full  p-4 lg:p-12'>
                            <div className=' text-start'>
                                <div className='flex items-center gap-4 lg:gap-10 pb-5'>
                                    <div>
                                        <img className='w-[87px] rounded-lg mx-auto' src={image1} alt="" />
                                    </div>
                                    <div>
                                        <h2 className=' text-xl text-[#002550] font-semibold'>Brajesh Pathak</h2>
                                        <span className='text-[#1A1A1A] opacity-40 pb-3'>Co-Founder</span>
                                    </div>

                                </div>
                                <p className='cart-desc text-sm lg:text-lg text-[#1A1A1A] opacity-60 text-justify'>A Chartered Accountant & Company Secretary, has over a decade of experience in managing realty focused venture capital funds, and was heading Azure Capital Advisors Private Limited. He has also been part of the managing committee and execution committee of Azure Capital (100 Crore realty focused funds), he has been part of the execution committee of various special purpose vehicle of investee companies for plotted development, villa projects, and apartments including development work & construction management. He is deeply involved in the... </p>
                            </div>
                        </div>

                        <div className='card w-[360px] lg:w-full  p-4 lg:p-12'>
                            <div className=' text-start'>
                                <div className='flex items-center gap-4 lg:gap-10 pb-5'>
                                    <div>
                                        <img className='w-[87px] rounded-lg mx-auto' src={image2} alt="" />
                                    </div>
                                    <div>
                                        <h2 className=' text-xl text-[#002550] font-semibold'>Deepak Shukla</h2>
                                        <span className='text-[#1A1A1A] opacity-40 pb-3'>Co-Founder</span>
                                    </div>

                                </div>
                                <p className='cart-desc text-sm lg:text-lg text-[#1A1A1A] opacity-60 text-justify'>Deepak Shukla has completed his B.Tech (hons.) from the Indian Institute of Technology (IIT) Kharagpur and obtained an MBA from the Indian Institute of Management (IIM) Ahmedabad, India. He has an overall experience of 11 years in firms like Credit Suisse, FICO, Alvarez and Marsal and The World Bank across geographies. In the past few years, his focus is in solving real world challenges using AI. He has engaged in development of voicebots for contact centres, automated training and validation for Autonomous vehicles applications.</p>
                            </div>
                        </div>

                        <div className='card w-[360px] lg:w-full  p-4 lg:p-12'>
                            <div className=' text-start'>
                                <div className='flex items-center gap-4 lg:gap-10 pb-5'>
                                    <div>
                                        <img className='w-[87px] rounded-lg mx-auto' src={image3} alt="" />
                                    </div>
                                    <div>
                                        <h2 className=' text-xl text-[#002550] font-semibold'>Alok Kumar Singh</h2>
                                        <span className='text-[#1A1A1A] opacity-40 pb-3'>Advisor</span>
                                    </div>
                                </div>
                                <p className='cart-desc text-sm lg:text-lg text-[#1A1A1A] opacity-60 text-justify'>Entrepreneur with pedigree from IIT-BHU and IIML, and more than 25 years of experience in management responsibilities in top tier companies including Infosys, Infosys BPO and Azure Capital. Co-Founded Azure Capital, a Real Estate Private Equity Fund and Azven Realty, a full service Real Estate Development firm in Bangalore. Set-up and managed a SEBI registered VC fund under Azure Capital. Actively involved in mentoring and advising seed and growth stage startups  at C-Level in Visioning, Governance, Strategy Development & Implementation, Growth... </p>
                            </div>
                        </div>


                        {/* <div className='card w-[360px] lg:w-[455px]  p-4 lg:p-6'>
                        <div className='text-start'>
                            <img className='w-[330px] lg:w-[407px] mx-auto' src={image2} alt="" />
                            <h2 className='pt-5 text-xl text-[#002550] font-semibold'>Deepak Shukla</h2>
                            <span className='text-[#1A1A1A] opacity-40 pb-3'>Co-Founder</span>
                            <p className='cart-desc text-sm lg:text-lg text-[#1A1A1A] opacity-60 text-justify'>Deepak Shukla has completed his B.Tech (hons.) from the Indian Institute of Technology (IIT) Kharagpur and obtained an MBA from the Indian Institute of Management (IIM) Ahmedabad, India. He has an overall experience...</p>
                        </div>
                        <div>
                            <p className='text-end py-4 text-[#002550] font-normal text-[16px] opacity-60 cursor-pointer'> View More</p>
                        </div>
                    </div>
                    <div className='card w-[360px] lg:w-[400px] xl:w-[455px] p-4 lg:p-6'>
                        <div className='text-start'>
                            <img className='w-[330px]' src={image3} alt="" />
                            <h2 className='pt-5 text-xl text-[#002550] font-semibold'>Alok Kumar Singh</h2>
                            <span className='text-[#1A1A1A] opacity-40 pb-3'>Advisor</span>
                            <p className='cart-desc text-sm lg:text-lg text-[#1A1A1A] opacity-60 text-justify'>Entrepreneur with pedigree from IIT-BHU and IIML, and more than 25 years of experience in management responsibilities in top tier companies including Infosys, Infosys BPO and Azure Capital. Co-Founded Azure Capital, a Real..</p>
                        </div>
                        <div>
                            <p className='text-end py-4 text-[#002550] font-normal text-[16px] opacity-60 cursor-pointer'> View More</p>
                        </div>
                    </div> */}



                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeampage;