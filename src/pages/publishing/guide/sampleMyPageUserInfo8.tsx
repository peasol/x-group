import XcBreadcrumb from "@/components/xc/ui/XcBreadcrumb";
import LeftMenu from "@/layouts/project/leftmenu/LeftMenu";
import { MENU_LIST } from "@/layouts/project/header/Nav";

import XcButton from "@/components/xc/ui/XcButton.tsx";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select.tsx";
import XcInput from "@/components/xc/ui/XcInput";

const sampleMyPageUserInfo8 = () => {
  const menu = MENU_LIST.find((m) => m.label === "나의 평가현황");

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

            <div className="application-form detail-page">
              <div className="app-box opened">
                <div className="top">
                  <span className="title">사용자 정보 수정</span>
                </div>
                <div className="cont">
                  
                  {/* form-wrap */}
                  <div className="form-wrap">

                    <div className="form-row">
                      <div className="cols">
                        <label htmlFor="orgPart">사용자 (소속) 구분</label>
                        <XcInput id="orgPart" value="법인" disabled />
                      </div>
                      <div className="cols">
                        <label htmlFor="orgName">소속기관명</label>
                        <XcInput id="orgName" value="유티정보" disabled />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="cols">
                        <label htmlFor="userName">대표자명</label>
                        <XcInput id="userName" value="김도로" />
                      </div>
                      
                      {/* 법인번호 */}
                      <div className="cols">
                        <label>법인번호</label>
                        <div className="corpnum-wrap">
                          <XcInput onlyNumber maxLength={6} value="123456" disabled />
                          <span className="bar">-</span>
                          <XcInput onlyNumber maxLength={7} value="1234567" disabled />
                        </div>
                      </div>
                    </div>
                    
                    <div className="form-row">
                      {/* 사업자등록번호 */}
                      <div className="cols">
                        <label>사업자등록번호</label>
                        <div className="biznum-wrap">
                          <XcInput onlyNumber maxLength={3} value="123" disabled />
                          <span className="bar">-</span>
                          <XcInput onlyNumber maxLength={2} value="45" disabled />
                          <span className="bar">-</span>
                          <XcInput onlyNumber maxLength={5} value="67890" disabled />
                        </div>
                      </div>

                      {/* 이메일 */}
                      <div className="cols">
                        <label>이메일</label>
                        <div className="email">
                          <XcInput id="emailLocal" value="aaa123" />
                          <span>@</span>
                          <Select value="naver.com">
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
                      {/* 연락처 */}
                      <div className="cols">
                        <label>연락처</label>
                        <div className="phone-wrap">
                          <XcInput onlyNumber maxLength={3} />
                          <span className="bar">-</span>
                          <XcInput onlyNumber maxLength={4} />
                          <span className="bar">-</span>
                          <XcInput onlyNumber maxLength={4} />
                        </div>
                      </div>
                      <div className="cols">
                        <label htmlFor="userID">ID</label>
                        <XcInput id="userID" value="gogo123" disabled />
                      </div>
                    </div>

                  </div>

                  {/* 첨부파일 */}
                  <div className="attach-files">
                    <div className="title"><span className="text-[#ec4651]">*</span> 첨부파일 - 사업자등록증</div>
                    <ul>
                      <li>
                        <p>사업자등록증_사본 [pdf, 1.2MB]</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="btn-wrap justify-between">
              <XcButton variant="outline" size="lg" className="min-w-[81px]">
                취소하기
              </XcButton>
              <XcButton variant="default" size="lg" className="min-w-[81px]">
                저장하기
              </XcButton>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default sampleMyPageUserInfo8;
