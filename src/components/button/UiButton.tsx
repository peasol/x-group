import React from 'react';

interface UiButtonProps {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
  disabled?: boolean; 
  children: React.ReactNode;
}

function UiButton({ type = 'button', className = '', onClick, disabled = false, children }: UiButtonProps) {
  return (
    <button type={type} className={`btn ${className}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default UiButton;
