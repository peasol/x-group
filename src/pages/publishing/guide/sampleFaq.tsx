import { useState } from "react";
import XcBreadcrumb from "@/components/xc/ui/XcBreadcrumb";
import LeftMenu from "@/layouts/project/leftmenu/LeftMenu"
import { MENU_LIST } from "@/layouts/project/header/Nav";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select.tsx";
import XcInput from "@/components/xc/ui/XcInput";
import XcPagination from "@/components/xc/ui/XcPagination.tsx";

const sampleFaq = () => {
  const menu = MENU_LIST.find((m) => m.label === "알림마당");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [page, setPage] = useState<number>(1);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };  

  return (
    <>
      <h1 className="sr-only">콘텐츠영역</h1>
      <div className="inner">
        <div className="contents-wrap">
          <LeftMenu
            title={menu?.label || ""}
            items={menu?.depth2 || []}
            currentLabel="FAQ"
          />

          <div className="contents-area">
            <XcBreadcrumb
              items={[
                { label: "홈", href: "#", icon: <i className="ic-home" /> },
                { label: "알림마당", href: "#" },
                { label: "FAQ", current: true },
              ]}
            />
            <div className="faq">
              <div className="cont-top">
                <h2>
                  <div>FAQ</div>
                </h2>
              </div>

              <form className="search-area" onSubmit={(e) => e.preventDefault()}>
                <div className="search-row">
                  <div>
                    <Select>
                      <SelectTrigger className="select">
                        <SelectValue placeholder="전체" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">전체</SelectItem>
                        <SelectItem value="data">데이터 수집</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="input-wrap">
                      <XcInput
                        placeholder="질문 또는 답변 내용을 간략하게 입력해 주세요"
                        className="input"
                      />
                      <button type="submit" className="btn-search" aria-label="검색">
                        <i />
                      </button>
                    </div>
                  </div>
                </div>
              </form>

              <div className="table-top">
                <div className="total">
                  총게시물 <span>10</span>건
                </div>
              </div>

              <ul className="faq-list">
                <li>
                  <button
                    type="button"
                    className={`faq-q-box ${openIndex === 0 ? "open" : ""}`}
                    onClick={() => toggle(0)}
                  >
                    <div>
                      <div className="faq-q-left">
                        <div className="faq-q-icon">Q</div>
                        <div className="faq-q-category">데이터 수집</div>
                      </div>
                      <div className="faq-q-title">
                        감온(시온) 노면표시 실증 및 확대 적용 계획 문의 감온(시온) 노면표시 실증 및 확대 적용 계획 문의 감온(시온) 노면표시 실증 및 확대 적용 계획 문의
                      </div>
                    </div>
                    <i className="faq-acc-icon" />
                  </button>

                  {/* 답변 박스 */}
                  {openIndex === 0 && (
                    <div className="faq-a-box">
                      <div className="faq-a-top">
                        <div className="faq-a-icon">A</div>
                        <div className="faq-a-meta">
                          <div className="faq-admin">
                            <i />
                            <span>관리자</span>
                          </div>
                          <div className="faq-date">
                            <i />
                            <span>2025-10-16</span>
                          </div>
                        </div>
                      </div>
                      <div className="faq-a-title">온도감응형 노면표시 성능 비교 시연 계획</div>
                      <div className="faq-a-content">
                        도로교통연구원에 관심을 가져주셔서 감사합니다.<br/><br/>
                        문의주신 내용에 대해 답변드립니다.<br/><br/>
                        1. 중부고속도로 구간에서 시행된 감온시온 노면표시 시범<br/>
                        중부선에는 시공구간이 없고 중부내륙고속도로 내 시험도로에 10월 중 시온도료 업체별 시연 계획을 진행중입니다.<br/><br/>
                        2. 전국 확대 적용또는 미확대 여부 및 공식 입장<br/>
                        과제가 진행중이라 추후(26년 2월경) 연구보고서를 참고하시면 되겠습니다.<br/><br/>
                        3. 현재 운용 중인 블랙아이스 대응 정책과 감온 표지와의 관계<br/>
                        국토부나 행안부에서 관심을 갖고 있으나 과제 종료 후 결과를 토대로 정책에 반영하여 추진이 가능합니다<br/><br/>
                        ※ 2019-2022년도까지 수행했던 국토부 국책과제 자료를 참고하면 되겠습니다.<br/>
                        - 과제명 : ‘외부자극 및 통행차량의 특성을 고려한 도로 교통 안전 향상 기술 개발’
                      </div>
                      <div className="faq-file">
                        <a href="#">
                          <i />
                          <span>온도감응형 노면표시 성능비교 시연계획(안).hwpx 76KB(6 다운로드)</span>
                        </a>
                      </div>
                    </div>
                  )}
                </li>
                <li>
                  <button
                    type="button"
                    className={`faq-q-box ${openIndex === 1 ? "open" : ""}`}
                    onClick={() => toggle(1)}
                  >
                    <div>
                      <div className="faq-q-left">
                        <div className="faq-q-icon">Q</div>
                        <div className="faq-q-category">데이터 수집</div>
                      </div>
                      <div className="faq-q-title">
                        감온(시온) 노면표시 실증 및 확대 적용 계획 문의
                      </div>
                    </div>
                    <i className="faq-acc-icon" />
                  </button>

                  {/* 답변 박스 */}
                  {openIndex === 1 && (
                    <div className="faq-a-box">
                      <div className="faq-a-top">
                        <div className="faq-a-icon">A</div>
                        <div className="faq-a-meta">
                          <div className="faq-admin">
                            <i />
                            <span>관리자</span>
                          </div>
                          <div className="faq-date">
                            <i />
                            <span>2025-10-16</span>
                          </div>
                        </div>
                      </div>
                      <div className="faq-a-title">온도감응형 노면표시 성능 비교 시연 계획</div>
                      <div className="faq-a-content">
                        도로교통연구원에 관심을 가져주셔서 감사합니다.<br/><br/>
                        문의주신 내용에 대해 답변드립니다.<br/><br/>
                        1. 중부고속도로 구간에서 시행된 감온시온 노면표시 시범<br/>
                        중부선에는 시공구간이 없고 중부내륙고속도로 내 시험도로에 10월 중 시온도료 업체별 시연 계획을 진행중입니다.<br/><br/>
                        2. 전국 확대 적용또는 미확대 여부 및 공식 입장<br/>
                        과제가 진행중이라 추후(26년 2월경) 연구보고서를 참고하시면 되겠습니다.<br/><br/>
                        3. 현재 운용 중인 블랙아이스 대응 정책과 감온 표지와의 관계<br/>
                        국토부나 행안부에서 관심을 갖고 있으나 과제 종료 후 결과를 토대로 정책에 반영하여 추진이 가능합니다<br/><br/>
                        ※ 2019-2022년도까지 수행했던 국토부 국책과제 자료를 참고하면 되겠습니다.<br/>
                        - 과제명 : ‘외부자극 및 통행차량의 특성을 고려한 도로 교통 안전 향상 기술 개발’
                      </div>
                      <div className="faq-file">
                        <a href="#">
                          <i />
                          <span>온도감응형 노면표시 성능비교 시연계획(안).hwpx 76KB(6 다운로드)</span>
                        </a>
                      </div>
                    </div>
                  )}
                </li>
                <li>
                  <button
                    type="button"
                    className={`faq-q-box ${openIndex === 2 ? "open" : ""}`}
                    onClick={() => toggle(2)}
                  >
                    <div>
                      <div className="faq-q-left">
                        <div className="faq-q-icon">Q</div>
                        <div className="faq-q-category">데이터 수집</div>
                      </div>
                      <div className="faq-q-title">
                        감온(시온) 노면표시 실증 및 확대 적용 계획 문의
                      </div>
                    </div>
                    <i className="faq-acc-icon" />
                  </button>

                  {/* 답변 박스 */}
                  {openIndex === 2 && (
                    <div className="faq-a-box">
                      <div className="faq-a-top">
                        <div className="faq-a-icon">A</div>
                        <div className="faq-a-meta">
                          <div className="faq-admin">
                            <i />
                            <span>관리자</span>
                          </div>
                          <div className="faq-date">
                            <i />
                            <span>2025-10-16</span>
                          </div>
                        </div>
                      </div>
                      <div className="faq-a-title">온도감응형 노면표시 성능 비교 시연 계획</div>
                      <div className="faq-a-content">
                        도로교통연구원에 관심을 가져주셔서 감사합니다.<br/><br/>
                        문의주신 내용에 대해 답변드립니다.<br/><br/>
                        1. 중부고속도로 구간에서 시행된 감온시온 노면표시 시범<br/>
                        중부선에는 시공구간이 없고 중부내륙고속도로 내 시험도로에 10월 중 시온도료 업체별 시연 계획을 진행중입니다.<br/><br/>
                        2. 전국 확대 적용또는 미확대 여부 및 공식 입장<br/>
                        과제가 진행중이라 추후(26년 2월경) 연구보고서를 참고하시면 되겠습니다.<br/><br/>
                        3. 현재 운용 중인 블랙아이스 대응 정책과 감온 표지와의 관계<br/>
                        국토부나 행안부에서 관심을 갖고 있으나 과제 종료 후 결과를 토대로 정책에 반영하여 추진이 가능합니다<br/><br/>
                        ※ 2019-2022년도까지 수행했던 국토부 국책과제 자료를 참고하면 되겠습니다.<br/>
                        - 과제명 : ‘외부자극 및 통행차량의 특성을 고려한 도로 교통 안전 향상 기술 개발’
                      </div>
                      <div className="faq-file">
                        <a href="#">
                          <i />
                          <span>온도감응형 노면표시 성능비교 시연계획(안).hwpx 76KB(6 다운로드)</span>
                        </a>
                      </div>
                    </div>
                  )}
                </li>
              </ul>

              <XcPagination
                totalElements={10}
                page={page}
                size={5}
                visiblePageCount={5}
                onPageChange={(newPage: number) => {
                  console.log('onPageChange.page: ', newPage)
                  setPage(newPage)
                }}
              />

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default sampleFaq;