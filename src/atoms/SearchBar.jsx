import React, { useContext } from 'react'
import { Theme } from '../contexts/ThemeContext'

const SearchBar = () => {
    const {darkTheme, searchValue, setSearchValue } = useContext(Theme)
  return (
    <form className='flex items-center gap-2 self-center '>
        <input type="text" placeholder='search for your favorite'  name="search" value={searchValue} onChange={(e)=> setSearchValue(e.target.value.trim())} className={`p-2 w-[320px]  rounded-2xl outline-none ${darkTheme ? "bg-white text-black" : "bg-black text-white"}`} />
        {/* <button className={`p-1 px-4 text-lg rounded-2xl ${darkTheme ? "bg-white text-black" : "bg-black text-white"}`}>Go</button> */}
    </form>
  )
}

export default SearchBar