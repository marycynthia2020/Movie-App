import { useContext } from "react";
import { FaRegStar } from "react-icons/fa6";
import { FcCalendar } from "react-icons/fc";import { Theme } from "../contexts/ThemeContext";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../utils/variables";
;

const MovieCard = ({movie}) => {
    const {darkTheme} = useContext(Theme)
      const title = movie.title
  return (
    <div className={`flex flex-col gap-1 hover:animate-pulse  ${darkTheme ? "text-white" : "text-black"}`} >
        <div className='w-48 h-72   flex-[0_0_auto] '>
            <img  src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`} alt={movie.title}  className='w-full h-full object-cover rounded-xl' />
        </div>
       {title ?  <h3 className="text-xl font-medium opacity-80">{movie.title}</h3> :  <h3 className="text-xl font-medium opacity-80">{movie.name}</h3>}
        {/* <p className="opacity-80 text-sm flex items-center gap-1"><FaRegStar className="text-yellow-400" />{movie.vote_average}</p>
        <p className="opacity-80 text-sm flex items-center gap-1" ><FcCalendar />{movie.release_date}</p> */}
    </div>
  )
}

export default MovieCard