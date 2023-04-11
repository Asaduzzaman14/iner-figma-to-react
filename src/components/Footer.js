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
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>

                {/* company details for mobile */}

                <div className=' lg:hidden'>
                    <div className='grid gap-[20px]'>
                        <h2
                            onClick={() => setShow(!show)}
                            className=' text-[20px] font-medium cursor-pointer flex items-center justify-between'>
                            Company
                            <img className={`${show && 'rotate-180'}`} src={smArrow} alt="" />
                        </h2>

                        <div className={`opacity-60 grid gap-5 ${!show && 'hidden'}`}>
                            <p className='text-base '>Home</p>
                            <p className='text-base '>Our Offerings</p>
                            <p className='text-base '>Our Team</p>
                            <p className='text-base '>Contact Us</p>
                        </div>
                    </div>
                </div>

                {/* company details for laptop */}
                <div className='hidden lg:block'>
                    <div className=' grid gap-[20px]'>
                        <h2 className='font-bold text-[30px] '>Company</h2>

                        <div className=' grid gap-6'>
                            <Link to="/" className='text-[20px] '>Home</Link>
                            <Link to="/ourOferings">Our Offerings</Link>
                            <Link to="/ourTeam">Our Team</Link>
                            <Link to="/contactUs">Contact Us</Link>
                        </div>
                    </div>
                </div>


                {/*Useful Link for mobile */}

                <div className=' lg:hidden'>
                    <div className='grid gap-[20px]'>
                        <h2
                            onClick={() => setShowb(!showb)}
                            className=' text-[20px] font-medium cursor-pointer flex items-center justify-between'>
                            Useful Link
                            <img className={`${showb && 'rotate-180'}`} src={smArrow} alt="" />
                        </h2>

                        <div className={`opacity-60 grid gap-5 ${!showb && 'hidden'}`}>
                            <Link to="/blogs" className='text-[20px] opacity-60 '>Blogs</Link>
                            <Link to="/" className='text-[20px]'>FAQ’s</Link>
                        </div>
                    </div>
                </div>

                {/*Useful Link for laptop */}


                <div className='hidden lg:block'>
                    <div className='grid gap-6'>
                        <h2 className='font-bold text-[30px] '>Useful Link</h2>
                        <Link to="/blogs" className='text-[20px]'>Blogs</Link>
                        <Link to="/" className='text-[20px]'>FAQ’s</Link>
                    </div>

                </div>


                <div className='grid gap-[25px]'>
                    {/* <h2 className='font-bold text[28px] '>Useful Link</h2> */}
                    <div className='flex gap-[15px] lg:gap-5 content-center items-center'>
                        <span>
                            <img className='w-[26px] lg:w-10' src={email} alt="" />
                        </span>
                        <div className='text-xl'>
                            <p>Email: </p>
                            <Link to="mailto:support@inreglobal.com" className='lg:pt-2.5'>support@inreglobal.com </Link>
                        </div>
                    </div>

                    <div className='flex gap-[15px] lg:gap-5 content-center items-center'>
                        <span>
                            <img className='w-[26px] lg:w-10' src={phone} alt="" />
                        </span>
                        <div className='text-xl'>
                            <p className='text-[20px]'>Phone: </p>
                            <Link to="tel:+917019305889" className='lg:pt-2.5'>+91 | 7019305889 </Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className='flex flex-col-reverse lg:flex-row  lg:justify-between text-white lg:font-semibold pt-5 lg:pt-10'>
                <div>
                    <p className='pt-[35px] text-[#CCD3DC] lg:text-white lg:opacity-100  lg:text-lg opacity-60 lg:pt-auto text-start lg:text-center'>Copyright 2023. Designed by INRE Global</p>
                </div>
                <div className='flex flex-col lg:flex-row gap-3  '>
                    <Link to="http://linkedin.com/" className='flex cursor-pointer items-center gap-2'><span className='text-2xl'> <AiOutlineLinkedin /> </span> LinkedIn</Link>
                    <Link to="http://facebook.com/" className='flex items-center gap-2'><span className='text-2xl'> <AiOutlineFacebook /> </span> Facebook</Link>
                    <Link to={'http://twitter.com/'} className='flex items-center gap-2'><span className='text-2xl'> <AiOutlineTwitter /> </span> Twitter</Link>
                    <Link to={'http://instagram.com/'} className='flex items-center gap-2'><span className='text-2xl'> <IoLogoInstagram /> </span> Instagram</Link>

                </div>
            </div>


        </div>
    );
};

export default Footer;