import { useContext, useEffect, useState } from 'react'
import { fetchSeries } from '../utils/fetchData'
import { Theme } from '../contexts/ThemeContext'
import MovieCard from '../molecules/MovieCard'
import PopularCard from '../molecules/PopularCard'

const TvSeries = () => {
  const {darkTheme} = useContext(Theme)
  const [seriesResults, setSeriesResults] = useState([])
  const {data, isLoading, isError, isSuccess} = fetchSeries()
  useEffect(()=>{
    if(isSuccess){
      setSeriesResults(data.results)
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
      <h2 className={`text-2xl lg:text-3xl font-bold mb-4 ${darkTheme? "text-white" : "text-black"} `}>Streaming Now</h2>
      <div className='mb-8 gap-4 flex flex-row-reverse flex-nowrap overflow-x-auto scrolling-wrapper'>
        {
          seriesResults.length > 0 
          ? seriesResults.map(series => (
            <MovieCard key={series.id} movie={series} />
          ))
          : <div className={`text-2xl text-center ${darkTheme ? "text-white" : "text-black"} `}>No Tv series available</div>
        }
      </div>
      <h2 className={`text-2xl lg:text-3xl font-bold mb-4 ${darkTheme? "text-white" : "text-black"} `}>Popular Tv Series</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {
          seriesResults.length > 0 
          ? seriesResults.map(series => (
            <PopularCard key={series.id} movie={series} />
          ))
          : <div className={`text-2xl text-center ${darkTheme ? "text-white" : "text-black"} `}>No Tv Series available</div>
        }
      </div>
    </div>
  )
}

export default TvSeries