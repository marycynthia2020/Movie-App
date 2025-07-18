import { createContext, useState } from "react"

export const Theme =  createContext()

const ThemeContext = ({children}) => {
    const [darkTheme, setDarkTheme] = useState(true) 
  return (
    <Theme.Provider value={{darkTheme, setDarkTheme}}>{children}</Theme.Provider>
  )
}

export default ThemeContext