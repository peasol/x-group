import { useState } from "react";
import XcBreadcrumb from "@/components/xc/ui/XcBreadcrumb";
import XcButton from "@/components/xc/ui/XcButton.tsx";

import imgDeviceHipass01 from '@/assets/images/device/img_device_hipass_01.png';
import imgDeviceHipass02 from '@/assets/images/device/img_device_hipass_02.png';
import imgDeviceHipass03 from '@/assets/images/device/img_device_hipass_03.png';
import imgDeviceHipass04 from '@/assets/images/device/img_device_hipass_04.png';
import imgDeviceHipass05 from '@/assets/images/device/img_device_hipass_05.png';
import imgDeviceHipass06 from '@/assets/images/device/img_device_hipass_06.png';
import imgDeviceHipass07 from '@/assets/images/device/img_device_hipass_07.png';
import imgDeviceHipass08 from '@/assets/images/device/img_device_hipass_08.png';
import imgDeviceHipass09 from '@/assets/images/device/img_device_hipass_09.png';
import imgDeviceHipass10 from '@/assets/images/device/img_device_hipass_10.png';
import imgDeviceHipass11 from '@/assets/images/device/img_device_hipass_11.png';

import imgHipassProcess01 from '@/assets/images/device/img_hipass_process_1.png';
import imgHipassProcess02 from '@/assets/images/device/img_hipass_process_2.png';
import imgHipassProcess03 from '@/assets/images/device/img_hipass_process_3.png';

const MENU = [
  { key: "gotoTarget", label: "하이패스 단말기 적합등록 대상" },
  { key: "gotoProcess", label: "하이패스 단말기 적합등록 절차" },
];

