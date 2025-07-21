import { useContext, useEffect, useState } from 'react'
import MovieDetailsCard from '../molecules/MovieDetailsCard'
import { fetchMovies } from '../utils/fetchData'
import { Theme } from '../contexts/ThemeContext'
import { useParams } from 'react-router'
import BackButton from '../atoms/BackButton'

const MoviesDetails = () => {
    const {darkTheme} = useContext(Theme)
    const {title} = useParams()
    const {data, isLoading, isError, isSuccess} = fetchMovies()
    const [foundMovie, setFoundmovie] = useState({})
    useEffect(()=>{
          if(isSuccess){
            setFoundmovie(data.results.find(movie => movie.title === title))
          }
      }, [data, title])
    
      if(isLoading){
        return <span className={`animate-pulse text-2xl text-center mt-20 ${darkTheme ? "text-white" : "text-black"}`}>Loading...</span>
      }
      if(isError){
        return <span className={`animate-pulse text-2xl text-center mt-20 ${darkTheme ? "text-white" : "text-black"}`}>Error fetching movies. Check your internet connection</span>
      }

  return (
    <div className=' z-[999] relative px-6 w-full mx-auto max-w-[1600px] mt-5 lg:mt-10 flex flex-col flex-nowrap overflow-x-auto scrolling-wrapper '>
        <BackButton />
        <MovieDetailsCard movie={foundMovie} />
    </div>
  )
}

export default MoviesDetails