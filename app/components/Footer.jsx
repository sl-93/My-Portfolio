import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '1rem 0',
        color: '#555',
        fontWeight: '600',
        userSelect: 'none',
        fontFamily: 'ovo',
      }}
    >
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontStyle: 'italic' }}>
        Designed with 💗 by  
        <a href='#top'><Image src={assets.logo} alt="Logo" width={65} height={65} style={{ display: 'inline-block' }} /></a>
      </span>
    </div>
  )
}

export default Footer
