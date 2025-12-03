import React from 'react';

interface UiSwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

function UiSwitch({ checked = false, onChange, disabled = false, className = '' }: UiSwitchProps) {
  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  return (
    <div className={`btn-switch ${className} ${disabled ? 'disabled' : ''}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      <label onClick={handleChange}></label>
    </div>
  );
}

export default UiSwitch;
