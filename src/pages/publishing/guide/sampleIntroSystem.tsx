import XcBreadcrumb from "@/components/xc/ui/XcBreadcrumb";

import imgIntroTop from '@/assets/images/common/img_intro_top.png';

const sampleIntroSystem = () => {

  return (
    <>
      <h1 className="sr-only">콘텐츠영역</h1>
      <div className="inner">
        <div className="contents-wrap">
          <div className="contents-area">
            <XcBreadcrumb
              items={[
                { label: "홈", href: "#", icon: <i className="ic-home" /> },
                { label: "평가제도소개", current: true },
              ]}
            />
            <div className="cont-top">
              <h2>
                <div>평가제도소개</div>
              </h2>
            </div>

            <div className="intro-wrap">
              <div className="ins-block">
                도로교통연구원의 ITS 성능평가에 대해 안내드립니다.
              </div>
              <div className="intro-main">
                <div className="top">
                  <img src={imgIntroTop} alt="ITS성능평가란?" />
                </div>
                <div className="cont">
                  <h3><i></i><span>ITS성능평가</span></h3>
                  <p>
                    <span>ITS(Intelligent Transport Systems) 장비, 시스템, 서비스의 기능 및 성능이 일정수준으로 유지되도록 유도하는 것으로</span>
                    <strong>국토교통부장관이 정한 기준, 절차, 방법 에 의거하여 평가·확인하는 제도</strong>
                  </p>
                  <h3><i></i><span>시행근거</span></h3>
                  <ul>
                    <li>- 국가통합교통체계효율화법 제86조 (지능형 교통체계의 성능평가)</li>
                    <li>- ITS 성능평가 전담기관 지정 (국토해양부고시 제2010-409호, 2010.06.23)</li>
                    <li>- 자동차 · 도로교통분야 ITS 사업시행지침 (국토교통부 고시 제2024-275호, 2024.05.21)</li>
                    <li>- 자동차 · 도로교통분야 ITS 성능평가기준 (국토교통부 고시 제2023-21호, 2023.01.06)</li>
                  </ul>
                  <h3><i></i><span>필요성 · 기대효과</span></h3>
                  <ul>
                    <li>- 공인기관으로부터 ITS 설비 성능검증</li>
                    <li>- 객관적이고 과학적인 유지관리 실태 진단 및 개선사항 분석 · 도출</li>
                    <li>- 교통정보 정확도 향상 및 고품질 정보 제공</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default sampleIntroSystem;