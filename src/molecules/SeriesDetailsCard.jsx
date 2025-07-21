import { useContext } from 'react'
import { Theme } from '../contexts/ThemeContext'
import { FaRegStar } from 'react-icons/fa'
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from '../utils/variables'

const SeriesDetailsCard = ({series}) => {
    const {darkTheme} = useContext(Theme)
  return (
    <div className={`w-full lg:w-[70%] mx-auto  flex flex-col gap-y-3 rounded-lg shaow-2xl opacity-90  p-4 ${darkTheme ? "text-white " : "text-black"} `}>
      <div className={`w-full h-[400px] relative md:h-[600px]  flex items-center justify-center`}>
          <img src = {`${IMAGE_BASE_URL}${BACKDROP_SIZE}${series?.backdrop_path}`} alt={series?.name}  className='w-full h-full absolute object-cover rounded-2xl '/>
          <img src = {`${IMAGE_BASE_URL}${POSTER_SIZE}${series?.poster_path}`} alt={series?.name}  className=' h-4/5 aspect-square  mx-auto z-10 rounded-lg'/>
      </div>
      <h3 className="text-2xl font-medium pacity-80">{series?.name}</h3>
      <p className=" text-sm flex items-center gap-1"><FaRegStar className="text-yellow-400" />6786</p>
       <p className=' opacity-80 tracking-wider leading-[1.7] '>{series?.overview}</p>
    </div>
  )
}

export default SeriesDetailsCard 