import React from 'react'
import Title from '../components/title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/newsletterbox'

const about = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-2 border-none ">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-26">
        <img src={assets.about_img} className='w-full md:max-w-[450px] ' alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-1/2 text-gray-600">
        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, ipsa.</p>
        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsam accusamus. Temporibus, vero! Explicabo autem sunt et qui magnam enim voluptates quisquam a earum? Vero repellendus ex dolore totam doloremque?</p>
        <b className=" text-gray-600"> our mission</b>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem impedit quod esse commodi doloribus nisi eos. Libero quis maxime blanditiis.
        </p>
        </div>
      </div>
      <div className="text-4xl py-4 ">
        <Title  text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className="flex flex-col md:flex-row text-sm gap-5">
        <div className="border px-10 md:px-15 py-8 sm:py-20 flex flex-col gap-5  ">
          <b>Quality Assurance</b>
          <p className="text-gray-600 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, modi?</p>
        </div>
        <div className="border px-10 md:px-15 py-8 sm:py-20 flex flex-col gap-5  ">
          <b>Quality Assurance</b>
          <p className="text-gray-600 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, modi?</p>
        </div>
        <div className="border px-10 md:px-15 py-8 sm:py-20 flex flex-col gap-5  ">
          <b>Quality Assurance</b>
          <p className="text-gray-600 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, modi?</p>
        </div>
      </div>
    <div className="mt-15">
      <NewsLetterBox />
    </div>
    </div>
  )
}

export default about