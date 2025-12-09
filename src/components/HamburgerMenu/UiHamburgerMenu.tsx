import React, { useState } from 'react';

interface UiHamburgerMenuProps {
  children: React.ReactNode;
}

const UiHamburgerMenu: React.FC<UiHamburgerMenuProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // 햄버거 메뉴 클릭 시 상태 변경
  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="hamburger-menu-container">
      <div className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar1"></span>
        <span className="bar2"></span>
        <span className="bar3"></span>
      </div>

      {/* 메뉴가 열린 상태일 때만 보이도록 클래스 관리 */}
      <div className={`menu-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
}

export default UiHamburgerMenu;