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
import {Table, TableBody, TableCell, TableHead, TableRow} from "@/components/ui/table.tsx";
import SearchSelect from "@/components/ui/searchSelect.tsx";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select.tsx";
import XcInput from "@/components/xc/ui/XcInput";
import XcDatePicker from "@/components/xc/ui/XcDatePicker.tsx";

import ModalFileUpload from "@/components/its/ModalFileUpload";


const sampleITSApplication = () => {
  const [openApplication, setOpenApplication] = useState(true);
  const [agreeAll, setAgreeAll] = useState(false);
  const [openUploadModal, setOpenUploadModal] = useState(false);

  const [startDate, setStartDate] = useState<Date | null>(null);
  
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
                { label: "ITS성능평가 안내/신청", href: "#" },
                { label: "평가신청", current: true },
              ]}
            />
            <div className="">
              <XcButton variant="default" size="md" onClick={() => setOpenApplication(true)}>ITS성능평가 신청 모달 열기</XcButton>
            </div>

            <XcDialog open={openApplication} onOpenChange={setOpenApplication}>
              <XcDialogContent 
                className="application-form" 
                onClose={async () => true}
              >
                <XcDialogHeader>
                  <XcDialogTitle>ITS성능평가 신청</XcDialogTitle>
                </XcDialogHeader>
                <XcDialogBody>

                  {/* app-box */}
                  <div className={`app-box ${boxOpened.info1 ? "opened" : ""}`}>
                    <div className="top">
                      <span className="title">ITS성능평가 신청정보</span>
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
                            <label htmlFor="reportType">성적서종류</label>
                            <div className="w-[calc(50%_-_10px)]">
                              <Select>
                                <SelectTrigger id="reportType">
                                  <SelectValue placeholder="선택" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="시험성적서">시험성적서</SelectItem>
                                  <SelectItem value="검증성적서">검증성적서</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="ins"><i/><p>KOASL성적서 선택 시 VDS, AVI 장비만 신청 가능 하며 변경이 불가 합니다.</p></div>
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="cols">
                            <label htmlFor="orgName">기관명(업체명)</label>
                            <XcInput id="orgName" placeholder="기관명(업체명)을 입력해 주세요." />
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="cols">
                            <label htmlFor="corpNum">법인번호</label>
                            <XcInput id="corpNum" placeholder="" />
                          </div>
                          <div className="cols">
                            <label htmlFor="bizNum">사업자등록번호</label>
                            <XcInput id="bizNum" placeholder="" />
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="cols">
                            <label htmlFor="postCode">우편번호</label>
                            <div className="zip">
                              <XcInput id="postCode" />
                              <XcButton variant="secondary">우편번호 찾기</XcButton>
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
                            <label htmlFor="manager">담당자</label>
                            <XcInput id="manager" />
                          </div>
                          <div className="cols">
                            <label htmlFor="dept">소속 부서명</label>
                            <XcInput id="dept" />
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="cols">
                            <label htmlFor="phone">전화번호</label>
                            <XcInput id="phone" />
                          </div>
                          <div className="cols">
                            <label htmlFor="emailLocal">이메일</label>
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
                            <label htmlFor="applicant">신청인</label>
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
                          <XcButton 
                            variant="default" 
                            className="btn-attach"
                            onClick={() => setOpenUploadModal(true)}
                          >
                            첨부파일 등록/수정
                          </XcButton>
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
                      성능평가전담기관은 신청인의 성능평가 신청서 접수 및 평가 시 연락 및 결과 통보를 위하여 담당자의 개인정보의 수집・이용을 필요로 하며, 
                      수집ㆍ이용 목적 외의 내용으로 개인정보를 활용하지 않을 것입니다. 귀하는 개인정보보호법에 따라 개인정보 수집・이용을 거부할 수 있으나, 
                      본 정보는 성능평가 접수 및 결과통보를 위해 필요하므로 거부 시, 평가 진행이 어려울 수 있습니다.
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
                              ITS 성능평가 신청서 접수, 성능평가 시 연락 및 결과통보
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
                      <p>본인 개인정보 수집・이용에</p>
                      <XcCheckbox
                        label={"정보제공을 동의합니다."}
                        checked={agreeAll}
                        onChange={(v) => setAgreeAll(!!v)}
                      />
                    </div>
                  </div>

                  {/* app-info-block */}
                  <div className="app-info-block">
                    <div className="title">신청대상장비 정보</div>
                    <div>
                      <XcButton variant="secondary" className="btn-app">엑셀 샘플 양식 다운로드</XcButton>
                      <XcButton variant="default" className="btn-app">엑셀등록</XcButton>
                    </div>
                  </div>
                  <div className="ins"><i/><p>장비, 검비방식 선택 시 활성화 된 모든 항목은 필수 입력사항 이오니 누락 없입 입력해 주세요.</p></div>

                  {/* add-block : 추가/삭제 */}
                  <div className="add-block">

                    {/* 신청대상장비 정보등록 #1 */}
                    <div className={`app-box ${boxOpened.equip1 ? "opened" : ""}`}>
                      <div className="top">
                        <span className="title-sub">신청대상장비 정보등록 #1</span>
                        <div>
                          <button className="btn-plus" aria-label="추가" />
                          <button
                            className="btn-ar"
                            aria-label="접고펼치기"
                            onClick={() => toggleBox("equip1")}
                          />
                        </div>
                      </div>
                      <div className="cont">

                        {/* 신청대상장비 정보등록 #1 내용 */}
                        <div className="form-wrap">

                          {/* 장비종류 / 평가종류 / 검지방식 */}
                          <div className="form-row">
                            <div className="cols">
                              <label htmlFor="equipType">장비종류</label>
                              <Select>
                                <SelectTrigger id="equipType">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="VDS">VDS</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="cols">
                              <label htmlFor="evalType">평가종류</label>
                              <Select>
                                <SelectTrigger id="evalType">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="준공평가">준공평가</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="cols">
                              <label htmlFor="detectType">검지방식</label>
                              <Select>
                                <SelectTrigger id="detectType">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="루프검지">루프검지</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          {/* 전후면구분 / 도로종류 / 터널명 */}
                          <div className="form-row">
                            <div className="cols">
                              <label htmlFor="side">전후면구분</label>
                              <Select disabled>
                                <SelectTrigger id="side">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="-">-</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="cols">
                              <label htmlFor="roadType">도로종류</label>
                              <Select>
                                <SelectTrigger id="roadType">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="고속도로">고속도로</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="cols">
                              <label htmlFor="tunnelName">터널명</label>
                              <XcInput id="tunnelName" value="-" disabled />
                            </div>
                          </div>

                          {/* 터널위치 / 관리기관명 / 장비ID */}
                          <div className="form-row">
                            <div className="cols">
                              <label htmlFor="tunnelPosition">터널위치</label>
                              <Select disabled>
                                <SelectTrigger id="deviceId">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="V-0500-0417S-I-8-H">V-0500-0417S-I-8-H</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="cols">
                              <label htmlFor="orgManager">관리기관명</label>
                              <SearchSelect
                                placeholder="관리기관명을 입력해주세요."
                                options={[
                                  "한국도로공사 천안지점",
                                  "한국도로공사 서울지점",
                                  "한국도로공사 부산지점"
                                ]}
                              />
                            </div>

                            <div className="cols">
                              <label htmlFor="deviceId">장비ID</label>
                              <XcInput id="deviceId" value="V-0500-0417S-I-8-H" />
                            </div>
                          </div>

                          {/* RSE ID / 설치일자 / 제조사 */}
                          <div className="form-row">
                            <div className="cols">
                              <label htmlFor="rseId">RSE ID</label>
                              <XcInput id="rseId" value="" disabled />
                            </div>

                            <div className="cols">
                              <label htmlFor="installDate">설치일자</label>
                              <div className="date">
                                <XcDatePicker
                                  id="installDate"
                                  selected={startDate}
                                  onChange={(d) => setStartDate(d)}
                                  placeholderText="YYYY.MM.DD"
                                  dateFormat="yyyy.MM.dd"
                                />
                              </div>
                            </div>

                            <div className="cols">
                              <label htmlFor="manufacturer">제조사</label>
                              <XcInput id="manufacturer" value="유티정보" />
                            </div>
                          </div>

                          {/* 모델명 / 차로수 / 노선명 */}
                          <div className="form-row">
                            <div className="cols">
                              <label htmlFor="modelName">모델명</label>
                              <XcInput id="modelName" value="VDS5000" />
                            </div>

                            <div className="cols">
                              <label htmlFor="laneCount">차로수</label>
                              <XcInput id="laneCount" value="4" />
                            </div>

                            <div className="cols">
                              <label htmlFor="routeName">노선명</label>
                              <XcInput id="routeName" value="서해안고속도로" />
                            </div>
                          </div>

                          {/* 설치위치 */}
                          <div className="form-row">
                            <div className="cols">
                              <label htmlFor="locationRoad">설치위치(도로명주소)</label>
                              <XcInput id="locationRoad" value="서하남대로 127" />
                            </div>
                          </div>

                          {/* 설치이정 / 설치방향 / 설치높이 */}
                          <div className="form-row">
                            <div className="cols">
                              <label htmlFor="installKm">설치이정(km)</label>
                              <XcInput id="installKm" value="100" />
                            </div>

                            <div className="cols">
                              <label htmlFor="installDirection">설치방향</label>
                              <Select>
                                <SelectTrigger id="installDirection">
                                  <SelectValue placeholder="시점" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="시점">시점</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="cols">
                              <label htmlFor="installHeight">설치높이(m)</label>
                              <XcInput id="installHeight" value="-" disabled />
                            </div>
                          </div>

                          {/* 음영영역 / 평가방향 / 평가시간 */}
                          <div className="form-row">
                            <div className="cols">
                              <label htmlFor="shadowArea">음영영역(m)</label>
                              <XcInput id="shadowArea" value="-" disabled />
                            </div>

                            <div className="cols">
                              <label htmlFor="evalDir">평가방향</label>
                              <Select disabled>
                                <SelectTrigger id="evalDir">
                                  <SelectValue placeholder="-" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="-">-</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="cols">
                              <label htmlFor="evalTime">평가시간</label>
                              <Select>
                                <SelectTrigger id="evalTime">
                                  <SelectValue placeholder="주간" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="주간">주간</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                        </div>

                      </div>
                    </div>

                    {/* 신청대상장비 정보등록 #2 */}
                    <div className={`app-box ${boxOpened.equip2 ? "opened" : ""}`}>
                      <div className="top">
                        <span className="title-sub">신청대상장비 정보등록 #2</span>
                        <div>
                          <button className="btn-minus" aria-label="삭제" />
                          <button
                            className="btn-ar"
                            aria-label="접고펼치기"
                            onClick={() => toggleBox("equip2")}
                          />
                        </div>
                      </div>
                      <div className="cont">
                        내용
                      </div>
                    </div>
                  </div>                    

                </XcDialogBody>
                <XcDialogFooter>
                  <XcDialogClose onClose={async () => true}>
                    <XcButton variant="outline" size="lg">취소하기</XcButton>
                  </XcDialogClose>
                  <XcDialogClose>
                    <XcButton variant="secondary" size="lg">임시저장</XcButton>
                    <XcButton variant="default" size="lg">저장및 신청</XcButton>
                  </XcDialogClose>
                </XcDialogFooter>
              </XcDialogContent>
            </XcDialog>
            
          </div>
        </div>
      </div>

      <ModalFileUpload 
        open={openUploadModal} 
        onOpenChange={setOpenUploadModal} 
      />

    </>
  )
}

export default sampleITSApplication;