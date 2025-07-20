import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import TvSeries from "./pages/TvSeries"
import PageLayout from "./templates/PageLayout"
import { useContext, useState } from "react"
import { Theme } from "./contexts/ThemeContext"

function App() {
  const {darkTheme} = useContext(Theme)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  return (
  <div className={`${darkTheme ? "bg-[#121212]" : "bg-white"} w-full min-h-screen`}>
    {isDetailsOpen && <div className="bg-black absolute opacity-75 inset-0 z-[999]" onClick={()=>setIsDetailsOpen(false)}></div>}
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
