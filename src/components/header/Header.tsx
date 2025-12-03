/** @jsxImportSource @emotion/react */
import React, { ReactNode } from 'react';
import topLogo from '../../assets/images/bg_top_logo.png';
import { css } from "@emotion/react";

const itemStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-width: 1280px;
  height: 80px;
  background: #00274D;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: none;
  z-index: 30;
  > h1 {
    position: absolute; 
    left: -10000px; 
    top: -10000px; 
    width: 0; 
    height: 0; 
    font-size: 0; 
  }
`;

const logoBlock = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 990px;
  height: 178px;
`;

interface HeaderProps {
  children: ReactNode;
}

function Header({ children }: HeaderProps) {
  return (
    <section css={itemStyle}>
      <h1>헤더영역</h1>
      <div css={logoBlock}>
        <img src={topLogo} alt="자율주행관제 대시보드 Autonomous Driving Control Dashboard" />
      </div>
      {children}
    </section>
  );
}

export default Header;
