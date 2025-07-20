import { useQuery } from "@tanstack/react-query"
import { moviesURL, seriesURL } from "./variables"

export const fetchMovies = () => {
    const query = useQuery({
    queryKey: ["movies"],
    queryFn: ()=> fetch(moviesURL).then(res=>res.json())
  })
  return query
}

export const fetchSeries = () => {
    const query = useQuery({
    queryKey: ["series"],
    queryFn: ()=> fetch(seriesURL).then(res=>res.json())
  })
  return query
}


function navigate (movie) {
    navigate(`movies/${movie.id}`)
}