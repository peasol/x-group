import { useState } from "react";
import XcBreadcrumb from "@/components/xc/ui/XcBreadcrumb";
import XcButton from "@/components/xc/ui/XcButton.tsx";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";

import imgDeviceITS01 from '@/assets/images/device/img_device_its_01.png';
import imgDeviceITS02 from '@/assets/images/device/img_device_its_02.png';
import imgDeviceITS03 from '@/assets/images/device/img_device_its_03.png';
import imgDeviceITS04 from '@/assets/images/device/img_device_its_04.png';
import imgDeviceITS05 from '@/assets/images/device/img_device_its_05.png';
import imgDeviceITS06 from '@/assets/images/device/img_device_its_06.png';
import imgDeviceITS07 from '@/assets/images/device/img_device_its_07.png';
import imgDeviceITS08 from '@/assets/images/device/img_device_its_08.png';
import imgDeviceITS09 from '@/assets/images/device/img_device_its_09.png';
import imgDeviceITS10 from '@/assets/images/device/img_device_its_10.png';
import imgDeviceITS11 from '@/assets/images/device/img_device_its_11.png';
import imgITSProcess from '@/assets/images/device/img_its_process.png';

import imgDocumentationQuality from '@/assets/images/common/img_documentation_quality.png';
import imgDeclarationFairness from '@/assets/images/common/img_declaration_fairness.png';

const MENU = [
  { key: "gotoTarget", label: "성능평가 대상정보" },
  { key: "gotoProcess", label: "성능평가 절차안내" },
  { key: "gotoQuality", label: "품질방침" },
  { key: "gotoFairness", label: "공평성 보장 선언문" },
  { key: "gotoApply", label: "평가신청" },
];

