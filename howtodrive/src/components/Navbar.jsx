import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { MenuIcon, XIcon } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinkClass = "px-2 py-1 transition-colors duration-300 hover:text-primary"

  return (
    <div className="fixed top-0 z-50 w-full flex items-center backdrop-blur bg-black/40 md:bg-black/60 md:border border-gray-600/20 justify-between px-6 md:px-16 lg:px-10 py-5">
      {/* Logo */}
      <NavLink to="/" className="flex items-center max-md:flex-1">
        <img
          src="http://howtodrive.lk/images/Logo.jpg"
          alt="logo"
          className="w-50 h-auto"
        />
      </NavLink>

      {/* Links */}
      <div
        className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg rounded-md z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 min-md:px-8 py-3 max-md:h-screen min-md:rounded-full backdrop-blur bg-black/40 md:bg-white/10 md:border border-gray-300/20 transition-[width] duration-300 ${
          isOpen ? "max-md:w-full" : "max-md:w-0"
        } overflow-visible`}
      >
        <XIcon
          className="md:hidden text-primary hover:text-secondary absolute top-6 right-6 w-6 h-6 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />

        <NavLink to="/" className={navLinkClass}>Home</NavLink>

        {/* Services dropdown */}
        <div className="relative group">
          <NavLink to="/services" className={navLinkClass}>
            Our Services ▾
          </NavLink>

          {/* First level dropdown */}
          <div className="absolute top-full left-0 hidden group-hover:block backdrop-blur bg-black/40 md:bg-black/70 rounded-lg shadow-lg w-48 z-50">
            {/* Service 1 */}
            <div className="relative group/item">
              <NavLink to="/services/service1" className="block px-4 py-2 hover:text-primary">
                Driving License for Beginners ▸
              </NavLink>
              {/* Second level dropdown */}
              <div className="absolute left-full top-0 hidden group-hover/item:block backdrop-blur bg-black/40 md:bg-black/70 rounded-lg shadow-lg w-48">
                <NavLink to="/services/service1/option1" className="block px-4 py-2 hover:text-primary">
                  Manual and Auto Cars
                </NavLink>
                <NavLink to="/services/service1/option2" className="block px-4 py-2 hover:text-primary">
                  Dual Purpose
                </NavLink>
                <NavLink to="/services/service1/option3" className="block px-4 py-2 hover:text-primary">
                  Motor Cycle/ Three Wheeler
                </NavLink>
                <NavLink to="/services/service1/option4" className="block px-4 py-2 hover:text-primary">
                  All in One Light
                </NavLink>
              </div>
            </div>

            {/* Service 2 */}
            <div className="relative group/item">
              <NavLink to="/services/service2" className="block px-4 py-2 hover:text-primary">
                Further Driving License ▸
              </NavLink>
              <div className="absolute left-full top-0 hidden group-hover/item:block backdrop-blur bg-black/40 md:bg-black/70 rounded-lg shadow-lg w-48">
                <NavLink to="/services/service1/option1" className="block px-4 py-2 hover:text-primary">
                  Manual and Auto Cars
                </NavLink>
                <NavLink to="/services/service1/option2" className="block px-4 py-2 hover:text-primary">
                  Dual Purpose
                </NavLink>
                <NavLink to="/services/service1/option3" className="block px-4 py-2 hover:text-primary">
                  Motor Cycle/ Three Wheeler
                </NavLink>
                <NavLink to="/services/service1/option4" className="block px-4 py-2 hover:text-primary">
                  All in One Light
                </NavLink>
              </div>
            </div>

            {/* Service 3 */}
            <div className="relative group/item">
              <NavLink to="/services/service3" className="block px-4 py-2 hover:text-primary">
                Special Driving Cources ▸
              </NavLink>
              <div className="absolute left-full top-0 hidden group-hover/item:block backdrop-blur bg-black/40 md:bg-black/70 rounded-lg shadow-lg w-48">
                <NavLink to="/services/service3/option1" className="block px-4 py-2 hover:text-primary">
                  Special Driving Cources
                </NavLink>
                <NavLink to="/services/service3/option2" className="block px-4 py-2 hover:text-primary">
                  Motor Coach & Motor Lorry
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <NavLink to="/kids-driving" className={navLinkClass}>Kids Driving School</NavLink>
        <NavLink to="/resources" className={navLinkClass}>Resources</NavLink>
        <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
      </div>

      {/* Mobile menu button */}
      <MenuIcon
        onClick={() => setIsOpen(!isOpen)}
        className="max-md:ml-4 md:hidden hover:text-primary w-8 h-8 cursor-pointer"
      />
    </div>
  )
}

export default Navbar
