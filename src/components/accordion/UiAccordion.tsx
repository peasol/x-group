import React, { useState, ReactNode } from "react";

interface UiAccordionProps {
  children: ReactNode;
  className?: string;
}

interface UiAccordionItemProps {
  title: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function UiAccordion({ children, className = "" }: UiAccordionProps) {
  return <div className={`ui-accordion ${className}`}>{children}</div>;
}

export function UiAccordionItem({ title, children, defaultOpen = false }: UiAccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`acc-item ${open ? "open" : ""}`}>
      <button
        className="acc-header"
        onClick={() => setOpen(!open)}
        type="button"
      >
        <span className="acc-title">{title}</span>
        <span className="acc-icon">{open ? "−" : "+"}</span>
      </button>

      <div className="acc-body">
        <div className="acc-inner">{children}</div>
      </div>
    </div>
  );
}
