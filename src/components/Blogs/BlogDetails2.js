import React from 'react';
import blogDetail1 from '../../asset/blog/blogDetail1.png'
import Blog from '../Blog';
import { Link, useNavigate } from 'react-router-dom';
import facbook from '../../asset/icon/facebook.png'
import twitter from '../../asset/icon/twitter.png'
import instagram from '../../asset/icon/Instagram.png'
import linkedin from '../../asset/icon/linkedin.png'
import { BsArrowRight } from 'react-icons/bs';

// 

import blog1 from '../../asset/blog/blog2.png'
import blog2 from '../../asset/blog/blog2.png'
import blog3 from '../../asset/blog/blog3.png'
import leftArrow from '../../asset/icon/leftArrow.png'
import shortLeftArrow from '../../asset/icon/shortArrow.png'
import whiteshortLeftArrow from '../../asset/icon/shortArrowWhite.png'
import user from '../../asset/icon/user.png'
import date from '../../asset/icon/date.png'



const BlogDetails2 = () => {
    const naviagate = useNavigate()



    return (
        <>
            <div className='mt-5 lg:mt-[70px] text-center px-5 px-lg:10 xl:px-[200px]'>
                <div className='text-start'>
                    <p className='text-xs lg:text-[20px] pb-5 text-[#1A1A1A] flex gap-4'>
                        <div onClick={() => naviagate(-1)}>
                            <img src={leftArrow} alt="" />
                        </div>
                        Guide for personal property Buying
                    </p>

                    <img className='w-[360px] md:w-fi lg:w-fit xl:w-[1462px] mx-auto' src={blogDetail1} alt="" />

                    <div className='flex justify-between lg:justify-normal lg:gap-40  text-[#1A1A1A] py-[36px]'>
                        <span className='font-semibold flex items-center gap-2'> <img className='h-3' src={user} alt="" /> By Brajesh </span>
                        <span className='font-semibold flex items-center gap-2 '><img className='h-5' src={date} alt="" /> 23 Mar 2023</span>
                    </div>

                    <div className='relative bg-[#F2F4F6] py-3 px-5 lg:px-12 lg:py-4'>
                        <div className=' border-2 rounded-full h-full w-[2px]  border-[#002550] absolute top-0 left-0'></div>
                        <p className='cart-desc text-sm lg:text-base  text-[#1A1A1A] pb-0 opacity-60 text-justify'>This whole purchase journey of real estate purchase can be divided into three broad stages. For more details, click here</p>
                    </div>

                </div>

                <div className='text-base lg:text-2xl '>

                    <div className='text-start text-[#1A1A1A] opacity-60 pt-5 lg:pt-9'>
                        <h2 className="text-lg py-20">This is New blog 2</h2>
                    </div>


                    <div>

                        <div className='py-[70px] hidden lg:block'>
                            <hr className=' text-[#CCD3DC]' />
                        </div>

                        <div className='hidden lg:block'>
                            <div className='flex justify-between'>
                                <Link to={'/'}>
                                    <button className=' px-[32px] py-4 btn border text-[#002550] font-semibold rounded-md mt-4 outline outline-1  p-2 flex justify-center items-center gap-2 '> <img src={shortLeftArrow} alt="" /> Previous Post</button>
                                </Link>
                                <Link to={'/'}>
                                    <button className='px-[32px] py-4 btn text-white bg-[#01244A] font-semibold rounded-md mt-4 outline outline-1 p-2 flex justify-center items-center gap-2 '>Next post <img className='ms-2' src={whiteshortLeftArrow} alt="" /></button>
                                </Link>
                            </div>
                        </div>


                        <div className='text-start md:grid grid-cols-2 gap-5 lg:gap-16 justify-between pt-7 lg:pt-20'>
                            <div>
                                <h2 className='text-2xl font-semibold lg:text-[28px] text-[#1A1A1A] '>Share this Post and Follow us on :</h2>
                                <p className='text-start text-[#1A1A1A] opacity-60 pt-3.5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                <div className='flex text-start py-5 lg:py-10 gap-4'>
                                    <Link to='www.facebook.com'><img className='w-12' src={instagram} alt="" /></Link>
                                    <Link to='www.facebook.com'><img className='w-12' src={facbook} alt="" /></Link>
                                    <Link to='/'><img className='w-12' src={twitter} alt="" /></Link>
                                    <Link to='/'><img className='w-12' src={linkedin} alt="" /></Link>
                                </div>
                            </div>

                            <div>
                                <h2 className='text-2xl font-semibold lg:text-[28px] text-[#1A1A1A] '>Contact Us For Regular Updates :</h2>
                                <div className='hidden lg:block'>
                                    <Link to={'/'}>
                                        <button className='px-[32px] py-4  btn border text-[#002550] font-semibold rounded-sm mt-4 outline outline-1 flex justify-center items-center gap-2 '>Contact Now  <span><BsArrowRight /> </span> </button>
                                    </Link>
                                </div>
                                <Link to={'/'}>
                                    <button className='w-[209px] text-lg lg:hidden btn border text-[#002550] font-semibold rounded-sm mt-4 outline outline-1  p-2 flex justify-center items-center gap-2 '>Register Now <span><BsArrowRight /> </span> </button>
                                </Link>

                            </div>
                        </div>
                    </div>

                </div>
            </div>


            {/* ************************* */}
            {/* blogs */}
            {/* ************************* */}

            <div className='pt-5'>
                <div className='bg-[#F2F4F6] py-6 lg:py-[57px]'>
                    <div className='relative text-center'>
                        <h2 className='title pb-[35px]'>You May Aslo Like This</h2>
                        <div className=' border-2 rounded-full h-[2px] w-[220px]  inset-x-0 mx-auto border-[#002550] absolute bottom-4'></div>
                    </div>

                    <div className='px-5 px-lg:10 xl:px-[200px]'>
                        <div className='grid gap-[46px] grid-cols-1 lg:grid-cols-3 '>
                            <div className='card w-[360px]  lg:w-[455px] p-4 lg:p-6'>
                                <div className='text-start'>
                                    <img className='w-full' src={blog1} alt="" />
                                    <h2 className='pt-[30px] pb-7 text-[#1A1A1A] font-bold'>Real Estate, Analysis</h2>
                                    <div className='flex justify-between  text-[#1A1A1A] pb-[30px]'>
                                        <span className='font-semibold '>09 jun 2022</span>
                                        <span className='font-semibold'>By Admin</span>
                                    </div>

                                    <h2 className='pb-4 text-xl lg:text-[28px] font-semibold'>Guide for personal property Buying </h2>

                                    <p className='cart-desc text-sm lg:text-base text-[#1A1A1A] opacity-60 text-justify'>Lorem ipsum dolor sit amet, consectetur adipis
                                        cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...</p>
                                </div>
                                <div className='card-button text-[#002550]'>
                                    <button className='w-full lg:w-fit py-4 px-8 btn border text-[#002550] font-semibold rounded-sm mt-4 outline outline-1 text-lg p-2 flex justify-center items-center gap-2 '>View More<span><BsArrowRight className='text-2xl ' /></span></button>
                                </div>
                            </div>

                            <div className='card w-[360px]  lg:w-[455px] p-4 lg:p-6'>
                                <div className='text-start'>
                                    <img className='w-full' src={blog2} alt="" />
                                    <h2 className='pt-[30px] pb-7 text-[#1A1A1A] font-bold'>Real Estate, Analysis</h2>
                                    <div className='flex justify-between  text-[#1A1A1A] pb-[30px]'>
                                        <span className='font-semibold '>09 jun 2022</span>
                                        <span className='font-semibold'>By Admin</span>
                                    </div>

                                    <h2 className='pb-4 text-xl lg:text-[28px] font-semibold'>Guide for personal property Buying </h2>

                                    <p className='cart-desc text-sm lg:text-base text-[#1A1A1A] opacity-60 text-justify'>Lorem ipsum dolor sit amet, consectetur adipis
                                        cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...</p>
                                </div>
                                <div className='card-button text-[#002550]'>
                                    <button className='w-full lg:w-fit py-4 px-8 btn border text-[#002550] font-semibold rounded-sm mt-4 outline outline-1 text-lg p-2 flex justify-center items-center gap-2 '>View More<span><BsArrowRight className='text-2xl ' /></span></button>
                                </div>
                            </div>

                            <div className='card w-[360px]  lg:w-[455px] p-4 lg:p-6'>
                                <div className='text-start'>
                                    <img className='w-full' src={blog3} alt="" />
                                    <h2 className='pt-[30px] pb-7 text-[#1A1A1A] font-bold'>Real Estate, Analysis</h2>
                                    <div className='flex justify-between  text-[#1A1A1A] pb-[30px]'>
                                        <span className='font-semibold '>09 jun 2022</span>
                                        <span className='font-semibold'>By Admin</span>
                                    </div>

                                    <h2 className='pb-4 text-xl lg:text-[28px]  font-semibold'>Guide for personal property Buying </h2>

                                    <p className='cart-desc text-sm lg:text-base text-[#1A1A1A] opacity-60 text-justify'>Lorem ipsum dolor sit amet, consectetur adipis
                                        cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...</p>
                                </div>
                                <div className='card-button text-[#002550]'>
                                    <button className='w-full lg:w-fit py-4 px-8  btn border text-[#002550] font-semibold rounded-sm mt-4 outline outline-1 text-lg p-2 flex justify-center items-center gap-2 '>View More<span><BsArrowRight className='text-2xl ' /></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetails2;