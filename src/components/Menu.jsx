import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = ({ links = [], isMenuOpen, onToggleMenu }) => {
  return (
    <>
      {/* Desktop Menu */}
      <nav className="hidden md:grid md:grid-cols-3 items-center px-8 py-2">
        <div className="justify-self-start text-xl font-bold text-[#333] uppercase">
          BELEZA & Cia
        </div>
        <ul className="flex gap-8 justify-self-center">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink 
                to={link.path} 
                className={({ isActive }) => 
                  `pb-1 transition-colors duration-300 ${
                    isActive 
                      ? 'text-pink-500 border-b-2 border-pink-500' 
                      : 'text-[#333] hover:text-pink-500'
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex gap-6 text-[#333] text-xl justify-self-end">
          <a href="#" className="hover:text-pink-500 transition-colors duration-300"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="hover:text-pink-500 transition-colors duration-300"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:text-pink-500 transition-colors duration-300"><i className="fab fa-twitter"></i></a>
        </div>
      </nav>

      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold text-[#333] uppercase">
          BELEZA & Cia
        </div>
        <button onClick={onToggleMenu} aria-label="Toggle Menu">
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl text-[#333]`}></i>
        </button>
      </div>

      {/* Mobile Menu (collapsible) */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} border-t border-gray-200`}>
        <ul className="flex flex-col items-center gap-4 py-4">
          {links.map((link) => (
            <li key={link.name}>

              {}
              <NavLink to={link.path} className="text-[#333] hover:text-pink-500 transition-colors" onClick={onToggleMenu}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}


export default Menu
