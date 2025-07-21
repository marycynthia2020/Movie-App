import React, { useContext } from 'react'
import ThemeButton from './ThemeButton'
import SearchIcon from './SearchIcon'
import { Theme } from '../contexts/ThemeContext'

const Logo = () => {
  const {isSearchOpen, setIsSearchOpen} = useContext(Theme)
  return (
    <div className='flex items-center justify-between gap-8'>
        <h1 className='text-4xl font-tiktok font-bold text-blue-800'>Frame<span className='text-[#f4a760]'>Flick</span></h1>
          <div onClick={()=>setIsSearchOpen(!isSearchOpen)}><SearchIcon /></div>
        <div className='sm:hidden'>
            <ThemeButton />
        </div>
    </div>
  )
}

export default Logo