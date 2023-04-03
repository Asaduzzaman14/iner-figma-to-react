import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi'
import { BsArrowRight } from 'react-icons/bs'

import logo from '../asset/logo.png'

const Header = () => {

    let [open, setOpen] = useState(false);

    return (
        <>
            <div className=' shadow-md z-50 w-full  relative top-0 left-0'>
                <div className=' md:flex justify-between px-5 py-2 lg:px-20 items-center bg-white'>

                    <div className='relative lg:flex-basis-1/4 lg:py-2 '>
                        <a href='/' class=" ">
                            <img className='w-[68px] h-[63px] ' src={logo} alt="" />
                        </a>
                    </div>


                    {/* mobile icon  */}
                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-5 cursor-pointer lg:hidden'>
                        <ion-icon name={open ? 'close' : 'menu'}><BiMenuAltLeft /> </ion-icon>
                    </div>



                    <ul className={`  lg:flex  justify-between  absolute lg:static  lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0  transition-all duration-500 bg-white ease-in ${open ? 'top-[70px]' : 'top-[-290px]'}`}>

                        <div className="lg:flex  lg:justify-around">
                            <div className='lg:flex gap-6 lg:justify-between'>

                                <li className=' pb-[20px] lg:pt-[60px] relative'>
                                    <span className='font-semibold text-[#002550] text-lg'>Home</span>
                                    <div className=' border-2 rounded-full h-[2px] w-[50px] hidden lg:block border-[#002550] absolute -bottom-4'></div>
                                </li>

                                <li className=' pb-[20px] lg:pt-[60px]'>
                                    <span className='font-semibold text-[#002550] text-lg'>Our Offerings</span>
                                </li>
                                <li className=' pb-[20px] lg:pt-[60px]'>
                                    <span className='font-semibold text-[#002550] text-lg'>Our Team</span>
                                </li>
                                <li className=' pb-[20px] lg:pt-[60px]'>
                                    <span className='font-semibold text-[#002550] text-lg'>Contact Us</span>
                                </li>
                                <li className=' pb-[20px] lg:pt-[60px]'>
                                    <span className='font-semibold text-[#002550] text-lg'>Blogs</span>
                                </li>
                                <li className=' pb-[20px] lg:pt-[60px]'>
                                    <span className='font-semibold text-[#002550] text-lg'>Home</span>
                                </li>

                            </div>

                            <li className='lg:hidden pb-[20px] lg:pt-[60px]'>
                                <button className='btn border bg-[#002550] rounded-md font-semibold text-white text-lg p-2 px-6 flex justify-center items-center gap-2 mx-auto'>REGISTER <span><BsArrowRight /></span></button>
                            </li>
                            {/* <div className={`relative  group md:ml-3 text-xl md:my-0 py-4 transition-all duration-500 ease-in`}>
                                <buttom className='btn btn-danger bg-[#002550] text-white text-lg p-2 '>
                                    REGISTER
                                </buttom>
                            </div> */}

                        </div>



                    </ul>

                    <li className='hidden lg:block pb-[20px] lg:pt-[60px]'>
                        <button className='btn border bg-[#002550] rounded-md font-semibold text-white text-lg p-2 px-6 flex justify-center items-center gap-2 mx-auto'>REGISTER  <span><BsArrowRight /></span></button>
                    </li>

                </div >
            </div >
        </>
    );
};

export default Header;