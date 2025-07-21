import { useContext, useEffect, useState } from 'react'
import MovieCard from '../molecules/MovieCard'
import { Theme } from '../contexts/ThemeContext'
import { fetchMovies } from '../utils/fetchData'
import PopularCard from '../molecules/PopularCard'
import { navigateToMovies} from '../Hooks/NavigateToMovies'

const Movies = () => {
  const {darkTheme, searchValue} = useContext(Theme)
      const [movieResults, setMovieResults] = useState([])
      const {data, isLoading, isError, isSuccess} = fetchMovies()
      const navigatetomovies = navigateToMovies()
      useEffect(()=>{
            if(isSuccess){
              setMovieResults(data.results)
            }
            if(searchValue){
            setMovieResults(data.results.filter(movie => movie.title.toLowerCase().startsWith(searchValue.toLowerCase())))
      }
        }, [data, searchValue])
      
      if(isLoading){
          return <span className={`animate-pulse text-2xl text-center mt-20 ${darkTheme ? "text-white" : "text-black"}`}>Loading...</span>
      }
      if(isError){
          return <span className={`animate-pulse text-2xl text-center mt-20 ${darkTheme ? "text-white" : "text-black"}`}>Error fetching movies. Check your internet connection and refresh</span>
      }
  return (
    <div className='w-full px-6 mx-auto max-w-[1700px] mt-5 lg:mt-10 flex flex-col flex-nowrap overflow-x-auto scrolling-wrapper '>
      <h2 className={`text-2xl lg:text-3xl font-bold mb-4 ${darkTheme? "text-white" : "text-black"} `}>Now Showing</h2>
      <div className=' gap-4 flex flex-row-reverse flex-nowrap overflow-x-auto scrolling-wrapper'>
        {
          movieResults.length > 0 
          ? movieResults.map(movie => (
            <div  key={movie.id}  onClick={()=>navigatetomovies(movie)}><MovieCard movie ={movie} /></div>
          ))
          : <div className={`text-2xl text-center ${darkTheme ? "text-white" : "text-black"} `}>No Movie available</div>
        }
      </div>
      <h2 className={`text-2xl lg:text-3xl font-bold mb-4 ${darkTheme? "text-white" : "text-black"} `}>Popular Movies</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {
          movieResults.length > 0 
          ? movieResults.map(movie => (
            <div key={movie.id} onClick={()=>navigatetomovies(movie)} ><PopularCard  movie={movie} /></div>
          ))
          : <div className={`text-2xl text-center ${darkTheme ? "text-white" : "text-black"} `}>No Movie available</div>
        }
      </div>
    </div>
  )
}

export default Movies