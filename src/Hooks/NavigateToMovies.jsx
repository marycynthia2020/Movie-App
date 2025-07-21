import { useNavigate } from 'react-router'

export const navigateToMovies = () => {
    const navigate = useNavigate()
    const navigateToMovie = (movie)=>{
        if(movie && movie.id){
            navigate(`/movies/${movie.title}`)
        }
    }
    return navigateToMovie
}

export const  navigateToTvSeries = ()=>{
    const navigate = useNavigate()
    const navigateToSeries = (series)=>{
        if(series && series.id){
            navigate(`/tvseries/${series.name}`)
        }
    }
    return navigateToSeries
}