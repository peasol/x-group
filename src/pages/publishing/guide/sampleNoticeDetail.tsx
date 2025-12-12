import XcBreadcrumb from "@/components/xc/ui/XcBreadcrumb";
import XcButton from "@/components/xc/ui/XcButton.tsx";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";

const sampleNoticeDetail = () => {
  return (
    <>
      <h1 className="sr-only">콘텐츠영역</h1>
      <div className="inner">
        <div className="contents-wrap">
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

              <div className="notice-detail">
                <div className="detail-top">
                  <h3 className="title ellipsis">한국도로공사 연구지원인력 채용 공고</h3>
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

                {/* 중앙 컨텐츠 영역 글자는 일단 tailwind css 방식 직접 입력 */}
                <div className="px-[40px]">
                  <p className="mb-[20px] font-bold text-[19px] text-[#1D1D1D] leading-[1.2]">한국도로공사 연구지원인력 채용 공고</p>
                  <p className="mb-[25px] text-[17px] text-[#555]">한국도로공사에서 연구지원인력을 다음과 같이 공개모집하니 많은 응모 바랍니다.</p>
                  <div className="table-detail mb-[35px]">
                    <Table>
                      <caption>연구지원인력 공고 표</caption>
                      <colgroup>
                        <col style={{ width: '10%' }} />
                        <col style={{ width: '14%' }} />
                        <col />
                        <col style={{ width: '12%' }} />
                      </colgroup>
                      <TableHeader>
                        <TableRow>
                          <TableHead colSpan={2}>평가등급</TableHead>
                          <TableHead>담당업무</TableHead>
                          <TableHead>평가인원</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableHead rowSpan={2}>실무직<br/>(연구원)</TableHead>
                          <TableHead>건설재료 품질시험</TableHead>
                          <TableCell className="text-left">
                            <p className="relative my-[4px] pl-[12px] text-[17px] text-[#1D1D1D] before:absolute before:top-[7px] before:left-[0] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#1D1D1D]"> 
                              고속도로 건설재료 품질시험 실무자(시험보조) 업무 수행
                            </p>
                            <p className="relative my-[4px] pl-[12px] text-[17px] text-[#1D1D1D] before:absolute before:top-[7px] before:left-[0] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#1D1D1D]"> 
                              고속도로 건설 및 유지관리 현장 품질관리 기술지원
                            </p>
                          </TableCell>
                          <TableCell>2명</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHead>연구 시험 장비운영</TableHead>
                          <TableCell className="text-left">
                            <p className="relative my-[4px] pl-[12px] text-[17px] text-[#1D1D1D] before:absolute before:top-[7px] before:left-[0] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#1D1D1D]"> 
                              연구시험장비 운용, 데이터 산출 및 기타 시험업무 지원
                            </p>
                            <p className="relative my-[4px] pl-[12px] text-[17px] text-[#1D1D1D] before:absolute before:top-[7px] before:left-[0] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#1D1D1D]"> 
                              연구시험장비 유지관리(정비, 교정, 업데이트),<br/>
                              현황관리(이력, 가동실적, 자산 등) 및 대내외 업무 지원
                            </p>
                          </TableCell>
                          <TableCell>2명</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHead>전문 계약직</TableHead>
                          <TableHead>GPR 조사분석</TableHead>
                          <TableCell className="text-left">
                            <p className="relative my-[4px] pl-[12px] text-[17px] text-[#1D1D1D] before:absolute before:top-[7px] before:left-[0] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#1D1D1D]"> 
                              GPR 시스템 운용 및 기술개발
                            </p>
                            <p className="relative my-[4px] pl-[12px] text-[17px] text-[#1D1D1D] before:absolute before:top-[7px] before:left-[0] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#1D1D1D]"> 
                              도로 시설물 안전성 평가
                            </p>
                            <p className="relative my-[4px] pl-[12px] text-[17px] text-[#1D1D1D] before:absolute before:top-[7px] before:left-[0] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#1D1D1D]"> 
                              고속도로 점검·진단 관련 기술지원
                            </p>
                          </TableCell>
                          <TableCell>1명</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>

                  <p className="relative my-[10px] pl-[12px] text-[17px] text-[#555] before:absolute before:top-[10px] before:left-[0] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#555]"> 
                    접수기간 : 2016. 12. 5(월) ~ 12.12(월) 15:00
                  </p>
                  <p className="relative my-[10px] pl-[12px] text-[17px] text-[#555] before:absolute before:top-[10px] before:left-[0] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#555]"> 
                    접수방법 : 방문 또는 등기우편 접수(12.12(월) 15시까지 도착분에 한함)
                  </p>
                  <p className="relative my-[10px] pl-[12px] text-[17px] text-[#555] before:absolute before:top-[10px] before:left-[0] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#555]"> 
                    접 수 처<br/>
                    - (18489) 경기도 화성시 동탄면 동부대로 922번길 208-96<br/>
                    한국도로공사 도로교통연구원 연구운영팀 채용담당자
                  </p>
                </div>

                <div className="detail-bottom">
                  <div className="notice-file">
                    <a href="#">
                      <i />
                      <span>온도감응형 노면표시 성능비교 시연계획(안).hwpx 76KB(6 다운로드)</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="btn-wrap justify-end">
                <XcButton variant="default" size="lg" className="min-w-[81px]">목록</XcButton>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default sampleNoticeDetail;
