import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ({ links, isMenuOpen, onToggleMenu }) => {
  return (
    <>
      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center justify-between px-8 py-4">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-[#333]">
          Beleza & <span className="font-pacifico text-pink-500">C</span>ia
        </div>

        {/* Nav Links */}
        <ul className="flex gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <Link to={link.path} className="text-[#333] hover:text-pink-500 transition-colors duration-300">{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex gap-6 text-[#333] text-xl">
          <a href="#" className="hover:text-pink-500 transition-colors duration-300"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="hover:text-pink-500 transition-colors duration-300"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:text-pink-500 transition-colors duration-300"><i className="fab fa-whatsapp"></i></a>
        </div>
      </nav>

      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold text-[#333]">
          Beleza & <span className="font-pacifico text-pink-500">C</span>ia
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
              <Link to={link.path} className="text-[#333] hover:text-pink-500 transition-colors" onClick={onToggleMenu}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-center gap-8 text-[#333] text-xl pb-4">
          <a href="#" className="hover:text-pink-500 transition-colors"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="hover:text-pink-500 transition-colors"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:text-pink-500 transition-colors"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>

        

        

      


    </>
  )
}

export default Menu
