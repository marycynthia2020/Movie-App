import Logo from '../atoms/Logo'
import ThemeButton from '../atoms/ThemeButton'
import SearchBar from '../atoms/SearchBar'
import Tabs from '../atoms/Tabs'

const Nav = () => {
  return (
    <div>
        <nav className=' flex flex-col lg:flex-row lg:items-center justify-between gap-y-5'>
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 gap-y-5'>
                <Logo />
                <SearchBar />
            </div>
            <div className='flex items-center  justify-between sm:gap-6 sm:justify-center '>
                <Tabs path="/" children={'Home'} />
                <Tabs path="/movies" children={'Movies'} />
                <Tabs path="/tvseries" children={'TVSeries'} />
                <ThemeButton />
            </div>
        </nav>
    </div>
  )
}

export default Nav