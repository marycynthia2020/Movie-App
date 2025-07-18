import { LuSunMedium } from "react-icons/lu";
import { AiFillMoon } from "react-icons/ai";
import { useContext } from "react";
import { Theme } from "../contexts/ThemeContext";

const ThemeButton = () => {
    const {darkTheme, setDarkTheme} = useContext(Theme)
  return (
    <button onClick={()=>setDarkTheme(!darkTheme)} className="p-2 border border-gray-300 rounded-full">
        {darkTheme ? <LuSunMedium className="text-white" /> : <AiFillMoon className="" />}
    </button>
  )
}

export default ThemeButton