import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'

const About = () => {
  return (
    <div id="about" className='w-full px-[12%] scroll-mt-20 py-5'>
        {/* <h4 className='text-center mb-2 text-lg font-ovo'>
            Introduction</h4> */}
        <h2 className='text-center text-5xl font-ovo'>
            About Me</h2>
        
        <div className='flex w-full flex-col lg:flex-row items-center
        gap-10 my-2'>
            <div className='w-full sm:w-80 rounded-3xl'>
                <p className='mb-1 max-w-2xl font-ovo text-justify'>
                    I am a dynamic and multidisciplinary researcher, 
                    and AI developer with a strong foundation in 
                    computer science and a passion for solving real-world
                    problems through intelligent systems. My professional
                    journey bridges academia, research, and practical 
                    development, with significant contributions to AI 
                    applications in healthcare, robotics, and cybersecurity. 
                    I am committed to advancing technology through rigorous research and collaborative problem-solving. 
                </p>
            </div>
            <div className='flex-1'>
                
                <ul className='grid grid-cols-1 md:grid-cols-2 gap-4
                max-w-2xl'>
                    {infoList.map(({icon, iconDark, title, boldDescription, shortDescription, shorterDescription, boldDescription2, shortDescription2, shorterDescription2}, index) => (
                        <li key={index} className='border-[0.5px] border-gray-400
                        rounded-xl p-5 cursor-pointer hover:bg-lightHover hover:-translate-y-1
                        duration-500 hover:shadow-black'>
                            <Image src={icon} alt={title} className='w-7 mt-3' />
                            <h3 className='my-2 font-semibold text-gray-700'>{title}</h3>
                            <p className='text-black text-sm whitespace-pre-line font-bold'>{boldDescription}</p>
                            <p className='text-gray-700 text-sm whitespace-pre-line'>&nbsp;{shortDescription}</p>
                            <p className='text-gray-700 text-sm whitespace-pre-line'>&nbsp;{shorterDescription}</p>
                            <p className='text-black text-sm whitespace-pre-line font-bold'>{boldDescription2}</p>
                            <p className='text-gray-700 text-sm whitespace-pre-line'>&nbsp;{shortDescription2}</p>
                            <p className='text-gray-700 text-sm whitespace-pre-line'>&nbsp;{shorterDescription2}</p>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
        <div className="w-full overflow-hidden py-0 mt-10 relative">
          <h2 className='text-center text-2xl font-ovo'>Tools I'm fluent in</h2>
  <div className="flex animate-marqueeFast lg:animate-marquee whitespace-nowrap sm:gap-2 lg:gap-10 py-3">
    {toolsData.concat(toolsData).map((tool, index) => (
      <div
        key={index}
        className="flex items-center justify-center min-w-[80px] h-12"
      >
        
        <Image
          src={tool.icon}
          alt={tool.name}
          width={45}
          height={45}
          className="object-contain"
        />
      </div>
    ))}
  </div>
</div>
    </div>
  )
}

export default About