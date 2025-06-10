import React from 'react'
import Title from '../components/Title';
import NewLetterBox from '../components/NewLetterBox'
import {assets} from '../assets/assets'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At Forever, we blend timeless elegance with modern trends to create a unique fashion experience tailored for every individual. Whether you're dressing for comfort, confidence, or a bold new look, our handpicked collections ensure you never have to compromise on quality or style. Every product we offer is crafted with care, aiming to bring out the best in you—today, tomorrow, and always.</p>
          <p>Driven by a passion for fashion and customer satisfaction, we’re more than just a brand—we’re a community. From seamless shopping experiences to responsive support, our mission is to make every step with Forever feel effortless and memorable. Join us as we redefine everyday fashion with simplicity, style, and a lasting impression.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At Forever, our mission is to inspire confidence and self-expression through timeless fashion. We are dedicated to delivering high-quality, stylish, and affordable clothing that empowers individuals to look and feel their best every day. With a customer-first approach, we strive to create a seamless and enjoyable shopping experience while constantly evolving to meet the changing needs of modern lifestyles.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We guarantee premium quality in every product to ensure your complete satisfaction.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Convenience:</b>
          <p className='text-gray-600'>Enjoy a hassle-free shopping experience designed for your ultimate convenience.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>We are committed to providing exceptional customer service that exceeds your expectations.</p>
        </div>
      </div>
      <NewLetterBox/>
    </div>
  )
}

export default About
