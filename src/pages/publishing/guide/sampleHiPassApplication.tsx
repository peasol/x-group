import { useState } from "react";
import XcBreadcrumb from "@/components/xc/ui/XcBreadcrumb";
import XcButton from "@/components/xc/ui/XcButton.tsx";
import XcCheckbox from "@/components/xc/ui/XcCheckbox.tsx";
import {
  XcDialog,
  XcDialogContent,
  XcDialogHeader,
  XcDialogTitle,
  XcDialogBody,
  XcDialogFooter,
  XcDialogClose,
} from "@/components/xc/ui/XcDialog";
import {Table, TableBody, TableCell, TableHeader, TableHead, TableRow} from "@/components/ui/table.tsx";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select.tsx";
import XcInput from "@/components/xc/ui/XcInput";

const sampleHiPassApplication = () => {
  const [openApplication, setOpenApplication] = useState(true);
  const [agreeAll, setAgreeAll] = useState(false);

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
                { label: "하이패스 적합등록 안내/신청", href: "#" },
                { label: "평가신청", current: true },
              ]}
            />
            <div className="">
              <XcButton variant="default" size="md" onClick={() => setOpenApplication(true)}>하이패스 적합등록 신청 모달 열기</XcButton>
            </div>

            <XcDialog open={openApplication} onOpenChange={setOpenApplication}>
              <XcDialogContent 
                className="application-form" 
                onClose={async () => true}
              >
                <XcDialogHeader>
                  <XcDialogTitle>하이패스 적합등록 신청</XcDialogTitle>
                </XcDialogHeader>
                <XcDialogBody>

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
                            <label htmlFor="orgName"><span className="required">*</span>기관명(업체명)</label>
                            <div className="input-btn-group">
                              <XcInput id="orgName" placeholder="기관명(업체명)을 입력해 주세요." />
                              <XcButton variant="secondary" className="min-w-[140px]">기관검색</XcButton>
                            </div>
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="cols">
                            <label htmlFor="corpNum"><span className="required">*</span>법인번호</label>
                            <XcInput id="corpNum" onlyNumber />
                          </div>
                          <div className="cols">
                            <label htmlFor="bizNum"><span className="required">*</span>사업자등록번호</label>
                            <XcInput id="bizNum" onlyNumber />
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="cols">
                            <label htmlFor="postCode"><span className="required">*</span>우편번호</label>
                            <div className="zip">
                              <XcInput id="postCode" onlyNumber />
                              <XcButton variant="secondary" className="min-w-[140px]">우편번호 찾기</XcButton>
                            </div>
                          </div>
                          <div className="cols">
                            <div className="addr-wrap">
                              <div>
                                <label htmlFor="addr1">주소1</label>
                                <div>
                                  <XcInput id="addr1" placeholder="주소" />
                                </div>
                              </div>
                              <div>
                                <label htmlFor="addr2">주소2</label>
                                <div>
                                  <XcInput id="addr2" placeholder="상세주소" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="cols">
                            <label htmlFor="representative"><span className="required">*</span>대표자</label>
                            <XcInput id="representative" />
                          </div>
                          <div className="cols">
                            <label htmlFor="fax">팩스번호</label>
                            <XcInput id="fax" onlyNumber />
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="cols">
                            <label htmlFor="manager"><span className="required">*</span>담당자</label>
                            <XcInput id="manager" />
                          </div>
                          <div className="cols">
                            <label htmlFor="department">소속 부서명(관리부서)</label>
                            <XcInput id="department" />
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="cols">
                            <label htmlFor="phone"><span className="required">*</span>전화번호</label>
                            <XcInput id="phone" onlyNumber />
                          </div>
                          <div className="cols">
                            <label htmlFor="emailLocal"><span className="required">*</span>이메일</label>
                            <div className="email">
                              <XcInput id="emailLocal" />
                              <span>@</span>
                              <Select>
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
                            <label htmlFor="applicant"><span className="required">*</span>신청인</label>
                            <XcInput id="applicant" />
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
                          <li>
                            <p>평가대상 장비 모델명, 구성도 [pdf, 1.2MB]</p>
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
                            <p>평가대상 장비, 시스템, 서비스 현황 [pdf, 1.2MB]</p>
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
                            <p>ITS 성능평가 동의서 [pdf, 1.2MB]</p>
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
                            <p>기타 전담기관이 요청하는 서류 [pdf, 1.2MB]</p>
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
                          <XcButton variant="default" className="btn-attach">첨부파일 수정</XcButton>
                        </div>
                      </div>
                      
                    </div>
                  </div>

                  {/* agreement-block */}
                  <div className="agreement-block">
                    <div className="title">
                      <i/>
                      <span>개인정보 수집 및 이용 동의</span>
                    </div>
                    <p>
                      적합등록기관은 신청인의 등록신청서 접수 및 등록 시 연락 및 결과 통보를 위하여 담당자의 개인정보 수집・이용을 필요로 하며, 
                      수집・이용 목적 외의 내용으로 개인정보를 활용하지 않을 것입니다. 귀하는 개인정보보호법에 따라 개인정보 수집・이용을 거부할 수 있으나, 
                      본 정보는 등록신청 접수 및 결과 통보를 위해 필요하므로 거부 시, 신청 처리가 어려울 수 있습니다.
                    </p>
                    <div className="table-detail">
                      <Table>
                        <caption>개인정보 수집 안내 표</caption>
                        <colgroup>
                          <col style={{ width: '18%' }} />
                          <col />
                        </colgroup>
                        <TableBody>
                          <TableRow>
                            <TableHead>수집목적</TableHead>
                            <TableCell className="text-left">
                              적합등록신청서 접수, 등록 시 연락 및 결과통보
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableHead>수집항목</TableHead>
                            <TableCell className="text-left">
                              이름,전화, 팩스, 이메일
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableHead>보류기간</TableHead>
                            <TableCell className="text-left">
                              수집・이용 동의일로부터 성적서 보존기간까지
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                    <div className="agreement-bottom">
                      <p>「통행료자동지불시스템 단말기 적합등록 업무기준」 제4조에 따라 위와 같이 적합등록을 신청합니다.</p>
                      <XcCheckbox
                        label={"정보제공을 동의합니다."}
                        checked={agreeAll}
                        onChange={(v) => setAgreeAll(!!v)}
                      />
                    </div>
                  </div>

                  {/* app-info-block */}
                  <div className="app-info-block">
                    <div className="title">적합등록 대상 정보</div>
                  </div>

                  <div className="add-block">
                    <div className="app-box opened">
                      <div className="cont pt-[36px]">
                        
                        <div className="form-wrap">
                          <div className="title">단말기 필수정보</div>

                          {/* 적합평가 구분 / 시험종류 / OBU 모델명 */}
                          <div className="form-row">
                            <div className="cols">
                              <label htmlFor="evalTarget"><span className="required">*</span>적합평가 구분</label>
                              <Select>
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
                              <label htmlFor="testType"><span className="required">*</span>시험종류</label>
                              <Select>
                                <SelectTrigger id="testType">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="신규인증">신규인증</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="cols">
                              <label htmlFor="obuModel"><span className="required">*</span>OBU 모델명</label>
                              <XcInput id="obuModel" value="감면단말기" />
                            </div>
                          </div>

                          {/* 제조사 / 제조국 / 단말기 통신방식 */}
                          <div className="form-row">
                            <div className="cols">
                              <label htmlFor="maker"><span className="required">*</span>제조사</label>
                              <XcInput id="maker" />
                            </div>

                            <div className="cols">
                              <label htmlFor="country">제조국</label>
                              <XcInput id="country" />
                            </div>

                            <div className="cols">
                              <label htmlFor="communication"><span className="required">*</span>단말기 통신방식</label>
                              <Select>
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
                              <label htmlFor="uiType"><span className="required">*</span>사용자 인터페이스</label>
                              <Select>
                                <SelectTrigger id="uiType">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="음성+화면">음성+화면</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="cols">
                              <label htmlFor="deviceType"><span className="required">*</span>단말기 형태</label>
                              <Select>
                                <SelectTrigger id="deviceType">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="차량출고 전 장착형">차량출고 전 장착형</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="cols">
                              <label htmlFor="deviceType2"><span className="required">*</span>단말기 형태 구분</label>
                              <Select>
                                <SelectTrigger id="deviceType2">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="룸미러">룸미러</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          {/* 전원공급 방식 / 적용가능 전자카드(전자카드 샘플구분) */}
                          <div className="form-row">
                            <div className="cols">
                              <label htmlFor="powerSupply"><span className="required">*</span>전원공급 방식</label>
                              <Select>
                                <SelectTrigger id="powerSupply">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="차량용전원">차량용전원</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="cols">
                              <label htmlFor="ElecCard"><span className="required">*</span>적용가능 전자카드(전자카드 샘플구분)</label>
                              <Select>
                                <SelectTrigger id="ElecCard">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="선불+후불">선불+후불</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="cols">
                            </div>
                          </div>

                          <div className="title mt-[25px]">감면단말기 선택 시 필수 입력 정보 입니다.</div>

                          {/* BIU 모델명 / 생체 인식 장치 통신 방식 코드 / 생체 인식 장치 인식 유형 코드 */}
                          <div className="form-row">
                            <div className="cols">
                              <label htmlFor="biuModel"><span className="required">*</span>BIU 모델명</label>
                              <XcInput id="biuModel" placeholder="내용을 입력해 주세요." />
                            </div>

                            <div className="cols">
                              <label htmlFor="bodyRecognition1"><span className="required">*</span>생체 인식 장치 통신 방식 코드</label>
                              <Select>
                                <SelectTrigger id="bodyRecognition1">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="유선+무선">유선+무선</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="cols">
                              <label htmlFor="bodyRecognition2"><span className="required">*</span>생체 인식 장치 인식 유형 코드</label>
                              <Select>
                                <SelectTrigger id="bodyRecognition2">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="지문인식">지문인식</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          {/* 생체 인식 장치 최대 등록수 / 생체 인식 장치 제조사명 / PC 연결 장치 코드 */}
                          <div className="form-row">
                            <div className="cols">
                              <label htmlFor="bodyRecognition3"><span className="required">*</span>생체 인식 장치 최대 등록수</label>
                              <XcInput id="bodyRecognition3" placeholder="숫자를 입력해 주세요." onlyNumber />
                            </div>

                            <div className="cols">
                              <label htmlFor="bodyRecognition4">생체 인식 장치 제조사명</label>
                              <XcInput id="bodyRecognition4" />
                            </div>

                            <div className="cols">
                              <label htmlFor="deviceCode1"><span className="required">*</span>PC 연결 장치 코드</label>
                              <Select>
                                <SelectTrigger id="deviceCode1">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="BIU">BIU</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          {/* 안내 장치 코드 */}
                          <div className="form-row">
                            <div className="cols">
                              <label htmlFor="deviceCode2"><span className="required">*</span>안내 장치 코드</label>
                              <Select>
                                <SelectTrigger id="deviceCode2">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="BIU">BIU</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="cols">
                            </div>

                            <div className="cols">
                            </div>
                          </div>

                          <div className="title mt-[25px]">기타 특성정보</div>

                          {/* 기타 내용 */}
                          <div className="form-row">
                            <div className="cols">
                              <label htmlFor="contEtc">기타 내용</label>
                              <XcInput id="contEtc" placeholder="내용을 입력해 주세요." />
                            </div>
                          </div>

                          {/* 부가기능 */}
                          <div className="form-row">
                            <div className="cols">
                              <label htmlFor="addFeature">부가기능</label>
                              <XcInput id="addFeature" placeholder="내용을 입력해 주세요." />
                            </div>
                          </div>

                          {/* 소프트웨어 특성 */}
                          <div className="form-row">
                            <div className="cols">
                              <label htmlFor="softwareCha">소프트웨어 특성</label>
                              <XcInput id="softwareCha" placeholder="내용을 입력해 주세요." />
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
                                    <XcInput placeholder="placeholder" />
                                  </TableCell>
                                  <TableCell>
                                    <XcInput placeholder="placeholder" />
                                  </TableCell>
                                  <TableCell>
                                    <XcInput placeholder="placeholder" />
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>
                                    <XcInput placeholder="placeholder" />
                                  </TableCell>
                                  <TableCell>
                                    <XcInput placeholder="placeholder" />
                                  </TableCell>
                                  <TableCell>
                                    <XcInput placeholder="placeholder" />
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>
                                    <XcInput placeholder="placeholder" />
                                  </TableCell>
                                  <TableCell>
                                    <XcInput placeholder="placeholder" />
                                  </TableCell>
                                  <TableCell>
                                    <XcInput placeholder="placeholder" />
                                  </TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                          </div>
                        </div>

                        <div className="form-wrap gap-[0]">
                          <div className="title"><span className="required">*</span>단말기 시료 목록</div>
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
                                    <XcInput placeholder="placeholder" />
                                  </TableCell>
                                  <TableCell>
                                    <XcInput placeholder="placeholder" />
                                  </TableCell>
                                  <TableCell>
                                    <Select>
                                      <SelectTrigger>
                                        <SelectValue />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="1종">1종</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </TableCell>
                                  <TableCell>
                                    <XcButton className="w-[70px]" variant="secondary">찾기</XcButton>
                                  </TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                          </div>
                        </div>

                        <div className="form-wrap gap-[0]">
                          <div className="title"><span className="required">*</span>전자카드 정보입력</div>
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
                                    <XcInput placeholder="placeholder" />
                                  </TableCell>
                                  <TableCell>
                                    <XcInput placeholder="placeholder" />
                                  </TableCell>
                                  <TableCell>
                                    <Select>
                                      <SelectTrigger>
                                        <SelectValue />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="일반선불">일반선불</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </TableCell>
                                  <TableCell>
                                    <Select>
                                      <SelectTrigger>
                                        <SelectValue />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="기능/성능(Test)">기능/성능(Test)</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </TableCell>
                                  <TableCell>
                                    <XcButton className="w-[70px]" variant="secondary">찾기</XcButton>
                                  </TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                          </div>
                        </div>

                        <div className="form-wrap gap-[0]">
                          <div className="title"><span className="required">*</span>적합등록 대상제품 전체사진</div>
                          <div className="form-row">
                            <div className="cols">
                              <label htmlFor="device1">단말기 전면</label>
                              <div className="flex gap-[12px]">
                                <XcInput id="device1" value="" />
                                <XcButton className="w-[70px]" variant="secondary">찾기</XcButton>
                              </div>
                            </div>
                            <div className="cols">
                              <label htmlFor="device2">단말기 후면</label>
                              <div className="flex gap-[12px]">
                                <XcInput id="device2" value="" />
                                <XcButton className="w-[70px]" variant="secondary">찾기</XcButton>
                              </div>
                            </div>
                            <div className="cols">
                              <label htmlFor="scard">시료카드</label>
                              <div className="flex gap-[12px]">
                                <XcInput id="scard" value="" />
                                <XcButton className="w-[70px]" variant="secondary">찾기</XcButton>
                              </div>
                            </div>
                          </div>
                          <div className="mt-[12px] px-[40px] py-[36px] bg-[#F8F8F8] rounded-[12px]">
                            ※  단말기 사진은 시료로 제출되는 전체 제품이 보일 수 있도록 등록해 주세요.<br/>
                            ※ 전자카드는 카드종류(선불, 후불, 선후불) 中 1개 종류로 제출해 주세요.<br/>
                            ※ 신청기관은 등록신청 전에 전자카드의 성능 및 품질 등을 확인하고 등록기관에 제출해 주세요.
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>                    

                </XcDialogBody>
                <XcDialogFooter>
                  <XcDialogClose onClose={async () => true}>
                    <XcButton variant="preset-02" size="lg">이전</XcButton>
                    <XcButton variant="outline" size="lg">취소하기</XcButton>
                  </XcDialogClose>
                  <XcDialogClose>
                    <XcButton variant="secondary" size="lg">임시저장</XcButton>
                    <XcButton variant="default" size="lg" className="w-[114px]">저장 및 신청</XcButton>
                  </XcDialogClose>
                </XcDialogFooter>
              </XcDialogContent>
            </XcDialog>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default sampleHiPassApplication;