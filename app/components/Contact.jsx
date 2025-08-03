import React from 'react'
import { useState } from "react";
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Contact = () => {
  
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c59bc92b-34c2-4602-b721-a6e0c3f735a0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  
    return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 
    bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
        <h2 className='text-center text-5xl font-ovo'>
            Get in touch
        </h2>
        <p className='text-center max-w-2xl mx-auto mt-3 mb-10 font-ovo'>
            If you're curios about the future of AI and more broadly, science, let's talk!
            there's always more to explore together!
        </p>
        <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-2 gap-6 mt-10 mb-4'>
                <input type="text" placeholder='Enter your Name' 
                required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400
                rounded-md bg-white' name='name' />
                <input type="email" placeholder='Enter your Email' required
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400
                rounded-md bg-white' name='email' />
            </div>
            <textarea rows='6' placeholder='Enter your message' required 
            className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-2' name='message'>
            </textarea>
            <button type='submit' className='py-2 px-8 flex items-center
            justify-between gap-2 bg-black/80 text-white rounded-full
            mx-auto hover:bg-black duration-500'>Submit Now <Image src={assets.right_arrow_white} alt='submit' className='w-4' />
            </button>
            <p className='mt-2'>{result}</p>
        </form>

    </div>
    
  )
}

export default Contact