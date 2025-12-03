import React, { useState } from 'react';
import UiSwitch from '../../components/button/UiSwitch';

function TheSwitch() {
  const [isOn1, setIsOn1] = useState(false);
  const [isOn2, setIsOn2] = useState(true);
  const [isOn3, setIsOn3] = useState(false);
  const [isOn4, setIsOn4] = useState(false);

  return (
    <div className="pub-guide">
      <h1>스위치 <small>UiSwitch</small></h1>
      <h2>기본형 스위치</h2>
      <div>
        <UiSwitch checked={isOn1} onChange={setIsOn1} />
      </div>
      <div>
        <UiSwitch checked={isOn2} onChange={setIsOn2} />
      </div>

      <h2>Disabled</h2>
      <div>
        <UiSwitch checked={isOn3} onChange={setIsOn3} disabled />
      </div>
      
      <h2>className="type2"</h2>
      <div>
        <UiSwitch className="type2" checked={isOn4} onChange={setIsOn4} />
      </div>
    </div>
  );
}

export default TheSwitch;
