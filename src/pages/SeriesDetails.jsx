import React, { useContext, useEffect, useState } from 'react'
import { Theme } from '../contexts/ThemeContext'
import { useParams } from 'react-router'
import { fetchSeries } from '../utils/fetchData'
import SeriesDetailsCard from '../molecules/SeriesDetailsCard'
import BackButton from '../atoms/BackButton'

const SeriesDetails = () => {
    const {darkTheme} = useContext(Theme)
    const {name} = useParams()
    const {data, isLoading, isError, isSuccess} = fetchSeries()
    const [foundSeries, setFoundSeries] = useState({})
    useEffect(()=>{
              if(isSuccess){
                setFoundSeries(data.results.find(series => series.name === name))
              }
          }, [data])

    if(isLoading){
        return <span className={`animate-pulse text-2xl text-center mt-20 ${darkTheme ? "text-white" : "text-black"}`}>Loading...</span>
      }
      if(isError){
        return <span className={`animate-pulse text-2xl text-center mt-20 ${darkTheme ? "text-white" : "text-black"}`}>Error fetching movies. Check your internet connection</span>
      }
  return (
    <div className='] px-6 w-full mx-auto max-w-[1600px] mt-5 lg:mt-10 flex flex-col flex-nowrap overflow-x-auto scrolling-wrapper '>
      <BackButton />
        <SeriesDetailsCard series={foundSeries} />
    </div>
  )
}

export default SeriesDetails