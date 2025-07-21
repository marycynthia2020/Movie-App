import { createContext, useEffect, useState } from "react"

export const Theme =  createContext()

const ThemeContext = ({children}) => {
    const [darkTheme, setDarkTheme] = useState(true) 
     const [isSearchOpen, setIsSearchOpen] = useState(false)
       const [searchValue, setSearchValue] = useState("")
    useEffect(()=>{
        darkTheme ? document.body.style.backgroundColor = "black" : document.body.style.backgroundColor = "white"
    }, [])
    const value = {darkTheme, setDarkTheme, isSearchOpen, setIsSearchOpen, searchValue, setSearchValue}
  return (
    <Theme.Provider value={value}>{children}</Theme.Provider>
  )
}

export default ThemeContext