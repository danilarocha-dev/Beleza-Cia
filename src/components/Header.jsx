import React, { useState } from 'react';
import Menu from './Menu';

const Header = () => {
  // Gerencia o estado de abertura do menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define os links de navegação que serão passados para o componente Menu
  const links = [
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/services' },
    { name: 'Agendamentos', path: '/agendamentos' },
  ];

  // Função para alternar o estado do menu (abrir/fechar)
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <Menu 
        links={links} 
        isMenuOpen={isMenuOpen} 
        onToggleMenu={handleToggleMenu} 
      />
    </header>
  )
}

export default Header
