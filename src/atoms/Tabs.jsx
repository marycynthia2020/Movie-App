import React, { useContext } from 'react'
import { NavLink } from 'react-router'
import { Theme } from '../contexts/ThemeContext'

const Tabs = ({path, children}) => {
    const {darkTheme} = useContext(Theme)
  return (
    <div>
        <NavLink to= {path} className={({isActive}) => `text-xl py-2 px-4  rounded-2xl  ${darkTheme ? "bg-white" : "bg-black"}  ${isActive
            ? "text-[#f4a760]"
            : darkTheme
            ? "bg-white text-black"
            : "bg-black text-white "
        }`}>
            {children}
        </NavLink>
    </div>
  )
}

export default Tabs