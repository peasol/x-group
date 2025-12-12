import { Link } from "react-router-dom";

interface Depth2Item {
  label: string;
  path: string;
}

interface MenuItem {
  label: string;
  path: string;
  depth2: Depth2Item[];
}

interface NavProps {
  onHover: (label: string, depth2: Depth2Item[]) => void;
}

// 샘플코드 퍼블용
export const MENU_LIST: MenuItem[] = [
  {
    label: "평가제도소개",
    path: "/",
    depth2: [
      { label: "2depth", path: "/" },
      { label: "2depth", path: "/" },
      { label: "2depth", path: "/" },
      { label: "2depth", path: "/" },
      { label: "2depth", path: "/" }
    ]
  },
  {
    label: "ITS성능평가 안내/신청",
    path: "/",
    depth2: [
      { label: "성능평가 대상", path: "/" },
      { label: "성능평가 절차", path: "/" },
      { label: "품질방침", path: "/" },
      { label: "공평성보장 선언문", path: "/" },
      { label: "평가신청", path: "/" }
    ]
  },
  {
    label: "하이패스 적합등록 안내/신청",
    path: "/",
    depth2: [
      { label: "2depth", path: "/" },
      { label: "2depth", path: "/" },
      { label: "2depth", path: "/" },
      { label: "2depth", path: "/" },
      { label: "2depth", path: "/" }
    ]
  },
  {
    label: "알림마당",
    path: "/",
    depth2: [
      { label: "공지사항", path: "/" },
      { label: "FAQ", path: "/" },
    ]
  },
  {
    label: "나의 평가현황",
    path: "/",
    depth2: [
      { label: "사용자정보 관리", path: "/" },
      { label: "ITS성능평가 신청내역", path: "/" },
      { label: "하이패스 적합등록 신청내역", path: "/" },
    ]
  }
];

const Nav = ({ onHover }: NavProps) => {
  return (
    <nav>
      <ul className="depth1">
        {MENU_LIST.map((menu) => (
          <li
            key={menu.label}
            onMouseEnter={() => onHover(menu.label, menu.depth2)}
            onFocus={() => onHover(menu.label, menu.depth2)}
          >
            <Link to={menu.path}>
              <span>{menu.label}</span>
              <i className="ic-ar" />
            </Link>

            <ul className="depth2 sr-only">
              {menu.depth2.map((item, i) => (
                <li key={i}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>

          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
