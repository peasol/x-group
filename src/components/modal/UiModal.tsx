import React, { ReactNode } from "react";

interface UiModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

export default function UiModal({ open, onClose, children, className = "" }: UiModalProps) {
  if (!open) return null;

  return (
    <div className="ui-modal-backdrop" onClick={onClose}>
      <div className={`ui-modal ${className}`} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export function UiModalHeader({ children }: { children: ReactNode }) {
  return <div className="ui-modal-header">{children}</div>;
}

export function UiModalBody({ children }: { children: ReactNode }) {
  return <div className="ui-modal-body">{children}</div>;
}

export function UiModalFooter({ children }: { children: ReactNode }) {
  return <div className="ui-modal-footer">{children}</div>;
}
