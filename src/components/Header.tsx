import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useDarkMode } from "../store/Theme";

const Header = () => {

  const { toggleDarkMode, darkMode } = useDarkMode();

  return (
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white dark:bg-slate-200 dark:text-black font-bold py-2 px-4 rounded"
          onClick={toggleDarkMode}
        >
          {darkMode ? <BsFillMoonStarsFill/> : <BsFillSunFill/>}
        </button>
  )
}

export default Header
