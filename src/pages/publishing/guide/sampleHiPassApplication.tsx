import { useState } from "react";
import XcBreadcrumb from "@/components/xc/ui/XcBreadcrumb";
import XcButton from "@/components/xc/ui/XcButton.tsx";
import XcCheckbox from "@/components/xc/ui/XcCheckbox.tsx";
import XcRadio from "@/components/xc/ui/XcRadio.tsx";
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
                            <label htmlFor="orgName">기관명(업체명)</label>
                            <XcInput id="orgName" placeholder="기관명(업체명)을 입력해 주세요." />
                          </div>
                          <div className="cols">
                            <label htmlFor="corpNum">법인등록번호</label>
                            <XcInput id="corpNum" placeholder="" />
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
                            <label htmlFor="manager">대표자</label>
                            <XcInput id="manager" />
                          </div>
                          <div className="cols">
                            <label htmlFor="applicant">신청인(명칭)</label>
                            <XcInput id="applicant" />
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="cols">
                            <label htmlFor="phone">전화번호</label>
                            <XcInput id="phone" />
                          </div>
                          <div className="cols">
                            <label htmlFor="fax">팩스번호</label>
                            <XcInput id="fax" />
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="cols">
                            <label htmlFor="emailLocal">이메일</label>
                            <div className="w-[calc(50%_-_10px)]">
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

                  {/* add-block : 추가/삭제 */}
                  <div className="add-block">

                    {/* 신청대상장비 정보등록 #1 : opened 상태며, top이 없다면 */}
                    {/* <div className={`app-box ${boxOpened.equip1 ? "opened" : ""}`}> */}
                    <div className="app-box opened">
                      {/* <div className="top">
                        <span className="title-sub">신청대상장비 정보등록 #1</span>
                        <div>
                          <button className="btn-plus" aria-label="추가" />
                          <button
                            className="btn-ar"
                            aria-label="접고펼치기"
                            onClick={() => toggleBox("equip1")}
                          />
                        </div>
                      </div> */}
                      <div className="cont pt-[36px]">
                        
                        <div className="form-wrap">
                          {/* 적합평가 대상 / 시험종류 / OBU 모델명 */}
                          <div className="form-row">
                            <div className="cols">
                              <label htmlFor="evalTarget">적합평가 대상</label>
                              <Select>
                                <SelectTrigger id="evalTarget">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="감면단말기">감면단말기</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="cols">
                              <label htmlFor="testType">시험종류</label>
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
                              <label htmlFor="obuModel">OBU 모델명</label>
                              <XcInput id="obuModel" value="감면단말기" />
                            </div>
                          </div>

                          {/* BIU 모델명 / 제조사/제조국 / 통신방식 */}
                          <div className="form-row">
                            <div className="cols">
                              <label htmlFor="biuModel">BIU 모델명</label>
                              <XcInput id="biuModel" value="-" disabled />
                            </div>

                            <div className="cols">
                              <label htmlFor="maker">제조사/제조국</label>
                              <XcInput id="maker" value="유티정보(주)" />
                            </div>

                            <div className="cols">
                              <label htmlFor="communication">통신방식</label>
                              <Select>
                                <SelectTrigger id="communication">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="유선">유선</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          {/* 기타 / 단말기형태(+라디오 4개) */}
                          <div className="form-row">
                            <div className="cols flex-none w-[286px]">
                              <label htmlFor="etc">기타</label>
                              <Select>
                                <SelectTrigger id="etc">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="-">-</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="cols">
                              <label htmlFor="deviceType">단말기형태</label>
                              <div className="flex gap-[20px]">
                                <Select>
                                  <SelectTrigger id="deviceType" className="w-[260px]">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="차량내 장착형">차량내 장착형</SelectItem>
                                  </SelectContent>
                                </Select>

                                <div className="flex items-center gap-[10px] whitespace-nowrap">
                                  <XcRadio 
                                    name="deviceTypeDetail" 
                                    value="룸미러" 
                                    label="룸미러"
                                  />
                                  <XcRadio 
                                    name="deviceTypeDetail" 
                                    value="모듈형" 
                                    label="모듈형"
                                  />
                                  <XcRadio 
                                    name="deviceTypeDetail" 
                                    value="기타" 
                                    label="기타"
                                  />
                                  <XcRadio 
                                    name="deviceTypeDetail" 
                                    value="SIM형" 
                                    label="SIM형"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* 사용자인터페이스 / 전원공급 방식 / 부가기능 */}
                          <div className="form-row">
                            <div className="cols">
                              <label htmlFor="uiType">사용자인터페이스</label>
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
                              <label htmlFor="powerSupply">전원공급 방식</label>
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
                              <label htmlFor="extraFunction">부가기능</label>
                              <XcInput id="extraFunction" />
                            </div>
                          </div>

                          {/* 시료수량 / 선불/후불 */}
                          <div className="form-row">

                            <div className="cols">
                              <label htmlFor="sampleCount">시료수량</label>
                              <Select>
                                <SelectTrigger id="sampleCount">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="4">4</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="cols">
                              <label htmlFor="paymentType">선불/후불</label>
                              <Select>
                                <SelectTrigger id="paymentType">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="선불/후불">선불/후불</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="cols">
                            </div>
                          </div>
                        </div>

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
                                  <TableHead>제품일련번호</TableHead>
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
                          <div className="title">단말기 시료 목록</div>
                          <div className="table-list">
                            <Table>
                              <caption>단말기 시료 목록 표</caption>
                              <colgroup>
                                <col style={{ width: "20%" }} />
                                <col />
                                <col />
                              </colgroup>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>제조번호</TableHead>
                                  <TableHead>발행번호</TableHead>
                                  <TableHead>구분번호</TableHead>
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
                          <div className="title">전자카드 정보입력</div>
                          <div className="table-list">
                            <Table>
                              <caption>전자카드 정보입력 표</caption>
                              <colgroup>
                                <col style={{ width: "60%" }} />
                                <col />
                              </colgroup>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>전자카드번호</TableHead>
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
                                </TableRow>
                                <TableRow>
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
                            ※  단말기 사진은 시료로 제출되는 전체 제품의 보일 수 있도록 등록해 주세요.<br/>
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
    </>
  )
}

export default sampleHiPassApplication;