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
      </ul>
    </div>
  );
}

export default Index;
