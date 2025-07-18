import Nav from '../organisms/Nav'
import { Outlet } from 'react-router'
import Footer from '../organisms/Footer'

const PageLayout = () => {
  return (
    <div className='w-full min-h-screen grid grid-rows-[auto_1fr_auto] p-5'>
        <Nav />
        <Outlet />
        <Footer />
    </div>
  )
}

export default PageLayout