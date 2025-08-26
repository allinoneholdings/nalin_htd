import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { MenuIcon, XIcon } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinkClass = ({ isActive }) => `px-2 py-1 transition-colors duration-300 hover:text-primary ${isActive ? "text-primary font-semibold" : "text-white"}`

  return (
    <div className="fixed top-0 z-50 w-full flex items-center backdrop-blur bg-black/20 md:bg-black/60 md:border border-gray-600/20 justify-between px-6 md:px-16 lg:px-10 py-5">
      <NavLink to="/" onClick={() => {scrollTo(0,0); setIsOpen(false)}} className="flex items-center max-md:flex-1">
        <img
          src="http://howtodrive.lk/images/Logo.jpg"
          alt="logo"
          className="w-50 h-auto"
        />
      </NavLink>

      <div className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg rounded-md z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 min-md:px-8 py-3 max-md:h-screen min-md:rounded-full backdrop-blur bg-black/40 md:bg-white/10 md:border border-gray-300/20 transition-[width] duration-300 
          ${isOpen ? "max-md:w-full" : "max-md:w-0"}`}
      >
        <XIcon
          className="md:hidden text-white hover:text-primary absolute top-13 right-6 w-6 h-6 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />

        <NavLink to="/" onClick={() => {scrollTo(0,0); setIsOpen(false)}} className={navLinkClass}>Home</NavLink>

        <div className="relative group">
          <NavLink to="/services" onClick={() => {scrollTo(0,0); setIsOpen(false)}} className={navLinkClass}>
            Our Services ▾
          </NavLink>
          <div className="absolute top-full left-0 hidden group-hover:block hover:opacity-100 backdrop-blur bg-black/40 md:bg-black/70 rounded-lg shadow-lg w-48 z-50">
            
            <div className="relative group/item">
              <NavLink to="/services" onClick={() => {scrollTo(0,0); setIsOpen(false)}} className="block px-4 py-2 hover:text-primary">
                Driving License for Beginners ▸
              </NavLink>
              <div className="absolute left-full top-0 hidden group-hover/item:block backdrop-blur bg-black/40 md:bg-black/70 rounded-lg shadow-lg w-48">
                <NavLink to="/manual-auto" onClick={() => {scrollTo(0,0); setIsOpen(false)}} className="block px-4 py-2 hover:text-primary">
                  Manual and Auto Cars
                </NavLink>
                <NavLink to="/dual-purpose" onClick={() => {scrollTo(0,0); setIsOpen(false)}} className="block px-4 py-2 hover:text-primary">
                  Dual Purpose
                </NavLink>
                <NavLink to="/motor-cycle" onClick={() => {scrollTo(0,0); setIsOpen(false)}} className="block px-4 py-2 hover:text-primary">
                  Motor Cycle/ Three Wheeler
                </NavLink>
                <NavLink to="/allinone" onClick={() => {scrollTo(0,0); setIsOpen(false)}} className="block px-4 py-2 hover:text-primary">
                  All in One Light
                </NavLink>
              </div>
            </div>

            <div className="relative group/item">
              <NavLink to="/services" onClick={() => {scrollTo(0,0); setIsOpen(false)}} className="block px-4 py-2 hover:text-primary">
                Further Driving License ▸
              </NavLink>
              <div className="absolute left-full top-0 hidden group-hover/item:block backdrop-blur bg-black/40 md:bg-black/70 rounded-lg shadow-lg w-48">
                <NavLink to="/manual-auto" onClick={() => {scrollTo(0,0); setIsOpen(false)}} className="block px-4 py-2 hover:text-primary">
                  Manual and Auto Cars
                </NavLink>
                <NavLink to="/dual-purpose" onClick={() => {scrollTo(0,0); setIsOpen(false)}} className="block px-4 py-2 hover:text-primary">
                  Dual Purpose
                </NavLink>
                <NavLink to="/motor-cycle" onClick={() => {scrollTo(0,0); setIsOpen(false)}} className="block px-4 py-2 hover:text-primary">
                  Motor Cycle/ Three Wheeler
                </NavLink>
                <NavLink to="/allinone" onClick={() => {scrollTo(0,0); setIsOpen(false)}} className="block px-4 py-2 hover:text-primary">
                  All in One Light
                </NavLink>
              </div>
            </div>

            <div className="relative group/item">
              <NavLink to="/services" onClick={() => {scrollTo(0,0); setIsOpen(false)}} className="block px-4 py-2 hover:text-primary">
                Special Driving Cources ▸
              </NavLink>
              <div className="absolute left-full top-0 hidden group-hover/item:block backdrop-blur bg-black/40 md:bg-black/70 rounded-lg shadow-lg w-48">
                <NavLink to="/special-course" onClick={() => {scrollTo(0,0); setIsOpen(false)}} className="block px-4 py-2 hover:text-primary">
                  Special Driving Cources
                </NavLink>
                <NavLink to="/motor-coach" onClick={() => {scrollTo(0,0); setIsOpen(false)}} className="block px-4 py-2 hover:text-primary">
                  Motor Coach & Motor Lorry
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <NavLink to="/kids-driving" onClick={() => {scrollTo(0,0); setIsOpen(false)}} className={navLinkClass}>Kids Driving School</NavLink>
        <NavLink to="/resources" onClick={() => {scrollTo(0,0); setIsOpen(false)}} className={navLinkClass}>Resources</NavLink>
        <NavLink to="/about" onClick={() => {scrollTo(0,0); setIsOpen(false)}} className={navLinkClass}>About Us</NavLink>
      </div>

      <MenuIcon
        onClick={() => setIsOpen(!isOpen)}
        className="max-md:ml-4 md:hidden hover:text-primary w-8 h-8 cursor-pointer"
      />
    </div>
  )
}

export default Navbar
