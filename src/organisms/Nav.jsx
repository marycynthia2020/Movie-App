import Logo from '../atoms/Logo'
import ThemeButton from '../atoms/ThemeButton'
import SearchBar from '../atoms/SearchBar'
import Tabs from '../atoms/Tabs'
import { useContext } from 'react'
import  { Theme } from '../contexts/ThemeContext'

const Nav = () => {
    const {darkTheme} = useContext(Theme)
  return (
    <div className={`z-[800] px-6 w-full fixed  inset-x-0 py-6 shadow-lg ${darkTheme ? "bg-[#121212]" :"bg-[#F5F5F5]"} `}>
        <nav className="w-full mx-auto max-w-[1920px] flex flex-col lg:flex-row lg:items-center justify-between gap-y-5 ">
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 gap-y-5'>
                <Logo />
                <SearchBar />
            </div>
            <div className='flex items-center  justify-between sm:gap-6 sm:justify-center '>
                <Tabs path="/" children={'Home'} />
                <Tabs path="/movies" children={'Movies'} />
                <Tabs path="/tvseries" children={'TV Series'} />
                <div className='hidden sm:block'>
                    <ThemeButton />
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Nav