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

import blog1 from '../../asset/blog/blog1.png'
import blog2 from '../../asset/blog/blog2.png'
import blog3 from '../../asset/blog/blog3.png'
import leftArrow from '../../asset/icon/leftArrow.png'
import shortLeftArrow from '../../asset/icon/shortArrow.png'
import whiteshortLeftArrow from '../../asset/icon/shortArrowWhite.png'
import user from '../../asset/icon/user.png'
import date from '../../asset/icon/date.png'
import OtherBlogs from './OtherBlogs';



const BlogDetails3 = () => {
    const naviagate = useNavigate()



    return (
        <>
            <div className='mt-5 lg:mt-[70px] text-center px-5 px-lg:10 xl:px-[200px]'>
                <div className='text-start'>
                    <p className='text-xs lg:text-[20px] pb-5 text-[#1A1A1A] flex gap-4'>
                        <div onClick={() => naviagate(-1)}>
                            <img src={leftArrow} alt="" />
                        </div>
                        Real estate Purchase Challenges in Bengaluru

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

                        <p>There are several problems that buyers may face during real estate purchase in Bengaluru. Some of the major problems are as follows:
                        </p>

                        <div className=' pt-3 flex gap-4'>
                            <span>1. </span>
                            <p> Fraud detection:  AI-powered fraud detection systems are being used in the Indian real estate sector to prevent fraud and ensure the security of transactions. Fraud detection systems use machine learning algorithms to analyze data and identify patterns that indicate fraudulent activity. These systems can be used to detect fraud in property listings, title transfers, and financial transactions.
                                To conclude,  AI technology is transforming the Indian real estate sector and has made it more efficient, accurate, and cost-effective through various applications
                            </p>
                        </div>
                        <div className=' pt-3 flex gap-4'>
                            <span>2. </span>
                            <p>Lack of transparency: The lack of transparency in the real estate sector is another major problem in Bengaluru. This can include issues such as ambiguous pricing, hidden charges, and incomplete documentation. According to a survey by Magicbricks, nearly 60% of buyers in Bengaluru face issues related to transparency in the real estate sector.</p>
                        </div>
                        <div className=' pt-3 flex gap-4'>
                            <span>3. </span>
                            <p>High prices: Bengaluru has one of the highest property prices in India, which can make it difficult for buyers to find affordable housing. According to a report by Knight Frank, the average property prices in Bengaluru increased by 2.8% in Q1 2021, making it one of the top-performing cities in terms of price growth</p>
                        </div>

                        <div className=' pt-3 flex gap-4'>
                            <span>4. </span>
                            <p>Legal issues: Buyers in Bengaluru can face legal issues related to property ownership and documentation. For example, the Karnataka High Court has issued orders to stop the registration of properties that are built on lake beds or other ecologically sensitive areas. This can create legal hurdles for buyers who have already invested in such properties.</p>
                        </div>


                        {/* <div className=' pt-3 flex gap-4'>
                            <span>0. </span>
                            <p></p>
                        </div> */}
                        <div className='pt-5'>
                            <p>Sources:</p>

                            <div className=' pt-3 flex gap-4'>
                                <span>1. </span>
                                <p>ANAROCK Property Consultants report: <Link to='https://www.anarock.com/blog/homebuyers-beware-60-bangalore-real-estate-projects-delayed/'>https://www.anarock.com/blog/homebuyers-beware-60-bangalore-real-estate-projects-delayed/</Link> </p>
                            </div>
                            <div className=' pt-3 flex gap-4'>
                                <span>2. </span>
                                <p>Magicbricks survey: <Link to='https://economictimes.indiatimes.com/wealth/real-estate/majority-of-homebuyers-face-transparency-issues-in-bengaluru-magicbricks-survey/articleshow/64887577.cms/'>https://economictimes.indiatimes.com/wealth/real-estate/majority-of-homebuyers-face-transparency-issues-in-bengaluru-magicbricks-survey/articleshow/64887577.cms</Link> </p>
                            </div>

                            <div className=' pt-3 flex gap-4'>
                                <span>3. </span>
                                <p>Knight Frank report:  <Link to='https://www.knightfrank.co.in/research/article/2021-03-03-bangalore-office-market-report-q4-2020/ '>https://www.knightfrank.co.in/research/article/2021-03-03-bangalore-office-market-report-q4-2020</Link> </p>
                            </div>

                            <div className=' pt-3 flex gap-4'>
                                <span>4. </span>
                                <p>Karnataka High Court orders:  <Link to='https://timesofindia.indiatimes.com/city/bengaluru/high-court-orders-registration-department-not-to-register-properties-built-on-lake-beds/articleshow/73110843.cms/'>https://timesofindia.indiatimes.com/city/bengaluru/high-court-orders-registration-department-not-to-register-properties-built-on-lake-beds/articleshow/73110843.cms</Link> </p>
                            </div>

                        </div>



                    </div>


                    <div>

                        <div className='py-[70px] hidden lg:block'>
                            <hr className=' text-[#CCD3DC]' />
                        </div>

                        <div className='hidden lg:block'>
                            <div className='flex justify-between'>
                                <Link to={'/artificial-Intelligence-in-Realty'}>
                                    <button className=' px-[32px] py-4 btn border text-[#002550] font-semibold rounded-md mt-4 outline outline-1  p-2 flex justify-center items-center gap-2 '> <img src={shortLeftArrow} alt="" /> Previous Post</button>
                                </Link>
                                <Link to={'/blogDetails'}>
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

            <OtherBlogs />
        </>
    );
};

export default BlogDetails3;