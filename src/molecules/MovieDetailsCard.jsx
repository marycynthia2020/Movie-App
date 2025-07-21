import { useContext } from 'react'
import { Theme } from '../contexts/ThemeContext'
import { FaRegStar } from 'react-icons/fa'
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from '../utils/variables'

const MovieDetailsCard = ({movie}) => {
    const {darkTheme} = useContext(Theme)
  return (
    <div className={`w-full lg:w-[70%] mx-auto  flex flex-col gap-y-3 rounded-lg shaow-2xl opacity-90  p-2 ${darkTheme ? "text-white " : "text-black"} `}>
      <div className={`w-full h-[400px] relative md:h-[600px]  flex items-center justify-center px-2`}>
          <img src = {`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie?.backdrop_path}`} alt={movie?.title}  className='w-full h-full absolute object-cover rounded-2xl '/>
          <img src = {`${IMAGE_BASE_URL}${POSTER_SIZE}${movie?.poster_path}`} alt={movie?.title}  className=' h-4/5 aspect-square  mx-auto z-10 rounded-lg'/>
      </div>
      <h3 className="text-2xl font-medium pacity-80">{movie?.title}</h3>
      <p className=" text-sm flex items-center gap-1"><FaRegStar className="text-yellow-400" />{movie?.vote_average}</p>
       <p className=' opacity-80 tracking-wider leading-[1.7] '>{movie?.overview}</p>
    </div>
  )
}

export default MovieDetailsCard 