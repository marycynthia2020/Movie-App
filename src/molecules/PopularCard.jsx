import { useContext } from "react";
import { FaRegStar } from "react-icons/fa6";
import { FcCalendar } from "react-icons/fc";import { Theme } from "../contexts/ThemeContext";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../utils/variables";

const PopularCard = ({movie}) => {
    const {darkTheme} = useContext(Theme)
    const date = movie.release_date
    const title = movie.title
  return (
   <div className={`flex md:flex-col gap-6 items-center md:items-start hover:animate-pulse hover:shadow-2xl hover:p-4 hover:rounded-2xl   ${darkTheme ? "text-white" : "text-black"}`} >
        <div className='w-1/2  h-40   md:w-full md:h-80'>
            <img  src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`} alt={movie.title}  className=' w-full h-full lg:w-full lg:object-center lg:aspect-square object-cover rounded-xl' />
        </div>
        <div className="w-1/2 md:w-full flex flex-col gap-1">
            {title ? <h3 className="text-xl font-medium">{movie.title}</h3> : <h3 className="text-xl font-medium">{movie.name}</h3>}
            <p className="">Popularity: {movie.popularity}</p>
            <p className="opacity-80 text-sm flex items-center gap-1"><FaRegStar className="text-yellow-400" />{movie.vote_average}</p>
            {date ? <p className="opacity-80 text-sm flex items-center gap-1" ><FcCalendar />{movie.release_date}</p>: <p className="opacity-80 text-sm flex items-center gap-1" ><FcCalendar />{movie.first_air_date}</p>}
        </div>
    </div>
  )
}

export default PopularCard