import { createContext, useEffect, useState } from "react"

export const Theme =  createContext()

const ThemeContext = ({children}) => {
    const [darkTheme, setDarkTheme] = useState(true) 
    useEffect(()=>{
        darkTheme ? document.body.style.backgroundColor = "black" : document.body.style.backgroundColor = "white"
    }, [])
  return (
    <Theme.Provider value={{darkTheme, setDarkTheme}}>{children}</Theme.Provider>
  )
}

export default ThemeContext