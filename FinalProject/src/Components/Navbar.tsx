import { useState } from "react";
import Theme from "./Theme";
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import InfoIcon from '@mui/icons-material/Info';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import Search from "./Search";


const Navbar = () => {

  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!open)
  }



  return (
    <nav>
      <div className="p-4 dark:bg-gray-800 container max-w-7xl mx-auto ">
        <div className="flex  justify-between">
          <a href="/Home">
            <div className="text-black text-2xl font-bold dark:text-white ">Coding
              <span className="text-teal-500">Tech</span>
            </div>
          </a>

          <div className="md:hidden">
            <button id="menu-toggle" className="dark:text-white">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox=" 0 0 24 24"
                className="w-6 h-6"
                onClick={toggleMenu}
              >
                <path d="M4 6H16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>


          
          <div className="hidden md:flex">
            <Search/>
          </div>
          <ul className="hidden md:flex space-x-4 p-1">
            <li><a href="#" className="dark:text-white font-bold dark:hover:text-teal-500  hover:text-purple-700"><CollectionsBookmarkIcon className="p-1"/>หลักสูตรทั้งหมด</a></li>
            <li><a href="#" className="dark:text-white font-bold dark:hover:text-teal-500"><InfoIcon className="p-1"/>เกี่ยวกับเรา</a></li>
            <li><a href="#" className="dark:text-white font-bold dark:hover:text-teal-500">< RoomServiceIcon className="p-1"/>บริการ</a></li>
            <Theme />
          </ul>
        </div>
      </div>
      {open ? (
        <ul className="flex-col md:hidden pb-5 pl-3">
            <li className="p-2"><a href="#" className="dark:text-white font-bold dark:hover:text-teal-500  hover:text-purple-700"><CollectionsBookmarkIcon className="p-1"/>หลักสูตรทั้งหมด</a></li>
            <li className="p-2"><a href="#" className="dark:text-white font-bold dark:hover:text-teal-500"><InfoIcon className="p-1"/>เกี่ยวกับเรา</a></li>
            <li className="p-2"><a href="#" className="dark:text-white font-bold dark:hover:text-teal-500">< RoomServiceIcon className="p-1"/>บริการ</a></li>
          <Theme />
        </ul>
      ) : null}
    </nav>
  )
}

export default Navbar