const sampleHiPassIntro = () => {
  const [activeKey, setActiveKey] = useState("gotoTarget");

  const HEADER_OFFSET = 210;

  const handleMenuClick = (key: string) => {
    setActiveKey(key);

    const target = document.getElementById(key);
    if (!target) return;

    const targetTop =
      target.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: targetTop - HEADER_OFFSET,
      behavior: "smooth",
    });
  };


  return (
    <>
      <h1 className="sr-only">콘텐츠영역</h1>
      <div className="inner">
        <div className="contents-wrap">
          <div className="contents-area">
            <XcBreadcrumb
              items={[
                { label: "홈", href: "#", icon: <i className="ic-home" /> },
                { label: "하이패스 적합등록 안내/신청", href: "#" },
                { label: "하이패스 단말기 적합등록 대상", current: true },
              ]}
            />
            <div className="cont-top">
              <h2>
                <div>하이패스 적합등록 안내/신청</div>
              </h2>
            </div>

            <div className="intro-wrap">
              <div className="ins-block">
                도로교통연구원의 ITS 성능평가에 대해 안내드립니다.
              </div>

              {/* intro-block */}
              <div className="intro-block">

                {/* leftarea */}
                <div className="leftarea">
                  <div className="top">
                    <small>이 페이지의 구성</small>
                    <div className="title">ITS성능평가 안내/신청</div>
                  </div>
                  <ul>
                    {MENU.map((menu) => (
                      <li
                        key={menu.key}
                        className={activeKey === menu.key ? "active" : ""}
                      >
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleMenuClick(menu.key);
                          }}
                        >
                          {menu.label}
                        </a>
                      </li>
                    ))}
                  </ul>

                  <XcButton className="btns">하이패스 적합등록 신청</XcButton>
                </div>

                {/* intro-cont */}
                <div className="intro-cont">

                  {/* cont-box */}
                  <div className="cont-box" id="gotoTarget">
                    <h3>하이패스 단말기 적합등록 대상</h3>
                    <h4 className="blt-title"><i></i><span>하이패스 단말기인증</span></h4>
                    <p className="t2">하이패스 단말기의 전국호환 사용을 위하여 국토교통부에서 정한 기술기준 및 요금징수 성능을 검사하여 인증하는 제도</p>

                    <h4 className="blt-title"><i></i><span>시행근거</span></h4>
                    <p className="t1">- 통행료자동지불시스템 단말기 인증제도 시행요령 [국토교통부 고시 제2013-256호, 2013. 4. 11]</p>
                    <p className="t1">- 통행료자동지불시스템 단말기 인증기관 지정 [건설교통부 공고 제2007-330호, 2007. 8. 21]</p>
                    <p className="t1">- 통행료자동지불시스템 단말기 인증처리 규정 [한국도로공사 업무규정 QMS-0097, 2018. 12 26]</p>

                    <h4 className="blt-title"><i></i><span>인증 단말기 유형</span></h4>
                    <ul className="item-list type2">
                      <li>
                        <p>일반</p>
                        <div className="img-area">
                          <img src={imgDeviceHipass01} alt="" />
                        </div>
                      </li>
                      <li>
                        <p>SIM</p>
                        <div className="img-area">
                          <img src={imgDeviceHipass02} alt="" />
                        </div>
                      </li>
                      <li>
                        <p>룸미러</p>
                        <div className="img-area">
                          <img src={imgDeviceHipass03} alt="" />
                        </div>
                      </li>
                      <li>
                        <p>내비</p>
                        <div className="img-area">
                          <img src={imgDeviceHipass04} alt="" />
                        </div>
                      </li>
                      <li>
                        <p>GPS</p>
                        <div className="img-area">
                          <img src={imgDeviceHipass05} alt="" />
                        </div>
                      </li>
                      <li>
                        <p>안테나 분리</p>
                        <div className="img-area">
                          <img src={imgDeviceHipass06} alt="" />
                        </div>
                      </li>
                      <li>
                        <p>감면</p>
                        <div className="img-area">
                          <img src={imgDeviceHipass07} alt="" />
                        </div>
                      </li>
                      <li>
                        <p>교통정보</p>
                        <div className="img-area">
                          <img src={imgDeviceHipass08} alt="" />
                        </div>
                      </li>
                      <li>
                        <p>블랙박스</p>
                        <div className="img-area">
                          <img src={imgDeviceHipass09} alt="" />
                        </div>
                      </li>
                      <li>
                        <p>DTG</p>
                        <div className="img-area">
                          <img src={imgDeviceHipass10} alt="" />
                        </div>
                      </li>
                      <li>
                        <p>매립형(e-SIM)</p>
                        <div className="img-area">
                          <img src={imgDeviceHipass11} alt="" />
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* cont-box */}
                  <div className="cont-box" id="gotoProcess">
                    <h3>하이패스 단말기 적합등록 절차</h3>
                    <h4 className="blt-title"><i></i><span>단말기인증 기준</span></h4>
                    <div className="mt-[20px] mb-[38px]">
                      <img src={imgHipassProcess01} alt="단말기인증 기준 안내" />
                      <figcaption className="sr-only">
                        <p>
                          시험항목: 서류심사
                          시험내용: 시험성적서 진위확인
                          합격기준: 적합여부
                        </p>
                        <p>
                          시험항목: 기술기준시험
                          시험내용: 단말기 발급, 요금징수 확인
                          합격기준: 100%
                        </p>
                        <p>
                          시험항목: 성능시험
                          시험내용: 주행조건별 성능확인 (930회)
                          세부조건: 고속, 군집, 밀착, 야간
                          합격기준: 통신 성공률 99% 이상
                        </p>
                        <p>
                          시험항목: 운영시험
                          시험내용: 실제 영업소 운영확인 (1000회)
                          합격기준: 통신 성공률 99% 이상
                        </p>
                      </figcaption>
                    </div>

                    <h4 className="blt-title"><i></i><span>단말기인증 절차</span></h4>
                    <p className="t1">- 신청절차</p>
                    <div className="mt-[12px] mb-[20px]">
                      <img src={imgHipassProcess02} alt="단말기인증 신청절차 안내" />
                      <figcaption className="sr-only">
                        <p>
                          인증신청 접수협의:
                          인증담당자
                          031-8098-6224~6
                        </p>
                        <p>
                          신청서 제출:
                          제출서류
                          - 신청공문
                          - 인증신청서
                          - 인증시료 (16대)
                          - 개발관련 서류
                        </p>
                        <p>
                          인증수수료 납부:
                          지정계좌 수수료 납부
                          - 전자세금계산서 발행
                        </p>
                      </figcaption>
                    </div>
                    <p className="t1">- 인증처리절차</p>
                    <div className="mt-[12px]">
                      <img src={imgHipassProcess03} alt="단말기인증 인증처리절차 안내" />
                      <figcaption className="sr-only">
                        <ol>
                          <li>인증신청, 시험일정 수립 1일</li>
                          <li>서류심사 1일</li>
                          <li>기술기준 준수여부 시험 2일</li>
                          <li>성능조건 부합여부 시험 2일</li>
                          <li>영업소 운영시험 4일</li>
                          <li>결과분석 1일</li>
                          <li>인증서 발급 1일</li>
                        </ol>
                        <p>
                          인증 소요일수: 신청일로부터 19일 (평균 10~12일 소요)
                        </p>
                        <p>
                          아래 조건에 부합할 경우 소요일수 2일 단축 가능
                          - 성능조건 부합여부 시험 사전점검 생략 (1일), 운영시험 2차 면제 (1일)
                        </p>
                      </figcaption>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default sampleHiPassIntro;