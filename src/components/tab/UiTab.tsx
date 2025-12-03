import React, { useState, ReactNode } from 'react';

interface UiTabProps {
  children: ReactNode;
  className?: string;
}

interface TabTitleProps {
  children: ReactNode;
}

interface TabContentProps {
  children: ReactNode;
}

function TabTitle({ children }: TabTitleProps) {
  return <>{children}</>;
}

function TabContent({ children }: TabContentProps) {
  return <>{children}</>;
}

function UiTab({ children, className }: UiTabProps) {
  const [activeTab, setActiveTab] = useState(0);

  const titles = React.Children.toArray(children).filter((child: any) => child.type === TabTitle);
  const contents = React.Children.toArray(children).filter((child: any) => child.type === TabContent);

  return (
    <div className={`tabs-wrap ${className}`}>
      <div className="tabs">
        {titles.map((title, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={index === activeTab ? 'active' : ''}
          >
            {title}
          </button>
        ))}
      </div>
      <div className="tabs-cont">
        {contents[activeTab]}
      </div>
    </div>
  );
}

export { UiTab, TabTitle, TabContent };
