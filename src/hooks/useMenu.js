import { useState, useCallback } from 'react';

export const useMenu = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  return {
    isMenuOpen,
    handleToggleMenu,
  };
};