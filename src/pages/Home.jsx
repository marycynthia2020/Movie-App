import { useContext, useEffect, useState } from 'react'
import ImageCard from '../molecules/ImageCard'
import { fetchMovies, fetchSeries } from '../utils/fetchData'
import { Theme } from '../contexts/ThemeContext'
import { navigateToMovies, navigateToTvSeries, } from '../Hooks/NavigateToMovies'


const Home = () => {
  const {darkTheme, searchValue} = useContext(Theme)
  const [movieResults, setMovieResults] = useState([])
  const [seriesResults, setSeriesResults] = useState([])
  const {data, isLoading, isError, isSuccess} = fetchMovies()
  const seriesData = fetchSeries()
  const navigatetomovies = navigateToMovies()
  const navigatetoseries = navigateToTvSeries()
    useEffect(()=>{
      if(isSuccess){
        setMovieResults(data.results)
      }
      if(seriesData.isSuccess){
        setSeriesResults(seriesData.data.results)
      }
      if(searchValue){
        setMovieResults(data.results.filter(movie => movie.title.toLowerCase().startsWith(searchValue.toLowerCase())))
         setSeriesResults(seriesData.data.results.filter(series => series.name.toLowerCase().startsWith(searchValue.toLowerCase())))
      }
  }, [data, seriesData.data, searchValue])

  if(isLoading){
    return <span className={`animate-pulse text-2xl text-center mt-20 ${darkTheme ? "text-white" : "text-black"}`}>Loading...</span>
  }
  if(isError){
    return <span className={`animate-pulse text-2xl text-center mt-20 ${darkTheme ? "text-white" : "text-black"}`}>Error fetching movies. Check your internet connection</span>
  }
  return (
    <div className=' px-6 w-full mx-auto max-w-[1600px] mt-5 lg:mt-10 flex flex-col flex-nowrap overflow-x-auto scrolling-wrapper ' >
  
    <h2 className={`text-2xl lg:text-3xl font-bold mb-4 ${darkTheme? "text-white" : "text-black"} `}>Trending Movies</h2>
      <div className=' mb-12 gap-2 flex flex-nowrap overflow-x-auto scrolling-wrapper'>
        {
          movieResults.length > 0 
          ? movieResults.map(movie => (
           <div key={movie.id} onClick={()=>navigatetomovies(movie) }> <ImageCard  movie={movie}  /></div>
          ))
          : <div className={`text-2xl text-center ${darkTheme ? "text-white" : "text-black"} `}>No Movie available</div>
        }
      </div>
      <h2 className={`text-2xl lg:text-3xl  font-bold mb-4 ${darkTheme? "text-white" : "text-black"} `}>Popular Series</h2>
      <div className='gap-2 flex flex-nowrap overflow-x-auto scrolling-wrapper' >
        {
          seriesResults.length >0
          ? seriesResults.map(series => (
            <div key={series.id} onClick={()=>navigatetoseries(series)} ><ImageCard movie={series} /></div>
        )) 
        : <div className={`text-2xl text-center ${darkTheme ? "text-white" : "text-black"} `}>No Tv series available</div>
        }
      </div>
    </div>
    
  )
}

export default Home
