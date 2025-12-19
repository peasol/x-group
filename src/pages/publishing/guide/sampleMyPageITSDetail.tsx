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
import SearchSelect from "@/components/ui/searchSelect.tsx";
import XcDatePicker from "@/components/xc/ui/XcDatePicker.tsx";
import {
  XcDialog,
  XcDialogContent,
  XcDialogHeader,
  XcDialogTitle,
  XcDialogBody,
  XcDialogClose,
} from "@/components/xc/ui/XcDialog";

// 성적서 임시이미지
import tempImgForm from "@/assets/images/temp/temp_img_form.png";

const sampleMyPageITSDetail = () => {

  const [startDate, setStartDate] = useState<Date | null>(null);

  /* 성적서 다운로드 모달 */
  const [openDownloadModal, setOpenDownloadModal] = useState(false);

  /* app-box 컨트롤 퍼블용 하드코딩 */
  const [boxOpened, setBoxOpened] = useState({
    info1: false,
    equip1: true,
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
                { label: "ITS성능평가 신청내역", href: "#" },
                { label: "상세화면", current: true },
              ]}
            />

            <div className="cont-top">
              <h2>
                <div>ITS성능평가 신청내역</div>
              </h2>
            </div>

            <div className="application-form detail-page">

              <div className="title-block">
                접수번호 : 25-R-30
              </div>

              {/* detail-box */}
              <div className="detail-box">
                <h3 className="sub-title">대상장비 평가진행 이력</h3>
                <div className="table-list">
                  <Table>
                    <caption>대상장비 평가진행 이력 표</caption>
                    <colgroup>
                      <col style={{ width: "13%" }} />
                      <col style={{ width: "16%" }} />
                      <col style={{ width: "16%" }} />
                      <col />
                    </colgroup>
                    <TableHeader>
                      <TableRow>
                        <TableHead>날짜</TableHead>
                        <TableHead>장비평가ID</TableHead>
                        <TableHead>평가진행 현황</TableHead>
                        <TableHead>시험진행 현황</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>2025-10-20</TableCell>
                        <TableCell>28-000012-1-0</TableCell>
                        <TableCell>발급완료</TableCell>
                        <TableCell className="text-left">
                          <p className="leading-[1.5]">
                            성적서 발급이이 완료되었습니다.
                          </p>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2025-10-20</TableCell>
                        <TableCell>28-000012-1-0</TableCell>
                        <TableCell>수집완료</TableCell>
                        <TableCell className="text-left">
                          <p className="leading-[1.5]">
                            데이터수집이 완료 되었습니다.
                          </p>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2025-10-20</TableCell>
                        <TableCell>28-000012-1-0</TableCell>
                        <TableCell>신청등록</TableCell>
                        <TableCell className="text-left">
                          <p className="leading-[1.5]">
                            신청 서류심사 대기중 입니다.
                          </p>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><span className="font-semibold text-[#EC4651]">2025-10-20</span></TableCell>
                        <TableCell><span className="font-semibold text-[#EC4651]">28-000012-1-0</span></TableCell>
                        <TableCell><span className="font-semibold text-[#EC4651]">신청반려</span></TableCell>
                        <TableCell className="text-left">
                          <p className="font-semibold text-[#EC4651] leading-[1.5]">
                            통신적합성 시험성적서 첨부서류가 누락되었습니다. <br/>
                            보완하여 재신청 해 주세요.
                          </p>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2025-10-20</TableCell>
                        <TableCell>28-000012-1-0</TableCell>
                        <TableCell>신청등록</TableCell>
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
                        <label htmlFor="reportType">신청 종류</label>
                        <div className="w-[calc(50%_-_10px)]">
                          <Select disabled>
                            <SelectTrigger id="reportType">
                              <SelectValue placeholder="선택" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="시험성적서">시험성적서</SelectItem>
                              <SelectItem value="검증성적서">검증성적서</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="cols">
                        <label htmlFor="orgName">기관명(업체명)</label>
                        <XcInput id="orgName" value="아이트로닉스" placeholder="기관명(업체명)을 입력해 주세요." disabled />
                      </div>
                      <div className="cols">
                        <label htmlFor="bizNum">사업자등록번호</label>
                        <XcInput id="bizNum" placeholder="" disabled />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="cols">
                        <label htmlFor="postCode">우편번호</label>
                        <div className="zip">
                          <XcInput id="postCode" disabled />
                          <XcButton variant="secondary" disabled>우편번호 찾기</XcButton>
                        </div>
                      </div>
                      <div className="cols">
                        <div className="addr-wrap">
                          <div>
                            <label htmlFor="addr1">주소1</label>
                            <div>
                              <XcInput id="addr1" placeholder="주소" disabled />
                            </div>
                          </div>
                          <div>
                            <label htmlFor="addr2">주소2</label>
                            <div>
                              <XcInput id="addr2" placeholder="상세주소" disabled />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="cols">
                        <label htmlFor="appName">성명(명칭)</label>
                        <XcInput id="appName" disabled />
                      </div>
                      <div className="cols">
                        <label htmlFor="phone">전화번호</label>
                        <XcInput id="phone" disabled />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="cols">
                        <label htmlFor="applicant">신청인</label>
                        <div className="flex gap-[8px]">
                          <XcInput id="applicant" disabled />
                          <XcButton variant="secondary">정보제공 동의</XcButton>
                        </div>
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

                  </div>
                </div>
              </div>

              <div className="title-block text-large">
                신청대상장비 정보
              </div>

              {/* add-block */}
              <div className="add-block">

                {/* 신청대상장비 정보등록 #1 */}
                <div className={`app-box ${boxOpened.equip1 ? "opened" : ""}`}>
                  <div className="top detail">
                    <div className="top-sub">
                      <span className="title-sub">신청대상장비 정보등록 #1</span>
                      <div>
                        <button
                          className="btn-ar"
                          aria-label="접고펼치기"
                          onClick={() => toggleBox("equip1")}
                        />
                      </div>
                    </div>
                    <div className="top-sub-status">

                      {/* row */}
                      <div className="row">
                        <div className="row-item">
                          <dl>
                            <dt className="text-[19px]">평가ID :</dt>  
                            <dd className="font-bold text-[19px]">YY-######-주-채널</dd>
                            <dt className="min-w-[156px]">진행현황</dt>  
                            <dd>수집완료</dd>
                            <dt className="min-w-[156px]">데이터 수집일정</dt>  
                            <dd>2025 -10 -10</dd>
                          </dl>
                        </div>
                      </div>

                      {/* row */}
                      <div className="row">
                        <div className="row-item">
                          <dl>
                            <dt className="text-[19px]">평가ID :</dt>  
                            <dd className="font-bold text-[19px]">YY-######-야-채널</dd>
                            <dt className="min-w-[156px]">진행현황</dt>  
                            <dd>발급완료</dd>
                            <dt className="min-w-[156px]">데이터 수집일정</dt>  
                            <dd>2025 -10 -10</dd>
                          </dl>
                          <XcButton
                            variant="default"
                            className="btn-app"
                            onClick={() => setOpenDownloadModal(true)}
                          >
                            성적서 다운로드
                          </XcButton>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="cont">

                    {/* 신청대상장비 정보등록 #1 내용 */}
                    <div className="form-wrap">

                      {/* 장비종류 / 평가종류 / 검지방식 */}
                      <div className="form-row">
                        <div className="cols">
                          <label htmlFor="equipType">장비종류</label>
                          <Select disabled>
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
                          <Select disabled>
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
                          <Select disabled>
                            <SelectTrigger id="detectType">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="루프검지">루프검지</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* 전후면구분 / 도로종류 / 터널여부 */}
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
                          <Select disabled>
                            <SelectTrigger id="roadType">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="고속도로">고속도로</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="cols">
                          <label htmlFor="tunnelWhether">터널여부</label>
                          <Select disabled>
                            <SelectTrigger id="tunnelWhether">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Y">Y</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* 터널명 / 터널위치 / 관리기관명 */}
                      <div className="form-row">
                        <div className="cols">
                          <label htmlFor="tunnelName">터널명</label>
                          <XcInput id="tunnelName" value="-" disabled />
                        </div>

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
                            disabled
                          />
                        </div>
                      </div>

                      {/* 장비ID / RSE ID / 설치일자 */}
                      <div className="form-row">
                          <div className="cols">
                          <label htmlFor="deviceId">장비ID</label>
                          <XcInput id="deviceId" value="V-0500-0417S-I-8-H" disabled />
                        </div>
                        
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
                              disabled
                            />
                          </div>
                        </div>
                      </div>

                      {/* 제조사 / 모델명 / 차로수 */}
                      <div className="form-row">
                          <div className="cols">
                          <label htmlFor="manufacturer">제조사</label>
                          <XcInput id="manufacturer" value="유티정보" disabled />
                        </div>

                        <div className="cols">
                          <label htmlFor="modelName">모델명</label>
                          <XcInput id="modelName" value="VDS5000" disabled />
                        </div>

                        <div className="cols">
                          <label htmlFor="laneCount">차로수</label>
                          <XcInput id="laneCount" value="4" disabled />
                        </div>
                      </div>

                      {/* 노선명 / 설치위치 */}
                      <div className="form-row">
                        <div className="cols cols-one-third">
                          <label htmlFor="routeName">노선명</label>
                          <XcInput id="routeName" value="서해안고속도로" disabled />
                        </div>

                        <div className="cols">
                          <label htmlFor="locationRoad">설치위치(도로명주소)</label>
                          <XcInput id="locationRoad" value="서하남대로 127" disabled />
                        </div>
                      </div>

                      {/* 설치이정 / 설치방향 / 설치높이 */}
                      <div className="form-row">
                        <div className="cols">
                          <label htmlFor="installKm">설치이정(km)</label>
                          <XcInput id="installKm" value="100" disabled />
                        </div>

                        <div className="cols">
                          <label htmlFor="installDirection">설치방향</label>
                          <Select disabled>
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

                      {/* 음영영역 / 평가영역 / 평가방향 / 평가시간 */}
                      <div className="form-row">
                        <div className="cols">
                          <label htmlFor="shadowArea">음영영역(m)</label>
                          <XcInput id="shadowArea" value="-" disabled />
                        </div>

                        <div className="cols">
                          <label htmlFor="evalArea">평가영역(m)</label>
                          <XcInput id="evalArea" value="-" disabled />
                        </div>

                        <div className="cols flex-row gap-[10px]">

                          <div className="flex-1">
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
                          
                          <div className="flex-1">
                            <label htmlFor="evalTime">평가시간</label>
                            <Select disabled>
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
                </div>

                {/* 신청대상장비 정보등록 #2 */}
                <div className={`app-box ${boxOpened.equip2 ? "opened" : ""}`}>
                  <div className="top detail">
                    <div className="top-sub">
                      <span className="title-sub">신청대상장비 정보등록 #2</span>
                      <div>
                        <button
                          className="btn-ar"
                          aria-label="접고펼치기"
                          onClick={() => toggleBox("equip2")}
                        />
                      </div>
                    </div>
                    <div className="top-sub-status">

                       {/* row */}
                      <div className="row">
                        <div className="row-item">
                          <dl>
                            <dt className="text-[19px]">평가ID :</dt>  
                            <dd className="min-w-[180px] font-bold text-[19px]">YY-######-주-채널</dd>
                            <dt className="min-w-[156px]">진행현황</dt>  
                            <dd className="font-semibold text-[#F15347]">발급반려</dd>
                            <dt className="min-w-[156px]">데이터 수집일정</dt>  
                            <dd>2025 -10 -10</dd>
                          </dl>
                        </div>

                        {/* 취소/반려사유 */}
                        <div className="flex border-t border-b border-[#cdd7e4]">
                          <div className="flex items-center justify-center w-[140px] py-[13px] font-medium text-[15px] bg-[#f8f8f8] border-r border-[#cdd7e4]">취소/반려사유</div>
                          <div className="flex h-full flex-1 items-center py-[15px] px-[20px] text-[13px]">
                            수집, 분석, 심사, 발행 단계에서 작성된  취소, 반려 사유 표출
                          </div>
                        </div>

                      </div>

                      {/* row */}
                      <div className="row">
                        <div className="row-item">
                          <dl>
                            <dt className="text-[19px]">평가ID :</dt>  
                            <dd className="min-w-[180px] font-bold text-[19px]">YY-######-야-채널</dd>
                            <dt className="min-w-[156px]">진행현황</dt>  
                            <dd>발급완료</dd>
                            <dt className="min-w-[156px]">데이터 수집일정</dt>  
                            <dd>2025 -10 -10</dd>
                          </dl>
                          <XcButton
                            variant="default"
                            className="btn-app"
                            onClick={() => setOpenDownloadModal(true)}
                          >
                            성적서 다운로드
                          </XcButton>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="cont">
                    내용
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

      {/* ---------------------- 성적서 다운로드 모달 ---------------------- */}
      <XcDialog open={openDownloadModal} onOpenChange={setOpenDownloadModal}>
        <XcDialogContent
          className="w-[820px]"
          onClose={async () => true}
        >
          <XcDialogHeader>
            <XcDialogTitle>성적서 다운로드</XcDialogTitle>
          </XcDialogHeader>

          <XcDialogBody>
            <div className="min-h-[600px] bg-[#F8F8F8] rounded-[12px] border border-[#E4E4E4] p-[40px]">
              <img
                src={tempImgForm}
                alt="성적서 미리보기"
                className="w-full h-auto object-contain"
              />
            </div>
          </XcDialogBody>

          <div className="flex justify-end mt-[20px]">
            <XcDialogClose>
              <XcButton variant="default" size="lg">
                성적서 다운로드
              </XcButton>
            </XcDialogClose>
          </div>
        </XcDialogContent>
      </XcDialog>      
    </>
  );
};

export default sampleMyPageITSDetail;
