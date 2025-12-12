import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Depth2Item {
  label: string;
  path?: string;
}

interface LeftMenuProps {
  title: string;
  items: Depth2Item[];
  currentLabel?: string;
}

const LeftMenu = ({ title, items, currentLabel }: LeftMenuProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // currentLabel 있을 때만 active 설정
  useEffect(() => {
    if (!currentLabel) return;

    const idx = items.findIndex((item) => item.label === currentLabel);
    if (idx !== -1) {
      setActiveIndex(idx);
    }
  }, [currentLabel, items]);

  const onClickItem = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveIndex(index);
  };

  return (
    <div className="left-menu">
      <h2>{title}</h2>

      <ul>
        {items.map((item, idx) => {
          const isActive = activeIndex === idx;
          return (
            <li key={item.label} className={isActive ? "active" : ""}>
              <Link
                to={item.path || "#"}
                onClick={(e) => onClickItem(idx, e)}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftMenu;
