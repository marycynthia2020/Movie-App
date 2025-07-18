import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import TvSeries from "./pages/TvSeries"
import PageLayout from "./templates/PageLayout"
import { useContext } from "react"
import { Theme } from "./contexts/ThemeContext"

function App() {
  return (
    <div>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvseries" element={<TvSeries />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
