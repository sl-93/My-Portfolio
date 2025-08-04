import Image from 'next/image'
import { assets } from '@/assets/assets'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col
    items-center justify-center gap-4'>
        <div>
            <Image src={assets.profile_img} alt='' className='rounded-full w-32' />
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3
            font-ovo'>Hi! I'm Saeed Lotfi <Image src={assets.hand_icon} alt='' 
            className='w-6' /></h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>
            Data Scientist and AI Developer.</h1>
        <p className='max-w-2xl mx-auto font-ovo'>
            I am a science enthusiast and an AI developer with
            hands-on experience in designing and deploying 
            machine learning and deep learning systems.
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href='#contact' className='px-10 py-3 bordr border-white rounded-full bg-black/80
            text-white flex items-center gap-2  hover:bg-black duration-500'
            >Contact Me! <Image src={assets.right_arrow_white} 
            alt='' className='w-4' /></a>
            <a href='/SaeedLotfi.pdf' download 
            className='px-10 py-3 border rounded-full border-gray-500 flex
            items-center gap-2 hover:bg-lightHover duration-500'>My Resume <Image src={assets.download_icon} 
            alt='' className='w-4' /></a>
        </div>
    </div>
  )
}

export default Header