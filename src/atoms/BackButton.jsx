import { useContext } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Theme } from "../contexts/ThemeContext";
import { useNavigate } from "react-router";

const BackButton = () => {
    const {darkTheme} = useContext(Theme)
    const navigate = useNavigate()
  return (
    <button className={`py-2 px-8 rounded-lg w-fit bg-gradient-to-r mb-2 ${darkTheme ? "  from-gray-500 to-gray-800" : "from-gray-800 to-gray-400"}`} onClick={()=> navigate(-1)}>
        <IoMdArrowBack  className={`text-4xl font-bold ${darkTheme ? "text-black" : "text-white"} `} />
    </button>
  )
}

export default BackButton