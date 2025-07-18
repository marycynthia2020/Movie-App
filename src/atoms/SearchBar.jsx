import React, { useContext } from 'react'
import { Theme } from '../contexts/ThemeContext'

const SearchBar = () => {
    const {darkTheme} = useContext(Theme)
  return (
    <form className='flex items-center gap-2'>
        <input type="text" className={`p-2  rounded-2xl outline-none ${darkTheme ? "bg-white text-black" : "bg-black text-white"}`} name='text' />
        <button className={`p-1 px-4 text-lg rounded-2xl ${darkTheme ? "bg-white text-black" : "bg-black text-white"}`}>Go</button>
    </form>
  )
}

export default SearchBar