import React from 'react';
import { Link } from 'react-router-dom';

function Index() {
  return (
    <div className="pub-guide">
      <h1>UI Sample <small>Components</small></h1>
      <ul>
        <li>
          <Link to="/publishing/guide/TheButton" target="_blank">버튼</Link>
        </li>
        <li>
          <Link to="/publishing/guide/TheSwitch" target="_blank">스위치</Link>
        </li>
        <li>
          <Link to="/publishing/guide/TheTab" target="_blank">탭</Link>
        </li>
        <li>
          <Link to="/publishing/guide/TheChart" target="_blank">차트</Link>
        </li>
        <li>
          <Link to="/publishing/guide/TheAccordion" target="_blank">어코디언</Link>
        </li>
        <li>
          <Link to="/publishing/guide/TheModal" target="_blank">모달 팝업</Link>
        </li>
      </ul>
      <ul className="yj-st">
        <li>YJ</li>
        <li>
          <Link to="/publishing/guide/TheHamburgerMenu" target="_blank">햄버거 메뉴</Link>
        </li>
        <li>
          <Link to="/publishing/guide/TheRadio" target="_blank">라디오 버튼</Link>
        </li>
      </ul>
    </div>
  );
}

export default Index;
