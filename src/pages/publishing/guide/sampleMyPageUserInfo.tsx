import XcBreadcrumb from "@/components/xc/ui/XcBreadcrumb";
import LeftMenu from "@/layouts/project/leftmenu/LeftMenu";
import { MENU_LIST } from "@/layouts/project/header/Nav";

const sampleMyPageUserInfo = () => {
  const menu = MENU_LIST.find((m) => m.label === "나의 평가현황");

  return (
    <>
      <h1 className="sr-only">콘텐츠영역</h1>
      <div className="inner">
        <div className="contents-wrap">
          <LeftMenu
            title={menu?.label || ""}
            items={menu?.depth2 || []}
            currentLabel="사용자정보 관리"
          />

          <div className="contents-area">
            <XcBreadcrumb
              items={[
                { label: "홈", href: "#", icon: <i className="ic-home" /> },
                { label: "나의 평가현황", href: "#" },
                { label: "사용자정보 관리", current: true },
              ]}
            />
            <div className="cont-top">
              <h2>
                <div>사용자정보 관리</div>
              </h2>
            </div>
            <div className="info-box">
              <i className="img-confirmed" />
              <h3>관리자 승인중입니다.</h3>
              <p>관리자 승인이 완료된후 사용자정보 수정 / 신청 / 조회가 가능합니다.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default sampleMyPageUserInfo;
