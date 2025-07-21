import { IMAGE_BASE_URL, POSTER_SIZE } from "../utils/variables"

const ImageCard = ({movie}) => {
  return (
    <div className='w-48 h-72   flex-[0_0_auto] hover:animate-pulse' >
        <img  src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`} alt={movie.title}  className='w-full h-full object-cover rounded-xl' />
    </div>
  )
}

export default ImageCard