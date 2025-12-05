import React from 'react';

interface UiRadioProps {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  switchStyle?: boolean; // 스위치형 라디오 버튼을 위한 prop
}

const UiRadio: React.FC<UiRadioProps> = ({
  name,
  value,
  label,
  checked,
  onChange,
  disabled = false,
  switchStyle = false,
}) => {
  return (
    <div className={`radio-container ${switchStyle ? 'switch' : ''} ${disabled ? 'disabled' : ''}`}>
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={value}>{label}</label>
    </div>
  );
};

export default UiRadio;
