import { useState } from "react";
import XcBreadcrumb from "@/components/xc/ui/XcBreadcrumb";
import LeftMenu from "@/layouts/project/leftmenu/LeftMenu";
import { MENU_LIST } from "@/layouts/project/header/Nav";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select.tsx";
import XcInput from "@/components/xc/ui/XcInput";
import XcButton from "@/components/xc/ui/XcButton.tsx";
import XcPagination from "@/components/xc/ui/XcPagination.tsx";

const sampleNotice = () => {
  const menu = MENU_LIST.find((m) => m.label === "알림마당");
  const [page, setPage] = useState<number>(1);

  return (
    <>
      <h1 className="sr-only">콘텐츠영역</h1>
      <div className="inner">
        <div className="contents-wrap">
          <LeftMenu
            title={menu?.label || ""}
            items={menu?.depth2 || []}
            currentLabel="공지사항"
          />

          <div className="contents-area">
            <XcBreadcrumb
              items={[
                { label: "홈", href: "#", icon: <i className="ic-home" /> },
                { label: "알림마당", href: "#" },
                { label: "공지사항", current: true },
              ]}
            />

            <div className="notice">
              <div className="cont-top">
                <h2>
                  <div>공지사항</div>
                </h2>
              </div>

              {/* 검색 영역 */}
              <form className="search-area" onSubmit={(e) => e.preventDefault()}>
                <div className="search-row">
                  <div>
                    <Select>
                      <SelectTrigger className="select">
                        <SelectValue placeholder="전체" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">전체</SelectItem>
                      </SelectContent>
                    </Select>

                    <div className="input-wrap">
                      <XcInput
                        placeholder="검색어를 입력해 주세요"
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

              {/* 공지사항 목록 */}
              <ul className="notice-list">

                <li>
                  <div className="notice-box pin">
                    <div className="notice-top">
                      <div className="notice-pin" />
                      <div className="notice-sub-area">
                        <div className="name">
                          <i />
                          <span>관리자</span>
                        </div>
                        <div className="date">
                          <i />
                          <span>2025-10-16</span>
                        </div>
                        <div className="views">
                          <i />
                          <span>12</span>
                        </div>
                      </div>
                    </div>
                    <div className="notice-cont">
                      <div className="title ellipsis">
                        온도감응형 노면표시 성능 비교 시연 계획
                      </div>
                      <div className="cont-wrap">
                        <p>도로교통연구원에서 수행중인 온도감응형 노면표시 연구과제와 관련하여 첨부와 같이 해당 기술을 보유한 업체 간 성능 비교를 통하여 추후 연구과제 수행에 활용하고자 합니다. 첨부를 참고하시기 바랍니다.</p>
                        <XcButton className="btn-detail">
                          상세보기
                        </XcButton>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="notice-box">
                    <div className="notice-top">
                      <div className="notice-num">10</div>
                      <div className="notice-sub-area">
                        <div className="name">
                          <i />
                          <span>관리자</span>
                        </div>
                        <div className="date">
                          <i />
                          <span>2025-10-16</span>
                        </div>
                        <div className="views">
                          <i />
                          <span>12</span>
                        </div>
                      </div>
                    </div>
                    <div className="notice-cont">
                      <div className="title ellipsis">
                        온도감응형 노면표시 성능 비교 시연 계획 공고(2차)
                      </div>
                      <div className="cont-wrap">
                        <p>도로교통연구원에서 수행중인 온도감응형 노면표시 연구과제와 관련하여 첨부와 같이 해당 기술을 보유한 업체 간 성능 비교를 통하여 추후 연구과제 수행에 활용하고자 합니다. 첨부를 참고하시기 바랍니다. 도로교통연구원에서 수행중인 온도감응형 노면표시 연구과제와 관련하여 첨부와 같이 해당 기술을 보유한 업체 간 성능 비교를 통하여 추후 연구과제 수행에 활용하고자 합니다. 첨부를 참고하시기 바랍니다.</p>
                        <XcButton className="btn-detail">
                          상세보기
                        </XcButton>
                      </div>
                    </div>
                    <div className="notice-file">
                      <a href="#">
                        <i />
                        <span>온도감응형 노면표시 성능비교 시연계획(안).hwpx 76KB(6 다운로드)</span>
                      </a>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="notice-box">
                    <div className="notice-top">
                      <div className="notice-num">09</div>
                      <div className="notice-sub-area">
                        <div className="name">
                          <i />
                          <span>관리자</span>
                        </div>
                        <div className="date">
                          <i />
                          <span>2025-10-16</span>
                        </div>
                        <div className="views">
                          <i />
                          <span>12</span>
                        </div>
                      </div>
                    </div>
                    <div className="notice-cont">
                      <div className="title ellipsis">
                        온도감응형 노면표시 성능 비교 시연 계획
                      </div>
                      <div className="cont-wrap">
                        <p>도로교통연구원에서 수행중인 온도감응형 노면표시 연구과제와 관련하여 첨부와 같이 해당 기술을 보유한 업체 간 성능 비교를 통하여 추후 연구과제 수행에 활용하고자 합니다. 첨부를 참고하시기 바랍니다.</p>
                        <XcButton className="btn-detail">
                          상세보기
                        </XcButton>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="notice-box">
                    <div className="notice-top">
                      <div className="notice-num">08</div>
                      <div className="notice-sub-area">
                        <div className="name">
                          <i />
                          <span>관리자</span>
                        </div>
                        <div className="date">
                          <i />
                          <span>2025-10-16</span>
                        </div>
                        <div className="views">
                          <i />
                          <span>12</span>
                        </div>
                      </div>
                    </div>
                    <div className="notice-cont">
                      <div className="title ellipsis">
                        2023년 한국도로공사 도로교통연구원 기간제(품질시험 전문인력) 채용 공고
                      </div>
                      <div className="cont-wrap">
                        <p>도로교통연구원에서 수행중인 온도감응형 노면표시 연구과제와 관련하여 첨부와 같이 해당 기술을 보유한 업체 간 성능 비교를 통하여 추후 연구과제 수행에 활용하고자 합니다. 첨부를 참고하시기 바랍니다.</p>
                        <XcButton className="btn-detail">
                          상세보기
                        </XcButton>
                      </div>
                    </div>
                    <div className="notice-file">
                      <a href="#">
                        <i />
                        <span>온도감응형 노면표시 성능비교 시연계획(안).hwpx 76KB(6 다운로드)</span>
                      </a>
                      <a href="#">
                        <i />
                        <span>온도감응형 노면표시 성능비교 시연계획(안).hwpx 76KB(6 다운로드)</span>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>

              <XcPagination
                totalElements={10}
                page={page}
                size={5}
                visiblePageCount={5}
                onPageChange={(newPage: number) => {
                  console.log('onPageChange.page: ', newPage);
                  setPage(newPage);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default sampleNotice;
