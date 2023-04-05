import React from 'react';
import blog1 from '../..//asset/blog/blogDetail1.png'



const BlogDetails = () => {
    return (
        <div className='mt-[70px] text-center px-5 px-lg:10 xl:px-[200px]'>
            <div className='text-start'>
                <p className='text-xs lg:text-[20px] pb-5 text-[#1A1A1A]'>Guide for personal property Buying </p>
                <img className='w-[360px] md:w-full lg:-w-fit xl-[1462px]' src={blog1} alt="" />
                <div className='flex justify-between  text-[#1A1A1A] pb-[30px]'>
                    <span className='font-semibold'>By Admin</span>
                    <span className='font-semibold '>09 jun 2022</span>
                </div>
                <div className='bg-[#F2F4F6] py-9 px-3'>
                    <p className='cart-desc text-[#1A1A1A] opacity-60 text-justify'>This whole purchase journey of real estate purchase can be divided into three broad stages. For more details, click here</p>
                </div>

            </div>

            <div className='text-xs lg:text-sm pb-8'>
                <div className='text-start text-[#1A1A1A] opacity-60 pt-9'>
                    <p >The first one is the pre-booking stage. In this stage, you are evaluating various prospective properties, deciding on the budget and the size of the property to invest which meet the requirements and deliverables which is the final outcome from the builder side</p>
                    <p>The first one is the pre-booking stage. In this stage,
                        you are evaluating various prospective properties, deciding on
                        the budget and the size of the property to invest which meet
                        the requirements and deliverables which is the final outcome
                        from the builder side.</p>
                    <p>Virtual visits at Pre- Booking stage:
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
                    <p>
                        Background verification of Project/ Developer:</p>
                    <p>It is observed that people invest more than 10 years of
                        savings in real estate. Hence, they are automatically conscious
                        about developer brand, past track record of project delivered
                        , the project progress and the financial acumen of the
                        developer. This is especially significant in the case of primary transactions. Here, InRe brings the proposition of “ Background verification of developers”.
                        Based on the experience and Industry expertise, we have identified the various factors that will assist in determining the trustworthiness
                        of project and developer. These details are collected from the most authentic source of information and we are providing details of sources
                        in the verification report. This makes your property buying experience more safer,faster and transparent. </p>
                    <p>Post Booking- Pre registration:</p>
                    <p>The second stage of property buying is post booking but pre-registration, this is the stage when you have in-principal decided to purchase the property and have paid the
                        token advance but you are yet to get the title report from lawyer, pay the remaining amount, take the possession of the property and plan for the registration (i.e. transfer of ownership).
                    </p>
                    <p>During this process you also wish to regularly check,</p>
                    <p>
                        if construction activities are going per schedule,
                    </p>

                    <p>is the construction quality up to mark before it sets for delivery etc</p>
                    <p>Compliance with Income tax, Capital gain savings on purchase of assets, implications on foreign remittances etc.</p>
                    <p>Hassle free registration especially when you are not in the city where the property is situated.</p>

                </div>
                </div>
  </div>
      );
};

export default BlogDetails;