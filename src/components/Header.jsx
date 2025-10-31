import React from 'react';
import Menu from './Menu';
import { useMenu } from '../hooks/useMenu';

const Header = () => {
  // Gerencia o estado de abertura do menu mobile
 const { isMenuOpen, handleToggleMenu } = useMenu();

  // Define os links de navegação que serão passados para o componente Menu
  const links = [
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/services' },
    { name: 'Agendamentos', path: '/agendamentos' },
  ];


  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <Menu 
        links={links} 
        isMenuOpen={isMenuOpen} 
        onToggleMenu={handleToggleMenu} 
      />
    </header>
  )
}

export default Header
