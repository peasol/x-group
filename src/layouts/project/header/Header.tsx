import Nav from '@/layouts/project/header/Nav.tsx';
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const Header = () => {

  const [activeTitle, setActiveTitle] = useState("");
  const [depth2List, setDepth2List] = useState<any[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const openNav = (label: string, depth2: any[]) => {
    setActiveTitle(label);
    setDepth2List(depth2);
    document.body.classList.add("nav-open");
  };

  const closeNav = () => {
    setActiveTitle("");
    setDepth2List([]);
    document.body.classList.remove("nav-open");
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeNav();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!wrapperRef.current?.contains(e.relatedTarget as Node)) {
      closeNav();
    }
  };

  return (
    <header className="header">
      <h1 className="sr-only">헤더영역</h1>

      <div className="header-top">
        <div className="inner">
          <i className="symbol" aria-label="ex symbol" />
          <p>이 누리집은 한국도로공사 도로교통연구원 누리집입니다.</p>
        </div>
      </div>

      <div className="header-block">
        <div className="inner">
          <Link to="/" className="logo" aria-label="ITS 성능평가 통합플랫폼" />
          <div className="link">
            <Link to="/"><i className="ic-login"/><span>로그인</span></Link>
            <Link to="/"><i className="ic-join"/><span>회원가입</span></Link>
            {/* <Link to="/"><i className="ic-logout"/><span>로그아웃</span></Link>
            <Link to="/"><i className="ic-my-status"/><span>나의 평가현황</span></Link> */}
          </div>
        </div>
      </div>

      <div
        className="nav-wrapper"
        ref={wrapperRef}
        onMouseLeave={closeNav}
        onBlur={handleBlur}
      >
        <div
          className="nav-dim"
          aria-hidden="true"
          onMouseEnter={closeNav}
        />
        <div className="nav-panel">
          <div className="inner">
            <p className="nav-title">{activeTitle}</p>
            <div className="nav-submenu">
              {depth2List.map((item, i) => (
                <Link key={i} to={item.path} className="item">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="gnb-area">
          <div className="inner">
            <Nav onHover={openNav} />
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
