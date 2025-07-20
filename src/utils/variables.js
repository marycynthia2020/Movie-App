// Use this exact configuration
const TMDB_API_KEY = '2ca22f700bb9eff7e814bfbe16ba6831'
const BASE_URL = 'https://api.themoviedb.org/3'
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/'
export const POSTER_SIZE = 'w500'
export const BACKDROP_SIZE = 'original'

// For popular movies
export const moviesURL = `${BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`

// For popular TV series
export const seriesURL = `${BASE_URL}/tv/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`

// For poster images
// const posterURL = `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`

// For backdrop images (optional)
// const backdropURL = `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`