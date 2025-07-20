import Nav from '../organisms/Nav'
import { Outlet } from 'react-router'
import Footer from '../organisms/Footer'

const PageLayout = () => {
  return (
    <div className='max-w-screen min-h-screen grid grid-rows-[auto_1fr_auto] pb-4'>
        <Nav />
        <div className='mt-48 sm:mt-32 lg:mt-20'></div>
        <Outlet />
        <Footer />
    </div>
  )
}

export default PageLayout