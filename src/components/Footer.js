import React, { useState } from 'react';
import logo from '../asset/4.png'
import { HiOutlineMail } from 'react-icons/hi'
import { BiPhoneCall } from 'react-icons/bi';
import { IoLogoInstagram } from 'react-icons/io';
import { AiOutlineFacebook, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import email from '../asset/icon/email.png'
import phone from '../asset/icon/phone.png'
import smArrow from '../asset/icon/smallarrow.png'
import { Link } from 'react-router-dom';


const Footer = () => {
    const [show, setShow] = useState(false)
    const [showb, setShowb] = useState(false)

    return (
        <div className='bg-[#002550] pb-6 px-[30px] px-lg:10 xl:px-[200px]'>

            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-3 text-white pt-[38px] text-start'>
                <div className='pb-[60px]'>
                    <img src={logo} alt="" />
                </div>

                <div className=' lg:hidden'>
                    <div className='grid gap-[20px]'>
                        <h2
                            onClick={() => setShow(!show, 1)}
                            className=' text[20px] cursor-pointer flex items-center justify-between'>Company <img className={`${show && 'rotate-180'}`} src={smArrow} alt="" /></h2>

                        <div className={`opacity-60 grid gap-5 ${!show && 'hidden'}`}>
                            <p className='text-[20px] '>Home</p>
                            <p>Our Offerings</p>
                            <p>Our Team</p>
                            <p>Contact Us</p>
                        </div>
                    </div>
                </div>

                <div className='hidden lg:block'>
                    <div className=' grid gap-[20px]'>
                        <h2 className='font-bold text[28px] '>Company</h2>

                        <div className=' grid gap-5'>
                            <p className='text-[20px] '>Home</p>
                            <p>Our Offerings</p>
                            <p>Our Team</p>
                            <p>Contact Us</p>
                        </div>
                    </div>
                </div>

                <div className=' lg:hidden'>
                    <div className='grid gap-[20px]'>
                        <h2
                            onClick={() => setShowb(!showb)}
                            className=' text[20px] cursor-pointer flex items-center justify-between'>
                            Useful Link
                            <img className={`${showb && 'rotate-180'}`} src={smArrow} alt="" />
                        </h2>

                        <div className={`opacity-60 grid gap-5 ${!showb && 'hidden'}`}>
                            <p className='text-[20px] opacity-60 '>Blogs</p>
                            <p className='text-[20px]'>FAQ’s</p>
                        </div>
                    </div>
                </div>

                <div className='hidden lg:block'>
                    <h2 className='font-bold text[28px] '>Useful Link</h2>
                    <p className='text-[20px] py-5'>Blogs</p>
                    <p className='text-[20px]'>FAQ’s</p>
                </div>


                <div className='grid gap-[25px]'>
                    {/* <h2 className='font-bold text[28px] '>Useful Link</h2> */}
                    <div className='flex gap-2 content-center items-center'>
                        <span>
                            <img className='w-[26px] lg:w-10' src={email} alt="" />
                        </span>
                        <div>
                            <p className='text-[20px]'>Email: </p>
                            <p className='text-[20px]'>support@inreglobal.com </p>
                        </div>
                    </div>
                    <div className='flex gap-2 content-center items-center'>
                        <span>
                            <img className='w-[26px] lg:w-10' src={phone} alt="" />
                        </span>
                        <div>
                            <p className='text-[20px]'>Phone: </p>
                            <p className='text-[20px]'>+91 | 7019305889 </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='flex flex-col-reverse lg:flex-row  lg:justify-between text-white lg:font-semibold pt-5 lg:pt-10'>
                <div>
                    <p className='pt-[35px] text-gray-400 lg:pt-auto text-start lg:text-center'>Copyright 2023. Designed by INRE Global</p>
                </div>
                <div className='flex flex-col lg:flex-row gap-3  '>
                    <Link to="http://linkedin.com/" className='flex cursor-pointer items-center gap-2'><span className='text-2xl'> <AiOutlineLinkedin /> </span> LinkedIn</Link>
                    <Link to="http://facebook.com/" className='flex items-center gap-2'><span className='text-2xl'> <AiOutlineFacebook /> </span> Facebook</Link>
                    <Link to={'http://twitter.com/'} className='flex items-center gap-2'><span className='text-2xl'> <AiOutlineTwitter /> </span> Twitter</Link>
                    <Link to={'http://twitter.com/'} className='flex items-center gap-2'><span className='text-2xl'> <IoLogoInstagram /> </span> Instagram</Link>

                </div>
            </div>


        </div>
    );
};

export default Footer;