import React from 'react';
import blogDetail1 from '../../asset/blog/blogDetail1.png'
import Blog from '../Blog';
import { Link } from 'react-router-dom';
import facbook from '../../asset/icon/facebook.png'
import twitter from '../../asset/icon/twitter.png'
import insta from '../../asset/icon/insta.png'
import linkedin from '../../asset/icon/linkedin.png'
import { BsArrowRight } from 'react-icons/bs';

// 

import blog1 from '../../asset/blog/blog2.png'
import blog2 from '../../asset/blog/blog2.png'
import blog3 from '../../asset/blog/blog3.png'



const BlogDetails = () => {
    return (
        <>
            <div className='mt-[70px] text-center px-5 px-lg:10 xl:px-[200px]'>
                <div className='text-start'>
                    <p className='text-xs lg:text-[20px] pb-5 text-[#1A1A1A]'>Guide for personal property Buying </p>
                    <img className='w-[360px] md:w-full lg:-w-fit xl-[1462px]' src={blogDetail1} alt="" />
                    <div className='flex justify-between  text-[#1A1A1A] py-[36px]'>
                        <span className='font-semibold '>By Brajesh </span>
                        <span className='font-semibold '>23 Mar 2023</span>
                    </div>

                    <div className='relative bg-[#F2F4F6] py-9 px-3'>
                        <div className=' border-2 rounded-full h-full w-[2px]  border-[#002550] absolute top-0 left-0'></div>
                        <p className='cart-desc text-[#1A1A1A] pb-0 opacity-60 text-justify lg:pl-10'>This whole purchase journey of real estate purchase can be divided into three broad stages. For more details, click here</p>
                    </div>

                </div>

                <div className='text-xs lg:text-2xl pb-8'>
                    <div className='text-start text-[#1A1A1A] opacity-60 pt-9'>
                        <p >The first one is the pre-booking stage. In this stage, you are evaluating various prospective properties, deciding on the budget and the size of the property to invest which meet the requirements and deliverables which is the final outcome from the builder side</p>
                        <p>The first one is the pre-booking stage. In this stage,
                            you are evaluating various prospective properties, deciding on
                            the budget and the size of the property to invest which meet
                            the requirements and deliverables which is the final outcome
                            from the builder side.</p>
                        <p className='pt-5'>Virtual visits at Pre- Booking stage:
                            This requires multiple visits in multiple places deferring
                            the buying process by more than 45 days. Also, it is difficult
                            for people to compare two properties just based on visits.</p>
                        <p>Here, InRe brings the proposition of “
                            Virtual visits at Pre- Booking stage”. We help the
                            customer to visit the site with the help of AI enabled
                            UAVs. This can replace the physical visit to the maximum
                            possible extent by providing the live streaming feature. It also makes the virtual visits
                            experience user friendly and interactive. Further, we provide
                            yu recordings of the visit which can ease the comparison between
                            two properties. Overall, your purchase process is faster and
                            transparent. </p>
                        <p className='py-5'>
                            Background verification of Project/ Developer:</p>
                        <p>It is observed that people invest more than 10 years of
                            savings in real estate. Hence, they are automatically conscious
                            about developer brand, past track record of project delivered
                            , the project progress and the financial acumen of the
                            developer. This is especially significant in the case of primary transactions. Here, InRe brings the proposition of “ Background verification of developers”.
                            Based on the experience and Industry expertise, we have identified the various factors that will assist in determining the trustworthiness
                            of project and developer. These details are collected from the most authentic source of information and we are providing details of sources
                            in the verification report. This makes your property buying experience more safer,faster and transparent. </p>
                        <p className='pt-5'>Post Booking- Pre registration:</p>
                        <p>The second stage of property buying is post booking but pre-registration, this is the stage when you have in-principal decided to purchase the property and have paid the
                            token advance but you are yet to get the title report from lawyer, pay the remaining amount, take the possession of the property and plan for the registration (i.e. transfer of ownership).
                        </p>
                        <p className='pt-5'>During this process you also wish to regularly check,</p>
                        <p>
                            if construction activities are going per schedule,
                        </p>

                        <p>is the construction quality up to mark before it sets for delivery etc</p>
                        <p>Compliance with Income tax, Capital gain savings on purchase of assets, implications on foreign remittances etc.</p>
                        <p>Hassle free registration especially when you are not in the city where the property is situated.</p>

                    </div>


                    <div>

                        <div className='py-16'>
                            <hr className=' text-[#CCD3DC]' />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <Link to={'_'}>
                                    <button className='w-[209px] btn border text-[#002550] font-semibold rounded-sm mt-4 outline outline-1  p-2 flex justify-center items-center gap-2 '>Previous Post</button>
                                </Link>
                                <Link to={'_'}>
                                    <button className='w-[175px] btn text-white bg-[#01244A] font-semibold rounded-sm mt-4 outline outline-1 p-2 flex justify-center items-center gap-2 '>Next post</button>
                                </Link>
                            </div>
                        </div>


                        <div className='text-start md:flex justify-between  pt-20'>
                            <div>
                                <h2 className='text-xl text-[#1A1A1A] '>Share this Post and Follow us on :</h2>
                                <p className='text-start text-[#1A1A1A] opacity-60 pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                <div className='flex text-start py-5 gap-4'>
                                    <Link to='www.facebook.com'></Link>
                                    <Link to='www.facebook.com'><img src={facbook} alt="" /></Link>
                                    <Link to='_#'><img src={twitter} alt="" /></Link>
                                    <Link to='_#'><img src={linkedin} alt="" /></Link>
                                </div>
                            </div>

                            <div>
                                <h2 className='text-xl text-[#1A1A1A] '>Contact Us For Regular Updates :</h2>
                                <Link to={'_'}>
                                    <button className='w-[209px] btn border text-[#002550] font-semibold rounded-sm mt-4 outline outline-1  p-2 flex justify-center items-center gap-2 '>Contact Now  <span><BsArrowRight /> </span> </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* blogs */}

            <div className='pt-5'>
                <div className='bg-[#F2F4F6] py-4'>
                    <div className='relative text-center'>
                        <h2 className='title pb-[35px]'>You May Aslo Like This</h2>
                        <div className=' border-2 rounded-full h-[2px] w-[220px]  inset-x-0 mx-auto border-[#002550] absolute bottom-4'></div>
                    </div>

                    <div className='px-5 px-lg:10 xl:px-[200px]'>
                        <div className='grid gap-[46px] grid-cols-1 lg:grid-cols-3 '>
                            <div className='card w-[360px] md:w-[355px] p-4 lg:p-6'>
                                <div className='text-start'>
                                    <img className='w-full' src={blog1} alt="" />
                                    <h2 className='pt-[30px] pb-7 text-[#1A1A1A] font-bold'>Real Estate, Analysis</h2>
                                    <div className='flex justify-between  text-[#1A1A1A] pb-[30px]'>
                                        <span className='font-semibold '>09 jun 2022</span>
                                        <span className='font-semibold'>By Admin</span>
                                    </div>

                                    <h2 className='pb-4 text-[28px] font-semibold'>Guide for personal property Buying </h2>

                                    <p className='cart-desc text-[#1A1A1A] opacity-60 text-justify'>Lorem ipsum dolor sit amet, consectetur adipis
                                        cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...</p>
                                </div>
                                <div className='card-button text-[#002550]'>
                                    <button className='w-full btn border text-[#002550] font-semibold rounded-sm mt-4 outline outline-1 text-lg p-2 flex justify-center items-center gap-2 '>View More<span><BsArrowRight className='text-2xl ' /></span></button>
                                </div>
                            </div>

                            <div className='card w-[360px] md:w-[355px] p-4 lg:p-6'>
                                <div className='text-start'>
                                    <img className='w-full' src={blog2} alt="" />
                                    <h2 className='pt-[30px] pb-7 text-[#1A1A1A] font-bold'>Real Estate, Analysis</h2>
                                    <div className='flex justify-between  text-[#1A1A1A] pb-[30px]'>
                                        <span className='font-semibold '>09 jun 2022</span>
                                        <span className='font-semibold'>By Admin</span>
                                    </div>

                                    <h2 className='pb-4 text-[28px] font-semibold'>Guide for personal property Buying </h2>

                                    <p className='cart-desc text-gray-500 text-justify'>Lorem ipsum dolor sit amet, consectetur adipis
                                        cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...</p>
                                </div>
                                <div className='card-button text-[#002550]'>
                                    <button className='w-full btn border text-[#002550] font-semibold rounded-sm mt-4 outline outline-1 text-lg p-2 flex justify-center items-center gap-2 '>View More<span><BsArrowRight className='text-2xl ' /></span></button>
                                </div>
                            </div>

                            <div className='card w-[360px] md:w-[355px] p-4 lg:p-6'>
                                <div className='text-start'>
                                    <img className='w-full' src={blog3} alt="" />
                                    <h2 className='pt-[30px] pb-7 text-[#1A1A1A] font-bold'>Real Estate, Analysis</h2>
                                    <div className='flex justify-between  text-[#1A1A1A] pb-[30px]'>
                                        <span className='font-semibold '>09 jun 2022</span>
                                        <span className='font-semibold'>By Admin</span>
                                    </div>

                                    <h2 className='pb-4 text-[28px]  font-semibold'>Guide for personal property Buying </h2>

                                    <p className='cart-desc text-gray-500 text-justify'>Lorem ipsum dolor sit amet, consectetur adipis
                                        cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...</p>
                                </div>
                                <div className='card-button text-[#002550]'>
                                    <button className='w-full btn border text-[#002550] font-semibold rounded-sm mt-4 outline outline-1 text-lg p-2 flex justify-center items-center gap-2 '>View More<span><BsArrowRight className='text-2xl ' /></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetails;