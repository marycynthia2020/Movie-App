import { Route, Routes, useNavigate } from "react-router"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import TvSeries from "./pages/TvSeries"
import PageLayout from "./templates/PageLayout"
import { useContext, useState } from "react"
import { Theme } from "./contexts/ThemeContext"
import MoviesDetails from "./pages/MoviesDetails"
import SeriesDetails from "./pages/SeriesDetails"

function App() {
  const {darkTheme} = useContext(Theme)
  return (
  <div className={`${darkTheme ? "bg-[#121212]" : "bg-white"} w-full min-h-screen font-roboto`}>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies">
            <Route index element={<Movies />} />
            <Route path=":title" element={<MoviesDetails />} />
          </Route>
          <Route path="/tvseries" >
            <Route index element={<TvSeries />} />
            <Route path=":name" element={<SeriesDetails />} />
          </Route>  
        </Route>
      </Routes>
    </div>
  )
}

export default App
