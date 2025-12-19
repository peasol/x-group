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
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import XcInput from "@/components/xc/ui/XcInput";
import XcButton from "@/components/xc/ui/XcButton.tsx";
import XcPagination from "@/components/xc/ui/XcPagination.tsx";
import XcDatePicker from "@/components/xc/ui/XcDatePicker.tsx";
import XcCheckbox from "@/components/xc/ui/XcCheckbox.tsx";

const sampleMyPageHiPassList = () => {
  const menu = MENU_LIST.find((m) => m.label === "나의 평가현황");

  const [status, setStatus] = useState<string>("all");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [receiptNo, setReceiptNo] = useState<string>("");

  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState<{ [key: number]: boolean }>({});

  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<string>("10");

  const rows = [
    {
      no: 10,
      date: "2025-10-01",
      type: "일반단말기",
      receipt: "25-10-10_IR-202",
      comm: "IR",
      testType: "신규인증",
      status: "적합등록 신청",
    },
    {
      no: 9,
      date: "2025-09-30",
      type: "화물단말기",
      receipt: "25-10-09_IR-201",
      comm: "IR",
      testType: "변경인증(기술기준)",
      status: "기술시험 준비중",
    },
    {
      no: 8,
      date: "2025-09-29",
      type: "전자카드",
      receipt: "25-10-08_RF-110",
      comm: "RF",
      testType: "신규인증",
      status: "기술시험 완료",
    },
    {
      no: 7,
      date: "2025-09-28",
      type: "감면단말기",
      receipt: "25-10-07_IR-199",
      comm: "IR",
      testType: "변경인증(기술기준)",
      status: "기술시험 중",
    },
    {
      no: 6,
      date: "2025-09-27",
      type: "일반단말기",
      receipt: "25-10-06_IR-198",
      comm: "IR",
      testType: "신규인증",
      status: "적합등록 신청",
    },
    {
      no: 5,
      date: "2025-09-26",
      type: "전자카드",
      receipt: "25-10-05_RF-107",
      comm: "RF",
      testType: "변경인증(기술기준)",
      status: "기술시험 준비중",
    },
    {
      no: 4,
      date: "2025-09-25",
      type: "화물단말기",
      receipt: "25-10-04_IR-196",
      comm: "IR",
      testType: "신규인증",
      status: "반려",
    },
    {
      no: 3,
      date: "2025-09-24",
      type: "일반단말기",
      receipt: "25-10-03_IR-195",
      comm: "IR",
      testType: "변경인증(기술기준)",
      status: "기술시험 완료",
    },
    {
      no: 2,
      date: "2025-09-23",
      type: "감면단말기",
      receipt: "25-10-02_IR-194",
      comm: "IR",
      testType: "신규인증",
      status: "기술시험 중",
    },
    {
      no: 1,
      date: "2025-09-22",
      type: "전자카드",
      receipt: "25-10-01_RF-106",
      comm: "RF",
      testType: "변경인증(기술기준)",
      status: "적합등록 신청",
    },
  ];

  const handleSelectAll = (checked: boolean) => {
    setSelectAll(checked);
    const newState: { [key: number]: boolean } = {};
    rows.forEach((row) => (newState[row.no] = checked));
    setSelectedRows(newState);
  };

  const handleRowSelect = (rowNo: number, checked: boolean) => {
    const updated = { ...selectedRows, [rowNo]: checked };
    setSelectedRows(updated);
    const allChecked = rows.every((r) => updated[r.no]);
    setSelectAll(allChecked);
  };

  return (
    <>
      <h1 className="sr-only">콘텐츠영역</h1>
      <div className="inner">
        <div className="contents-wrap">
          <LeftMenu
            title={menu?.label || ""}
            items={menu?.depth2 || []}
            currentLabel="하이패스 적합등록 신청내역"
          />

          <div className="contents-area">
            <XcBreadcrumb
              items={[
                { label: "홈", href: "#", icon: <i className="ic-home" /> },
                { label: "나의 평가현황", href: "#" },
                { label: "하이패스 적합등록 신청내역", current: true },
              ]}
            />

            <div className="cont-top">
              <h2>
                <div>하이패스 적합등록 신청내역</div>
              </h2>
            </div>

            {/* 검색영역 */}
            <form className="search-area" onSubmit={(e) => e.preventDefault()}>
              <div className="search-row">
                <div>
                  <label htmlFor="statusSelect">진행현황</label>
                  <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger id="statusSelect" className="select">
                      <SelectValue placeholder="전체" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">전체</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="startDate">신청기간</label>
                  <div className="datepicker-wrap">
                    <XcDatePicker
                      id="startDate"
                      selected={startDate}
                      onChange={(d) => setStartDate(d)}
                      placeholderText="YYYY-MM"
                      dateFormat="yyyy-MM"
                      showMonthYearPicker
                    />
                    <span>-</span>
                    <XcDatePicker
                      id="endDate"
                      selected={endDate}
                      onChange={(d) => setEndDate(d)}
                      placeholderText="YYYY-MM"
                      dateFormat="yyyy-MM"
                      showMonthYearPicker
                      minDate={startDate || undefined}
                    />
                  </div>
                </div>
              </div>

              <div className="search-row">
                <div>
                  <label htmlFor="receiptInput">접수번호</label>
                  <div className="input-wrap">
                    <XcInput
                      id="receiptInput"
                      placeholder="접수번호를 입력해 주세요"
                      className="input"
                      value={receiptNo}
                      onChange={(e) => setReceiptNo(e.target.value)}
                    />
                    <button type="submit" className="btn-search" aria-label="검색">
                      <i />
                    </button>
                  </div>
                </div>
              </div>
            </form>

            {/* table-top */}
            <div className="table-top">
              <div className="total">
                신청내역 <span>33</span>건
              </div>

              <div className="right-area">
                <div className="item">
                  <div className="title">목록 표시 개수</div>
                  <Select value={rowsPerPage} onValueChange={setRowsPerPage}>
                    <SelectTrigger className="btn-select">
                      <SelectValue placeholder="10개" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10개</SelectItem>
                      <SelectItem value="20">20개</SelectItem>
                      <SelectItem value="100">100개</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="item">
                  <div className="title">정렬 기준</div>
                  <div className="sort-dp">
                    <button className="active">최신순</button>
                    <button>오래된순</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="table-top-sub">
              <XcCheckbox
                label="전체선택"
                checked={selectAll}
                onChange={(v) => handleSelectAll(!!v)}
                className="size-basic"
              />
              <button className="btns">
                <i className="ic-print" /><span>목록출력</span>
              </button>
              <button className="btns">
                <i className="ic-download" /><span>엑셀다운로드</span>
              </button>
            </div>

            <div className="table-list mb-[35px]">
              <Table>
                <caption>하이패스 적합등록 신청내역 표</caption>
                <colgroup>
                  <col style={{ width: "4%" }} />
                  <col style={{ width: "8%" }} />
                  <col style={{ width: "13%" }} />
                  <col style={{ width: "14%" }} />
                  <col />
                  <col style={{ width: "13%" }} />
                  <col style={{ width: "17%" }} />
                  <col style={{ width: "15%" }} />
                </colgroup>

                <TableHeader>
                  <TableRow>
                    <TableHead>
                      <span className="sr-only">선택</span>
                    </TableHead>
                    <TableHead>번호</TableHead>
                    <TableHead>신청일자</TableHead>
                    <TableHead>적합평가 구분</TableHead>
                    <TableHead>접수번호</TableHead>
                    <TableHead>단말기 통신방식</TableHead>
                    <TableHead>시험종류</TableHead>
                    <TableHead>시험진행 현황</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.no}>
                      <TableCell>
                        <XcCheckbox
                          checked={selectedRows[row.no] || false}
                          onChange={(v) => handleRowSelect(row.no, !!v)}
                          aria-label={`${row.no}번 선택`}
                          className="size-basic"
                        />
                      </TableCell>
                      <TableCell>{row.no.toString().padStart(2, "0")}</TableCell>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.type}</TableCell>
                      <TableCell>{row.receipt}</TableCell>
                      <TableCell>{row.comm}</TableCell>
                      <TableCell>{row.testType}</TableCell>

                      <TableCell>
                        {row.status.includes("반려") ? (
                          <span className="font-bold text-[#EC4651]">{row.status}</span>
                        ) : (
                          row.status
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>

              </Table>
            </div>

            <XcPagination
              totalElements={33}
              page={page}
              size={Number(rowsPerPage)}
              visiblePageCount={5}
              onPageChange={(newPage) => setPage(newPage)}
            />

            <div className="btn-wrap justify-end">
              <XcButton variant="secondary" size="lg">변경등록하기</XcButton>
              <XcButton variant="default" size="lg">신규등록하기</XcButton>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default sampleMyPageHiPassList;
