import React from 'react';
import logo from '../asset/4.png'
import { HiOutlineMail } from 'react-icons/hi'
import { BiPhoneCall } from 'react-icons/bi';
import { IoLogoInstagram } from 'react-icons/io';
import { AiOutlineFacebook, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='bg-[#002550] pb-6 px-5 px-lg:10 xl:px-[200px]'>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-3 text-white pt-[38px] text-start'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className='grid gap-[20px]'>
                    <h2 className='font-bold text[28px] '>Company</h2>
                    <p className='text-[20px]'>Home</p>
                    <p>Our Offerings</p>
                    <p>Our Team</p>
                    <p>Contact Us</p>
                </div>
                <div className=''>
                    <h2 className='font-bold text[28px] '>Useful Link</h2>
                    <p className='text-[20px] py-6'>Blogs</p>
                    <p className='text-[20px]'>FAQ’s</p>
                </div>
                <div className='grid gap-[25px]'>
                    <h2 className='font-bold text[28px] '>Useful Link</h2>
                    <div className='flex gap-2 content-center items-center'>
                        <span>
                            <HiOutlineMail />
                        </span>
                        <div>
                            <p className='text-[20px]'>Email: </p>
                            <p className='text-[20px]'>support@inreglobal.com </p>
                        </div>
                    </div>
                    <div className='flex gap-2 content-center items-center'>
                        <span>
                            <BiPhoneCall />
                        </span>
                        <div>
                            <p className='text-[20px]'>Phone: </p>
                            <p className='text-[20px]'>+91 | 7019305889 </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='flex flex-col-reverse lg:flex-row  lg:justify-between text-white font-semibold pt-10 pb-6'>
                <div>
                    <p>Copyright 2023. Designed by INRE Global</p>
                </div>
                <div className='flex gap-3  mx-auto lg:mx-0'>
                    <span className='flex items-center gap-2'><span> <AiOutlineLinkedin /> </span> LinkedIn</span>
                    <span className='flex items-center gap-2'><span> <AiOutlineFacebook /> </span> Facebook</span>
                    <span className='flex items-center gap-2'><span> <AiOutlineTwitter /> </span> Twitter</span>
                    <span className='flex items-center gap-2'><span> <IoLogoInstagram /> </span> Instagram</span>

                </div>
            </div>


        </div>
    );
};

export default Footer;