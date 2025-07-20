import React, { useContext } from 'react'
import { NavLink } from 'react-router'
import { Theme } from '../contexts/ThemeContext'

const Tabs = ({path, children}) => {
    const {darkTheme} = useContext(Theme)
  return (
    <div>
        <NavLink to= {path} className={({isActive}) => `text-xl font-medium  ${isActive
            ? `text-[#f4a760] rounded-[20px]  px-6 py-3 ${darkTheme ? "bg-white" : "bg-black" }`  
            : darkTheme
            ? "text-white" 
            :"text-black"
        }`}>
            {children}
        </NavLink>
    </div>
  )
}

export default Tabs