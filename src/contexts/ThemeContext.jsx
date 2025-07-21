import { createContext, useEffect, useState } from "react"

export const Theme =  createContext()

const ThemeContext = ({children}) => {
    const [darkTheme, setDarkTheme] = useState(true) 
     const [isDetailsOpen, setIsDetailsOpen] = useState(false)
    useEffect(()=>{
        darkTheme ? document.body.style.backgroundColor = "black" : document.body.style.backgroundColor = "white"
    }, [])
  return (
    <Theme.Provider value={{darkTheme, setDarkTheme, isDetailsOpen, setIsDetailsOpen}}>{children}</Theme.Provider>
  )
}

export default ThemeContext