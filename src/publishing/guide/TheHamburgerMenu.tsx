import React from 'react';
import UiHamburgerMenu from '../../components/HamburgerMenu/UiHamburgerMenu';

function TheHamburgerMenu() {
  return (
    <div className="pub-guide">
      <h1>햄버거 메뉴 <small>UiHamburgerMenu</small></h1>

      <UiHamburgerMenu>
        <ul>
          <li><a href="#">홈</a></li>
          <li><a href="#">서비스</a></li>
          <li><a href="#">연락처</a></li>
        </ul>
      </UiHamburgerMenu>
    </div>
  );
}

export default TheHamburgerMenu;