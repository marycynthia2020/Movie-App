import { useContext, useEffect, useState } from 'react'
import MovieCard from '../molecules/MovieCard'
import { Theme } from '../contexts/ThemeContext'
import { fetchMovies } from '../utils/fetchData'
import PopularCard from '../molecules/PopularCard'

const Movies = () => {
  const {darkTheme} = useContext(Theme)
      const [movieResults, setMovieResults] = useState([])
      const {data, isLoading, isError, isSuccess} = fetchMovies()
      useEffect(()=>{
            if(isSuccess){
              setMovieResults(data.results)
              console.log(data.results)
            }
        }, [data])
      
      if(isLoading){
          return <span className='animate-pulse text-2xl text-center'>Loading...</span>
      }
      if(isError){
          return <span className='animate-pulse text-2xl text-center'>Error fetchin movies. Check your internet connection and refresh</span>
      }
  return (
    <div className='w-full px-6 mx-auto max-w-[1700px] mt-5 lg:mt-10 flex flex-col flex-nowrap overflow-x-auto scrolling-wrapper '>
      <h2 className={`text-2xl lg:text-3xl font-bold mb-4 ${darkTheme? "text-white" : "text-black"} `}>Now Showing</h2>
      <div className=' gap-4 flex flex-row-reverse flex-nowrap overflow-x-auto scrolling-wrapper'>
        {
          movieResults.length > 0 
          ? movieResults.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))
          : <div className={`text-2xl text-center ${darkTheme ? "text-white" : "text-black"} `}>No Movie available</div>
        }
      </div>
      <h2 className={`text-2xl lg:text-3xl font-bold mb-4 ${darkTheme? "text-white" : "text-black"} `}>Popular Movies</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {
          movieResults.length > 0 
          ? movieResults.map(movie => (
            <PopularCard key={movie.id} movie={movie} />
          ))
          : <div className={`text-2xl text-center ${darkTheme ? "text-white" : "text-black"} `}>No Movie available</div>
        }
      </div>
    </div>
  )
}

export default Movies