const sampleITSIntro = () => {
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
                { label: "ITS성능평가 안내/신청", href: "#" },
                { label: "ITS성능평가란?", current: true },
              ]}
            />
            <div className="cont-top">
              <h2>
                <div>ITS성능평가 안내/신청</div>
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

                  <XcButton className="btns">ITS성능평가 신청하기</XcButton>
                  <XcButton className="btns">등록양식 및 관련 서류 다운로드</XcButton>
                </div>

                {/* intro-cont */}
                <div className="intro-cont">

                  {/* cont-box */}
                  <div className="cont-box" id="gotoTarget">
                    <h3>성능평가 대상정보</h3>
                    <h4 className="blt-title"><i></i><span>성능평가 대상</span></h4>
                    <p className="t1">- 고속도로, 국도, 민자도로, 지자체의 VDS, AVC, AVI, DSRC, AIDS, HS-WIM, WAVE-RSE 설비</p>
                    <ul className="item-list">
                      <li>
                        <p>차량검지기<br/>[VDS] 루프식</p>
                        <div className="img-area">
                          <img src={imgDeviceITS01} alt="" />
                        </div>
                      </li>
                      <li>
                        <p>차량검지기<br/>[VDS] 영상식</p>
                        <div className="img-area">
                          <img src={imgDeviceITS02} alt="" />
                        </div>
                      </li>
                      <li>
                        <p>차량검지기<br/>[VDS] 레이더</p>
                        <div className="img-area">
                          <img src={imgDeviceITS03} alt="" />
                        </div>
                      </li>
                      <li>
                        <p>교통량조사장비<br/>[AVC]</p>
                        <div className="img-area">
                          <img src={imgDeviceITS04} alt="" />
                        </div>
                      </li>
                      <li>
                        <p>자동차량인식장치<br/>[AVI]</p>
                        <div className="img-area">
                          <img src={imgDeviceITS05} alt="" />
                        </div>
                      </li>
                      <li>
                        <p>근거리전용무선통신<br/>[DSRC]</p>
                        <div className="img-area">
                          <img src={imgDeviceITS06} alt="" />
                        </div>
                      </li>
                      <li>
                        <p>돌발상황검지시스템<br/>[AIDS] 영상식</p>
                        <div className="img-area">
                          <img src={imgDeviceITS07} alt="" />
                        </div>
                      </li>
                      <li>
                        <p>돌발상황검지시스템<br/>[AIDS] 레이다식</p>
                        <div className="img-area">
                          <img src={imgDeviceITS08} alt="" />
                        </div>
                      </li>
                      <li>
                        <p>고속축중기<br/>[HS-WIM]</p>
                        <div className="img-area">
                          <img src={imgDeviceITS09} alt="" />
                        </div>
                      </li>
                      <li>
                        <p>C-ITS 노변기지국<br/>[WAVE-RSE]</p>
                        <div className="img-area">
                          <img src={imgDeviceITS10} alt="" />
                        </div>
                      </li>
                      <li>
                        <p>스마트교차로<br/>[SIS]</p>
                        <div className="img-area">
                          <img src={imgDeviceITS11} alt="" />
                        </div>
                      </li>
                    </ul>

                    <h4 className="blt-title"><i></i><span>평가시기</span></h4>
                    <p className="t3">- 기본성능평가 : 장비 또는 시스템 제조 후 1회</p>
                    <p className="t3">- 준공평가 : 현장설치 후 준공검사</p>
                    <p className="t3">- 정기평가 : 2년 주기 시행(단, DSRC와 WAVE-RSE의 경우 4년)</p>
                    <p className="t3">- 변경/이설평가 : 이설, 변경 후</p>

                    <h4 className="blt-title"><i></i><span>평가등급 및 적합기준</span></h4>
                    <p className="t3">- VDS/AVI/AVC/DSRC/WAVE-RES</p>

                    <div className="table-detail">
                      <Table>
                        <caption>평가등급 및 적합기준 표(VDS/AVI/AVC/DSRC/WAVE-RES)</caption>
                        <colgroup>
                          <col style={{ width: '17%' }} />
                          <col style={{ width: '10%' }} />
                          <col style={{ width: '10%' }} />
                          <col style={{ width: '12%' }} />
                          <col />
                          <col />
                          <col />
                          <col style={{ width: '12%' }} />
                          <col style={{ width: '12%' }} />
                        </colgroup>
                        <TableHeader>
                          <TableRow>
                            <TableHead rowSpan={2}>평가등급</TableHead>
                            <TableHead colSpan={2}>VDS</TableHead>
                            <TableHead>AVI</TableHead>
                            <TableHead colSpan={3}>AVC</TableHead>
                            <TableHead>DSRC</TableHead>
                            <TableHead>WAVE<br/>-RSE</TableHead>
                          </TableRow>
                          <TableRow>
                            <TableHead className="th-sub">교통량</TableHead>
                            <TableHead className="th-sub">속도</TableHead>
                            <TableHead className="th-sub">인식률</TableHead>
                            <TableHead className="th-sub">교통량</TableHead>
                            <TableHead className="th-sub">속도</TableHead>
                            <TableHead className="th-sub">차종</TableHead>
                            <TableHead className="th-sub">통신정확도</TableHead>
                            <TableHead className="th-sub">패킷송신 성공률</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableHead>최상급</TableHead>
                            <TableCell>≥95%</TableCell>
                            <TableCell>≥95%</TableCell>
                            <TableCell>≥95%</TableCell>
                            <TableCell>≥95%</TableCell>
                            <TableCell>≥95%</TableCell>
                            <TableCell>≥95%</TableCell>
                            <TableCell>≥98%</TableCell>
                            <TableCell>≥95%</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableHead>상급</TableHead>
                            <TableCell>≥90%</TableCell>
                            <TableCell>≥90%</TableCell>
                            <TableCell>≥85%</TableCell>
                            <TableCell>≥90%</TableCell>
                            <TableCell>≥90%</TableCell>
                            <TableCell>≥90%</TableCell>
                            <TableCell>≥95%</TableCell>
                            <TableCell>≥90%</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableHead>중급</TableHead>
                            <TableCell>≥80%</TableCell>
                            <TableCell>≥80%</TableCell>
                            <TableCell>≥80%</TableCell>
                            <TableCell>≥80%</TableCell>
                            <TableCell>≥80%</TableCell>
                            <TableCell>≥80%</TableCell>
                            <TableCell>≥90%</TableCell>
                            <TableCell>≥85%</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableHead>중하급</TableHead>
                            <TableCell>≥80%</TableCell>
                            <TableCell>≥80%</TableCell>
                            <TableCell>≥80%</TableCell>
                            <TableCell>≥80%</TableCell>
                            <TableCell>≥80%</TableCell>
                            <TableCell>≥80%</TableCell>
                            <TableCell>≥80%</TableCell>
                            <TableCell>≥80%</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>

                    <p className="t4">※ 단, 2010년 9월 이전 설치된 AVI적합기준은 "중급"이상</p>

                    <p className="t3">- 돌발상황 검지시스템/고속축중기</p>

                    <div className="table-detail">
                      <Table>
                        <caption>평가등급 및 적합기준 표(돌발상황 검지시스템/고속축중기)</caption>
                        <colgroup>
                          <col style={{ width: '17%' }} />
                          <col />
                          <col />
                          <col />
                          <col style={{ width: '10%' }} />
                          <col style={{ width: '10%' }} />
                          <col style={{ width: '10%' }} />
                          <col style={{ width: '10%' }} />
                          <col style={{ width: '10%' }} />
                        </colgroup>
                        <TableHeader>
                          <TableRow>
                            <TableHead rowSpan={3}>평가등급</TableHead>
                            <TableHead colSpan={3}>돌발상황 검지시스템*</TableHead>
                            <TableHead colSpan={5}>고속축중기</TableHead>
                          </TableRow>
                          <TableRow>
                            <TableHead className="th-sub" rowSpan={2}>정검지율</TableHead>
                            <TableHead className="th-sub" rowSpan={2}>다른유형 검지율</TableHead>
                            <TableHead className="th-sub" rowSpan={2}>오경보 (일당)</TableHead>
                            <TableHead className="th-sub !h-[20px]" colSpan={2}>중량 정확도</TableHead>
                            <TableHead className="th-sub" rowSpan={2}>회피율</TableHead>
                            <TableHead className="th-sub" rowSpan={2}>인식률</TableHead>
                            <TableHead className="th-sub" rowSpan={2}>매칭정확도</TableHead>
                          </TableRow>
                          <TableRow>
                            <TableHead className="th-sub !h-[20px]">총중량</TableHead>
                            <TableHead className="th-sub !h-[20px]">축하중</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableHead>최상급</TableHead>
                            <TableCell>≥95%</TableCell>
                            <TableCell>&lt;10%</TableCell>
                            <TableCell>0건</TableCell>
                            <TableCell>≥95%</TableCell>
                            <TableCell>≥90%</TableCell>
                            <TableCell>≥90%</TableCell>
                            <TableCell>≥95%</TableCell>
                            <TableCell>100%</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableHead>상급</TableHead>
                            <TableCell>≥90%</TableCell>
                            <TableCell>&lt;15%</TableCell>
                            <TableCell>1건이하</TableCell>
                            <TableCell>≥93%</TableCell>
                            <TableCell>≥85%</TableCell>
                            <TableCell>≥80%</TableCell>
                            <TableCell>≥85%</TableCell>
                            <TableCell>100%</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableHead>중급</TableHead>
                            <TableCell>≥85%</TableCell>
                            <TableCell>&lt;20%</TableCell>
                            <TableCell>2건이하</TableCell>
                            <TableCell>≥90%</TableCell>
                            <TableCell>≥80%</TableCell>
                            <TableCell>-</TableCell>
                            <TableCell>≥80%</TableCell>
                            <TableCell>-</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableHead>중하급</TableHead>
                            <TableCell>&lt;85%</TableCell>
                            <TableCell>≥20%</TableCell>
                            <TableCell>3건이하</TableCell>
                            <TableCell>&lt;90%</TableCell>
                            <TableCell>&lt;80%</TableCell>
                            <TableCell>-</TableCell>
                            <TableCell>&lt;80%</TableCell>
                            <TableCell>-</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>

                    <p className="t4">※ 돌발상황 검지시스템 합격기준은 사업시행자가 결정</p>

                    <div className="ins-box">※  돌발상황 검지시스템 합격기준은 사업시행자가 결정</div>
                    <p className="t3">- SIS 성능평가의 평가등급별 성능기준</p>

                    <div className="table-detail">
                      <Table>
                        <caption>SIS 성능평가의 평가등급별 성능기준 표</caption>
                        <colgroup>
                          <col style={{ width: '17%' }} />
                          <col />
                          <col />
                          <col />
                        </colgroup>
                        <TableHeader>
                          <TableRow>
                            <TableHead>평가등급</TableHead>
                            <TableHead>차로별 방향별 교통량 정확도</TableHead>
                            <TableHead>차로별 방향별 차종분류 정확도</TableHead>
                            <TableHead>차로별 대기행렬 교통량 정확도</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableHead>최상급</TableHead>
                            <TableCell>≥95%</TableCell>
                            <TableCell>≥95%</TableCell>
                            <TableCell>≥95%</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableHead>상급</TableHead>
                            <TableCell>≥90%</TableCell>
                            <TableCell>≥90%</TableCell>
                            <TableCell>≥90%</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableHead>중급</TableHead>
                            <TableCell>≥80%</TableCell>
                            <TableCell>≥80%</TableCell>
                            <TableCell>≥80%</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableHead>중하급</TableHead>
                            <TableCell>&lt;80%</TableCell>
                            <TableCell>&lt;80%</TableCell>
                            <TableCell>&lt;80%</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>

                  </div>

                  {/* cont-box */}
                  <div className="cont-box" id="gotoProcess">
                    <h3>성능평가 절차안내</h3>
                    <h4 className="blt-title"><i></i><span>성능평가 절차</span></h4>
                    <div className="mt-[28px] mb-[10px]">
                      <img src={imgITSProcess} alt="성능평가 절차 안내" />
                      <figcaption className="sr-only">
                        <ol>
                          <li>1. 성능평가 신청/평가비 납부</li>
                          <li>2. 계획수립 (평가일정, 안전관리등)</li>
                          <li>3. 사전준비 현장조사 : 1-2일 소요
                            현장 평가데이터 수집 : 2-4개소/일 (돌발, 고속 제외)
                            자료분류 분석/심사 : 2-4개소/일 (돌발, 고속 제외)
                          </li>
                          <li>4. 시험성적서 발급</li>
                          <li>5. 분석결과 컨설팅</li>
                        </ol>
                      </figcaption>
                    </div>
                  </div>

                  {/* cont-box */}
                  <div className="cont-box" id="gotoQuality">
                    <h3>품질방침</h3>
                    <div className="document-area">
                      <img src={imgDocumentationQuality} alt="" />
                    </div>
                  </div>

                  {/* cont-box */}
                  <div className="cont-box" id="gotoFairness">
                    <h3>공평성 보장 선언문</h3>
                    <div className="document-area">
                      <img src={imgDeclarationFairness} alt="" />
                    </div>
                  </div>

                  {/* cont-box */}
                  <div className="cont-box" id="gotoApply">
                    <h3>평가신청</h3>
                    <h4 className="blt-title"><i></i><span>평가신청안내</span></h4>
                  </div>

                </div>

              </div>
            </div>

            <div className="btn-wrap justify-end">
              <XcButton variant="default" size="lg">
                ITS성능평가 신청하기
              </XcButton>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default sampleITSIntro;