import React, { useState } from 'react';
import UiRadio from '../../components/radio/UiRadio';

function TheRadio() {
  const [selectedValue, setSelectedValue] = useState('');

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="pub-guide">
      <h1>라디오 버튼 <small>UiRadio</small></h1>

      <h2>기본형 라디오 버튼</h2>
      <div className="radio-group">
        <UiRadio
          name="group1"
          value="option1"
          label="옵션 1"
          checked={selectedValue === 'option1'}
          onChange={handleRadioChange}
        />
        <UiRadio
          name="group1"
          value="option2"
          label="옵션 2"
          checked={selectedValue === 'option2'}
          onChange={handleRadioChange}
        />
        <UiRadio
          name="group1"
          value="option3"
          label="옵션 3"
          checked={selectedValue === 'option3'}
          onChange={handleRadioChange}
        />
      </div>

      <h2>스위치형 라디오 버튼</h2>
      <div className="radio-group">
        <UiRadio
          name="group2"
          value="switchOption1"
          label="스위치형 옵션 1"
          checked={selectedValue === 'switchOption1'}
          onChange={handleRadioChange}
          switchStyle={true}
        />
        <UiRadio
          name="group2"
          value="switchOption2"
          label="스위치형 옵션 2"
          checked={selectedValue === 'switchOption2'}
          onChange={handleRadioChange}
          switchStyle={true}
        />
      </div>
    </div>
  );
}

export default TheRadio;
