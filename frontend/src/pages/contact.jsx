import React from 'react'
import Title from '../components/title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/newsletterbox'

const contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t  '>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10  mb-28">
        <img src={assets.contact_img} alt="" className=" w-full md:max-w-[480px] " />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className='text-gray-500 '>54709 williams station <br /> suite 350 , woshington , USA </p>
          <p className='text-gray-500 '>Tel: (450) 555-023 <br />email : forever@gmail.com </p>
          <p className='text-gray-500 font-semibold text-xl '>Careers at Forevers </p>
          <p className='text-gray-500 '> Learn more about our terms and job openings</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 '>Explore Jobs</button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default contact