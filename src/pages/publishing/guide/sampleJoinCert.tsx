import { useState } from "react";
import XcBreadcrumb from "@/components/xc/ui/XcBreadcrumb";
import XcSwitch from "@/components/xc/ui/XcSwitch";

const sampleJoinCert = () => {
  const [useKeyboardSec, setUseKeyboardSec] = useState(true);

  return (
    <>
      <h1 className="sr-only">콘텐츠영역</h1>
      <div className="inner">
        <XcBreadcrumb
          items={[
            { label: "홈", href: "#", icon: <i className="ic-home" /> },
            { label: "회원가입", current: true },
          ]}
        />
        <div className="join">
          <div className="cont-top">
            <h2>
              <div>회원가입</div>
            </h2>
            <ul className="join-process">
              <li className="current">
                <div className="dot" aria-hidden="true"/>
                <div className="step">1단계</div>
                <p>사용자 인증</p>
              </li>  
              <li>
                <div className="dot" aria-hidden="true"/>
                <div className="step">2단계</div>
                <p>약관동의</p>
              </li>
              <li>
                <div className="dot" aria-hidden="true"/>
                <div className="step">3단계</div>
                <p>회원정보입력(법인)</p>
              </li>
              <li>
                <div className="dot" aria-hidden="true"/>
                <div className="step">4단계</div>
                <p>회원가입완료</p>
              </li>
            </ul>
            <div className="current-step" aria-hidden="true">
              <div><span className="current">1단계</span> / <span>4단계</span></div>
              <p>사용자 인증</p>
            </div>

            <XcSwitch
              label="키보드 보안 프로그램 사용"
              labelPosition="right"
              value={useKeyboardSec}
              onChange={setUseKeyboardSec}
              variant="default"
              aria-label="키보드 보안 프로그램 사용"
            />
          </div>

          <div className="cert-info">
            <div className="title">
              한번에 본인인증하고<br/>
              모든 서비스 이용하기
            </div>
            <div className="flex flex-col gap-[16px]">
              <div className="cert-box">
                <i className="ic-cert01"/>
                <div>
                  <div className="title">공동·금융 인증서</div>
                  <p>별도로 은행같은 금융기관이나 공식인증기관에서 발급받은 전자서명용 공인인증서 또는 금융 인증서를 이용하여 로그인하기</p>
                </div>
                <a href="#" className="btn-goto" aria-label="공동·금융 인증서 바로가기"></a>
              </div>
              <div className="cert-box">
                <i className="ic-cert02"/>
                <div>
                  <div className="title">간편 인증</div>
                  <p>네이버, 카카오, 또는 금융기관등 민간 전자서명 사업자가 제공하는 전자서명을 이용하여 로그인하기</p>
                  <a href="#" className="btn-info"><i className="ic-info"/><span>이용 가능한 간편 인증 서비스 목록보기</span></a>
                </div>
                <a href="#" className="btn-goto" aria-label="간편인증 바로가기"></a>
              </div>
            </div>
          </div>

          <div className="guide-box">
            <h3><i/><span>로그인에 어려움이 있으신가요?</span></h3>
            <ul>
              <li>이전에 이용한 로그인 수단이 안 보인다면 상단 통합 로그인 사용을 꺼보세요.</li>
              <li>로그인 관련 <u>도움말</u>이나 다른 사용자가 <u>자주 찾는 질문</u>을 확인해보세요.</li>
              <li>02-3703-2500 (내선번호 4번)으로 전화주세요. 서비스에 로그인할 수 있도록 도와드리겠습니다.</li>
            </ul>
          </div>  
        </div>
      </div>
    </>
  )
}

export default sampleJoinCert;