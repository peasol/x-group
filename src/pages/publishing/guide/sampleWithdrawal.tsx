import { useState } from "react";
import XcBreadcrumb from "@/components/xc/ui/XcBreadcrumb";
import LeftMenu from "@/layouts/project/leftmenu/LeftMenu";
import { MENU_LIST } from "@/layouts/project/header/Nav";

import XcButton from "@/components/xc/ui/XcButton.tsx";
import ModalWithdrawalGuide from "@/components/its/ModalWithdrawalGuide";

const sampleWithdrawal = () => {
  const menu = MENU_LIST.find((m) => m.label === "나의 평가현황");

  const [openWithdrawal, setOpenWithdrawal] = useState(true);

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

            <div className="btn-wrap justify-between">
              <XcButton
                variant="outline"
                size="lg"
                onClick={() => setOpenWithdrawal(true)}
              >
                회원탈퇴
              </XcButton>
            </div>
          </div>
        </div>
      </div>

      {/* 회원 탈퇴 안내 팝업 */}
      <ModalWithdrawalGuide
        open={openWithdrawal}
        onOpenChange={setOpenWithdrawal}
      />
    </>
  );
};

export default sampleWithdrawal;
