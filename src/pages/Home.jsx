import { useContext, useEffect, useState } from 'react'
import ImageCard from '../molecules/ImageCard'
import { fetchMovies, fetchSeries } from '../utils/fetchData'
import { Theme } from '../contexts/ThemeContext'


const Home = () => {
  const {darkTheme} = useContext(Theme)
  const [movieResults, setMovieResults] = useState([])
  const [seriesResults, setSeriesResults] = useState([])

  const {data, isLoading, isError, isSuccess} = fetchMovies()
  const seriesData = fetchSeries()
    useEffect(()=>{
      if(isSuccess){
        setMovieResults(data.results)
      }
      if(seriesData.isSuccess){
        setSeriesResults(seriesData.data.results)
      }
  }, [data, seriesData.data])

  if(isLoading){
    return <span className='animate-pulse text-2xl text-center'>Loading...</span>
  }
  if(isError){
    return <span className='animate-pulse text-2xl text-center'>Error fetchin movies. Check your internet connection and refresh</span>
  }
  return (
    <div className=' px-6 w-full mx-auto max-w-[1600px] mt-5 lg:mt-10 flex flex-col flex-nowrap overflow-x-auto scrolling-wrapper ' >
    <h2 className={`text-2xl lg:text-3xl font-bold mb-4 ${darkTheme? "text-white" : "text-black"} `}>Trending Movies</h2>
      <div className=' mb-12 gap-2 flex flex-nowrap overflow-x-auto scrolling-wrapper'>
        {
          movieResults.length > 0 
          ? movieResults.map(movie => (
            <ImageCard key={movie.id} movie={movie} />
          ))
          : <div className={`text-2xl text-center ${darkTheme ? "text-white" : "text-black"} `}>No Movie available</div>
        }
      </div>
      <h2 className={`text-2xl lg:text-3xl  font-bold mb-4 ${darkTheme? "text-white" : "text-black"} `}>Popular Series</h2>
      <div className='gap-2 flex flex-nowrap overflow-x-auto scrolling-wrapper' >
        {
          seriesResults.length >0
          ? seriesResults.map(movie => (
            <ImageCard key={movie.id} movie={movie} />
        )) 
        : <div className={`text-2xl text-center ${darkTheme ? "text-white" : "text-black"} `}>No Tv series available</div>
        }
      </div>
    </div>
    
  )
}

export default Home
