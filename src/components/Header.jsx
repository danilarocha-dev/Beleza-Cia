import React, { useState } from 'react';
import Menu from './Menu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/services' },
    { name: 'Agendamentos', path: '/agendamentos' },
  ];

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <Menu 
        links={links} 
        isMenuOpen={isMenuOpen} 
        onToggleMenu={handleToggleMenu} 
      />
    </header>
  );
}