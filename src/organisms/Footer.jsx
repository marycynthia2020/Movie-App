import React, { useContext } from 'react'
import { Theme } from '../contexts/ThemeContext'
import FooterLogo from '../atoms/FooterLogo'

const Footer = () => {
  const {darkTheme} = useContext(Theme)
  return (
  <footer className={` py-6 px-4 lg:py-20 w-full  mt-10 ${darkTheme? "bg-[#131819] text-white opacity-80" : "bg-gray-100 text-black"}`}>
      <div className='grid lg:grid-cols-2 items-center justify-between lg:w-3/4 mx-auto'>
        <div className='mb-6'>
          <FooterLogo />
          <p>Enjoy the latest movies. Discover cinematic magic. Stream, explore, and immerse yourself in stories. Your ultimate destination for curated just for you.</p>
        </div>
       <div className='flex items-center justify-between'>
         <div>
          <p className='font-bold text-lg mb-6'>Quick Links</p>
          <ul className='flex flex-col gap-3'>
            <li>Home</li>
            <li>Trending</li>
            <li>popular Series</li>
            <li>About Us</li>
          </ul>
        </div>
        <div>
          <p className='font-bold text-lg mb-6'>Contact Us</p>
          <ul className='flex flex-col gap-3'>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>YouTube</li>
          </ul>
        </div>
       </div>

      </div>
    </footer>
  )
}

export default Footer