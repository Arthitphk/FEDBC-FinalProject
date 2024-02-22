import { useState } from "react";
import Theme from "./Theme";


const Navbar = () => {
  
  const [open , setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!open)
  }



  return (
    <nav className="p-4 dark:bg-gray-800 container mx-auto">
      <div className="flex  justify-between">
          <div className="text-black text-2xl font-bold dark:text-white ">Coding
            <span className="text-teal-500">WithMe</span>
          </div>

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


          <ul className="hidden md:flex space-x-4">
              <li><a href="/Home" className="dark:text-white font-bold dark:hover:text-teal-500">Home</a></li>
              <li><a href="#" className="dark:text-white font-bold dark:hover:text-teal-500">About</a></li>
              <li><a href="#" className="dark:text-white font-bold dark:hover:text-teal-500">Service</a></li>
              <Theme/>
          </ul>
      </div>
      {open ? (
            <ul className="flex-col md:hidden">
              <li className="py-3"><a href="#" className="dark:text-white font-bold dark:hover:text-teal-500">Home</a></li>
              <li className="py-3"><a href="#" className="dark:text-white font-bold dark:hover:text-teal-500">About</a></li>
              <li className="py-3"><a href="#" className="dark:text-white font-bold dark:hover:text-teal-500">Service</a></li>
              <Theme/>
          </ul>
          ) : null}
    </nav>
  )
}

export default Navbar