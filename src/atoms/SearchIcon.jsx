import { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { Theme } from "../contexts/ThemeContext";

const SearchIcon = () => {
    const {darkTheme} = useContext(Theme)
  return (
    <div><CiSearch className = {` text-3xl ${darkTheme ? "text-white" : "text-black"}`}/></div>
  )
}

export default SearchIcon