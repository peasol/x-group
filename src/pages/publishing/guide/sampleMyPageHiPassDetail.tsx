import { useState } from "react";
import XcBreadcrumb from "@/components/xc/ui/XcBreadcrumb";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import XcButton from "@/components/xc/ui/XcButton.tsx";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select.tsx";
import XcInput from "@/components/xc/ui/XcInput";

const sampleMyPageHiPassDetail = () => {

  /* app-box 컨트롤 퍼블용 하드코딩 */
  const [boxOpened, setBoxOpened] = useState({
    info1: true,
    equip1: false,
    equip2: false,
  });

  const toggleBox = (key: keyof typeof boxOpened) => {
    setBoxOpened((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
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
                { label: "나의 평가현황", href: "#" },
                { label: "하이패스 적합등록 신청내역", current: true },
                { label: "상세화면", current: true },
              ]}
            />

            <div className="cont-top">
              <h2>
                <div>하이패스 적합등록 신청내역</div>
              </h2>
            </div>

            <div className="application-form detail-page">

              <div className="title-block">
                접수번호 : 25-10-10_IR-202
              </div>

              {/* detail-box */}
              <div className="detail-box">
                <h3 className="sub-title">하이패스 적합등록 진행 이력</h3>
                <p>서류심사 ‘보류’ 시 메시지를 확인 하신 후 적합등록 신청정보를 보완하여 재신청 해 주세요. </p>
                <div className="table-list">
                  <Table>
                    <caption>하이패스 적합등록 진행 이력 표</caption>
                    <colgroup>
                      <col style={{ width: "13%" }} />
                      <col style={{ width: "16%" }} />
                      <col />
                    </colgroup>
                    <TableHeader>
                      <TableRow>
                        <TableHead>날짜</TableHead>
                        <TableHead>평가진행 현황</TableHead>
                        <TableHead>시험진행 현황</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>2025-10-20</TableCell>
                        <TableCell>기술시험완료</TableCell>
                        <TableCell className="text-left">
                          <p className="leading-[1.5]">
                            기술시험이 완료되었습니다.
                          </p>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2025-10-20</TableCell>
                        <TableCell>기술시험 중</TableCell>
                        <TableCell className="text-left">
                          <p className="leading-[1.5]">
                            기술시험 진행 중입니다. 
                          </p>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2025-10-20</TableCell>
                        <TableCell>적합등록 신청</TableCell>
                        <TableCell className="text-left">
                          <p className="leading-[1.5]">
                            신청 서류심사 대기중 입니다.
                          </p>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><span className="font-semibold text-[#EC4651]">2025-10-20</span></TableCell>
                        <TableCell><span className="font-semibold text-[#EC4651]">반려</span></TableCell>
                        <TableCell className="text-left">
                          <p className="font-semibold text-[#EC4651] leading-[1.5]">
                            통신적합성 시험성적서 첨부서류가 누락되었습니다. <br/>
                            보완하여 재신청 해 주세요.
                          </p>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2025-10-20</TableCell>
                        <TableCell>적합등록 신청</TableCell>
                        <TableCell className="text-left">
                          <p className="leading-[1.5]">
                            신청 서류심사 대기중 입니다.
                          </p>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>

              {/* app-box */}
              <div className={`app-box ${boxOpened.info1 ? "opened" : ""}`}>
                <div className="top">
                  <span className="title">하이패스 적합등록 신청정보</span>
                  <div>
                    <button
                      className="btn-ar"
                      aria-label="접고펼치기"
                      onClick={() => toggleBox("info1")}
                    />
                  </div>
                </div>
                <div className="cont">
                  
                  {/* form-wrap */}
                  <div className="form-wrap">

                    <div className="form-row">
                      <div className="cols">
                        <label htmlFor="orgName">기관명(업체명)</label>
                        <div className="input-btn-group">
                          <XcInput id="orgName" disabled />
                          <XcButton variant="secondary" className="min-w-[140px]" disabled>기관검색</XcButton>
                        </div>
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="cols">
                        <label htmlFor="corpNum">법인번호</label>
                        <XcInput id="corpNum" onlyNumber disabled />
                      </div>
                      <div className="cols">
                        <label htmlFor="bizNum">사업자등록번호</label>
                        <XcInput id="bizNum" onlyNumber disabled />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="cols">
                        <label htmlFor="postCode">우편번호</label>
                        <div className="zip">
                          <XcInput id="postCode" onlyNumber disabled />
                          <XcButton variant="secondary" className="min-w-[140px]" disabled>우편번호 찾기</XcButton>
                        </div>
                      </div>
                      <div className="cols">
                        <div className="addr-wrap">
                          <div>
                            <label htmlFor="addr1">주소1</label>
                            <div>
                              <XcInput id="addr1" disabled />
                            </div>
                          </div>
                          <div>
                            <label htmlFor="addr2">주소2</label>
                            <div>
                              <XcInput id="addr2" disabled />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="cols">
                        <label htmlFor="representative">대표자</label>
                        <XcInput id="representative" disabled />
                      </div>
                      <div className="cols">
                        <label htmlFor="fax">팩스번호</label>
                        <XcInput id="fax" onlyNumber disabled />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="cols">
                        <label htmlFor="manager">담당자</label>
                        <XcInput id="manager" disabled />
                      </div>
                      <div className="cols">
                        <label htmlFor="department">소속 부서명(관리부서)</label>
                        <XcInput id="department" disabled />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="cols">
                        <label htmlFor="phone">전화번호</label>
                        <XcInput id="phone" onlyNumber disabled />
                      </div>
                      <div className="cols">
                        <label htmlFor="emailLocal">이메일</label>
                        <div className="email">
                          <XcInput id="emailLocal" disabled />
                          <span>@</span>
                          <Select disabled>
                            <SelectTrigger id="emailDomain">
                              <SelectValue placeholder="선택" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="gmail.com">gmail.com</SelectItem>
                              <SelectItem value="naver.com">naver.com</SelectItem>
                              <SelectItem value="daum.net">daum.net</SelectItem>
                              <SelectItem value="custom">직접입력</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="cols">
                        <label htmlFor="applicant">신청인</label>
                        <XcInput id="applicant" disabled />
                      </div>
                    </div>
                  </div>

                  {/* 첨부파일 */}
                  <div className="attach-files">
                    <div className="title"><span className="text-[#ec4651]">*</span> 첨부파일</div>
                    <ul>
                      <li>
                        <p>사용자 작성 신청서01 [pdf, 1.2MB]</p>
                        <div>
                          <button className="btns">
                            <span>다운로드</span><i className="ic-download"/>
                          </button>
                          <button className="btns">
                            <span>바로보기</span><i className="ic-window"/>
                          </button>
                        </div>
                      </li>
                      <li>
                        <p>사업자등록증02_사본 [pdf, 1.2MB]</p>
                        <div>
                          <button className="btns">
                            <span>다운로드</span><i className="ic-download"/>
                          </button>
                          <button className="btns">
                            <span>바로보기</span><i className="ic-window"/>
                          </button>
                        </div>
                      </li>
                    </ul>
                    <div className="flex justify-end mt-[12px]">
                      <XcButton variant="default" className="btn-attach" disabled>첨부파일 수정</XcButton>
                    </div>
                  </div>
                </div>
              </div>

              <div className="title-block text-large">
                적합등록 대상정보
              </div>

              {/* add-block */}
              <div className="add-block">

                <div className="app-box opened">
                  {/* top detail 영역 : 불필요시 삭제 */}
                  <div className="top detail">
                    <div className="top-sub">
                      <span className="title-sub">접수번호 - 25-10-10_IR-202</span>
                    </div>
                    <div className="top-sub-status mb-[0]">
                      <dl>
                        <dt>진행현황</dt>  
                        <dd>기술시험 완료</dd>
                      </dl>
                    </div>
                  </div>

                  <div className="cont pt-[36px]">

                    <div className="form-wrap">
                      <div className="title">단말기 필수정보</div>

                      {/* 적합평가 구분 / 시험종류 / OBU 모델명 */}
                      <div className="form-row">
                        <div className="cols">
                          <label htmlFor="evalTarget">적합평가 구분</label>
                          <Select disabled>
                            <SelectTrigger id="evalTarget">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="일반단말기">일반단말기</SelectItem>
                              <SelectItem value="감면단말기">감면단말기</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="cols">
                          <label htmlFor="testType">시험종류</label>
                          <Select disabled>
                            <SelectTrigger id="testType">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="신규인증">신규인증</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="cols">
                          <label htmlFor="obuModel">OBU 모델명</label>
                          <XcInput id="obuModel" value="감면단말기" disabled />
                        </div>
                      </div>

                      {/* 제조사 / 제조국 / 단말기 통신방식 */}
                      <div className="form-row">
                        <div className="cols">
                          <label htmlFor="maker">제조사</label>
                          <XcInput id="maker" disabled />
                        </div>

                        <div className="cols">
                          <label htmlFor="country">제조국</label>
                          <XcInput id="country" disabled />
                        </div>

                        <div className="cols">
                          <label htmlFor="communication">단말기 통신방식</label>
                          <Select disabled>
                            <SelectTrigger id="communication">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="적외선(IR)">적외선(IR)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* 사용자 인터페이스 / 단말기 형태 / 단말기 형태 구분 */}
                      <div className="form-row">
                        <div className="cols">
                          <label htmlFor="uiType">사용자 인터페이스</label>
                          <Select disabled>
                            <SelectTrigger id="uiType">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="음성+화면">음성+화면</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="cols">
                          <label htmlFor="deviceType">단말기 형태</label>
                          <Select disabled>
                            <SelectTrigger id="deviceType">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="차량출고 전 장착형">차량출고 전 장착형</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="cols">
                          <label htmlFor="deviceType2">단말기 형태 구분</label>
                          <Select disabled>
                            <SelectTrigger id="deviceType2">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="룸미러">룸미러</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* 전원공급 방식 / 적용가능 전자카드(전자카드 샘플구분) / BIU 모델명 */}
                      <div className="form-row">
                        <div className="cols">
                          <label htmlFor="powerSupply">전원공급 방식</label>
                          <Select disabled>
                            <SelectTrigger id="powerSupply">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="차량용전원">차량용전원</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="cols">
                          <label htmlFor="ElecCard">적용가능 전자카드(전자카드 샘플구분)</label>
                          <Select disabled>
                            <SelectTrigger id="ElecCard">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="선불+후불">선불+후불</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="cols">
                          <label htmlFor="biuModel">BIU 모델명</label>
                          <XcInput id="biuModel" disabled />
                        </div>
                      </div>

                      {/* 생체 인식 장치 통신 방식 코드 / 생체 인식 장치 인식 유형 코드 / 생체 인식 장치 최대 등록수 */}
                      <div className="form-row">
                        <div className="cols">
                          <label htmlFor="bodyRecognition1">생체 인식 장치 통신 방식 코드</label>
                          <Select disabled>
                            <SelectTrigger id="bodyRecognition1">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="유선+무선">유선+무선</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="cols">
                          <label htmlFor="bodyRecognition2">생체 인식 장치 인식 유형 코드</label>
                          <Select disabled>
                            <SelectTrigger id="bodyRecognition2">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="지문인식">지문인식</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="cols">
                          <label htmlFor="bodyRecognition3">생체 인식 장치 최대 등록수</label>
                          <XcInput id="bodyRecognition3" onlyNumber disabled />
                        </div>
                      </div>

                      {/* 생체 인식 장치 제조사명 / PC 연결 장치 코드 / 안내 장치 코드 */}
                      <div className="form-row">
                        <div className="cols">
                          <label htmlFor="bodyRecognition4">생체 인식 장치 제조사명</label>
                          <XcInput id="bodyRecognition4" disabled />
                        </div>

                        <div className="cols">
                          <label htmlFor="deviceCode1">PC 연결 장치 코드</label>
                          <Select disabled>
                            <SelectTrigger id="deviceCode1">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="BIU">BIU</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="cols">
                          <label htmlFor="deviceCode2">안내 장치 코드</label>
                          <Select disabled>
                            <SelectTrigger id="deviceCode2">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="BIU">BIU</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* 기타 내용 */}
                      <div className="form-row">
                        <div className="cols">
                          <label htmlFor="contEtc">기타 내용</label>
                          <XcInput id="contEtc" disabled />
                        </div>
                      </div>

                      {/* 부가기능 */}
                      <div className="form-row">
                        <div className="cols">
                          <label htmlFor="addFeature">부가기능</label>
                          <XcInput id="addFeature" disabled />
                        </div>
                      </div>

                      {/* 소프트웨어 특성 */}
                      <div className="form-row">
                        <div className="cols">
                          <label htmlFor="softwareCha">소프트웨어 특성</label>
                          <XcInput id="softwareCha" disabled />
                        </div>
                      </div>

                    </div>

                    {/* 
                      =============== 
                      여기서부터 2단계
                      =============== 
                    */}
                    <div className="form-wrap gap-[0]">
                      <div className="title">제품규격</div>
                      <div className="table-list">
                        <Table>
                          <caption>제품규격 표</caption>
                          <colgroup>
                            <col style={{ width: "20%" }} />
                            <col />
                            <col />
                          </colgroup>
                          <TableHeader>
                            <TableRow>
                              <TableHead>항목</TableHead>
                              <TableHead>주요 구성품</TableHead>
                              <TableHead>비고</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell>
                                <XcInput placeholder="placeholder" disabled />
                              </TableCell>
                              <TableCell>
                                <XcInput placeholder="placeholder" disabled />
                              </TableCell>
                              <TableCell>
                                <XcInput placeholder="placeholder" disabled />
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>
                                <XcInput placeholder="placeholder" disabled />
                              </TableCell>
                              <TableCell>
                                <XcInput placeholder="placeholder" disabled />
                              </TableCell>
                              <TableCell>
                                <XcInput placeholder="placeholder" disabled />
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>
                                <XcInput placeholder="placeholder" disabled />
                              </TableCell>
                              <TableCell>
                                <XcInput placeholder="placeholder" disabled />
                              </TableCell>
                              <TableCell>
                                <XcInput placeholder="placeholder" disabled />
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>

                    <div className="form-wrap gap-[0]">
                      <div className="title">단말기 시료 목록</div>
                      <div className="table-list">
                        <Table>
                          <caption>단말기 시료 목록 표</caption>
                          <colgroup>
                            <col style={{ width: "20%" }} />
                            <col />
                            <col style={{ width: "20%" }} />
                            <col style={{ width: "10%" }} />
                          </colgroup>
                          <TableHeader>
                            <TableRow>
                              <TableHead>제조번호</TableHead>
                              <TableHead>발행번호</TableHead>
                              <TableHead>차종</TableHead>
                              <TableHead>사진등록</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell>
                                <XcInput placeholder="placeholder" disabled />
                              </TableCell>
                              <TableCell>
                                <XcInput placeholder="placeholder" disabled />
                              </TableCell>
                              <TableCell>
                                <Select disabled>
                                  <SelectTrigger>
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="1종">1종</SelectItem>
                                  </SelectContent>
                                </Select>
                              </TableCell>
                              <TableCell>
                                <XcButton className="w-[70px]" variant="secondary" disabled>찾기</XcButton>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>

                    <div className="form-wrap gap-[0]">
                      <div className="title">전자카드 정보입력</div>
                      <div className="table-list">
                        <Table>
                          <caption>전자카드 정보입력 표</caption>
                          <colgroup>
                            <col />
                            <col style={{ width: "18%" }} />
                            <col style={{ width: "18%" }} />
                            <col style={{ width: "22%" }} />
                            <col style={{ width: "10%" }} />
                          </colgroup>
                          <TableHeader>
                            <TableRow>
                              <TableHead>전자카드번호</TableHead>
                              <TableHead>비고</TableHead>
                              <TableHead>구분</TableHead>
                              <TableHead>사용구분</TableHead>
                              <TableHead>사진등록</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell>
                                <XcInput placeholder="placeholder" disabled />
                              </TableCell>
                              <TableCell>
                                <XcInput placeholder="placeholder" disabled />
                              </TableCell>
                              <TableCell>
                                <Select disabled>
                                  <SelectTrigger>
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="일반선불">일반선불</SelectItem>
                                  </SelectContent>
                                </Select>
                              </TableCell>
                              <TableCell>
                                <Select disabled>
                                  <SelectTrigger>
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="기능/성능(Test)">기능/성능(Test)</SelectItem>
                                  </SelectContent>
                                </Select>
                              </TableCell>
                              <TableCell>
                                <XcButton className="w-[70px]" variant="secondary" disabled>찾기</XcButton>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>

                    <div className="form-wrap gap-[0]">
                      <div className="title">적합등록 대상제품 사진</div>
                      <div className="form-row">
                        <div className="cols">
                          <label htmlFor="device1">단말기 전면</label>
                          <div className="flex gap-[12px]">
                            <XcInput id="device1" value="" disabled />
                            <XcButton className="w-[70px]" variant="secondary" disabled>찾기</XcButton>
                          </div>
                        </div>
                        <div className="cols">
                          <label htmlFor="device2">단말기 후면</label>
                          <div className="flex gap-[12px]">
                            <XcInput id="device2" value="" disabled />
                            <XcButton className="w-[70px]" variant="secondary" disabled>찾기</XcButton>
                          </div>
                        </div>
                        <div className="cols">
                          <label htmlFor="scard">시료카드</label>
                          <div className="flex gap-[12px]">
                            <XcInput id="scard" value="" disabled />
                            <XcButton className="w-[70px]" variant="secondary" disabled>찾기</XcButton>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>

            <div className="btn-wrap justify-end">
              <XcButton variant="default" size="lg" className="min-w-[81px]">
                목록
              </XcButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default sampleMyPageHiPassDetail;
