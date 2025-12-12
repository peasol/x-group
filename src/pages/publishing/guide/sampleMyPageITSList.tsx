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

const sampleMyPageITSList = () => {
  const menu = MENU_LIST.find((m) => m.label === "나의 평가현황");

  const [status, setStatus] = useState<string>("all");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [receiptNo, setReceiptNo] = useState<string>("");

  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState<{ [key: number]: boolean }>(
    {}
  );

  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<string>("10");

  // 샘플 데이터
  const rows = [
    {
      no: 10,
      date: "2025-10-01",
      status: "신청등록",
      receipt: "25-R-123",
      sampleCount: 5,
      collect: "0/5",
      analyze: "0/5",
      eval: "0/5",
    },
    {
      no: 9,
      date: "2025-09-30",
      status: "신청반려",
      receipt: "25-R-122",
      sampleCount: 4,
      collect: "0/4",
      analyze: "0/4",
      eval: "0/4",
    },
    {
      no: 8,
      date: "2025-09-29",
      status: "수집완료",
      receipt: "25-R-121",
      sampleCount: 5,
      collect: "5/5",
      analyze: "3/5",
      eval: "1/5",
    },
    {
      no: 7,
      date: "2025-09-28",
      status: "분석대기",
      receipt: "25-R-120",
      sampleCount: 3,
      collect: "3/3",
      analyze: "0/3",
      eval: "0/3",
    },
    {
      no: 6,
      date: "2025-09-27",
      status: "분석중",
      receipt: "25-R-119",
      sampleCount: 5,
      collect: "5/5",
      analyze: "2/5",
      eval: "0/5",
    },
    {
      no: 5,
      date: "2025-09-26",
      status: "신청등록",
      receipt: "25-R-118",
      sampleCount: 2,
      collect: "0/2",
      analyze: "0/2",
      eval: "0/2",
    },
    {
      no: 4,
      date: "2025-09-25",
      status: "수집완료",
      receipt: "25-R-117",
      sampleCount: 5,
      collect: "5/5",
      analyze: "5/5",
      eval: "2/5",
    },
    {
      no: 3,
      date: "2025-09-24",
      status: "분석대기",
      receipt: "25-R-116",
      sampleCount: 4,
      collect: "4/4",
      analyze: "0/4",
      eval: "0/4",
    },
    {
      no: 2,
      date: "2025-09-23",
      status: "분석중",
      receipt: "25-R-115",
      sampleCount: 3,
      collect: "3/3",
      analyze: "1/3",
      eval: "0/3",
    },
    {
      no: 1,
      date: "2025-09-22",
      status: "신청등록",
      receipt: "25-R-114",
      sampleCount: 5,
      collect: "0/5",
      analyze: "0/5",
      eval: "0/5",
    },
  ];

  const handleSelectAll = (checked: boolean) => {
    setSelectAll(checked);

    const newState: { [key: number]: boolean } = {};
    rows.forEach((row) => {
      newState[row.no] = checked;
    });

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
            currentLabel="ITS성능평가 신청내역"
          />

          <div className="contents-area">
            <XcBreadcrumb
              items={[
                { label: "홈", href: "#", icon: <i className="ic-home" /> },
                { label: "나의 평가현황", href: "#" },
                { label: "ITS성능평가 신청내역", current: true },
              ]}
            />

            <div className="cont-top">
              <h2>
                <div>ITS성능평가 신청내역</div>
              </h2>
            </div>

            {/* 검색영역 */}
            <form className="search-area" onSubmit={(e) => e.preventDefault()}>
              <div className="search-row">
                <div>
                  <label htmlFor="statusSelect">진행현황</label>
                  <Select
                    value={status}
                    onValueChange={(value) => setStatus(value)}
                  >
                    <SelectTrigger id="statusSelect" className="select">
                      <SelectValue placeholder="전체" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">전체</SelectItem>
                      <SelectItem value="신청등록">신청등록</SelectItem>
                      <SelectItem value="신청반려">신청반려</SelectItem>
                      <SelectItem value="수집완료">수집완료</SelectItem>
                      <SelectItem value="분석대기">분석대기</SelectItem>
                      <SelectItem value="분석중">분석중</SelectItem>
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
                <i className="ic-print"/><span>목록출력</span>
              </button>
              <button className="btns">
                <i className="ic-download"/><span>엑셀다운로드</span>
              </button>
            </div>

            <div className="table-list mb-[35px]">
              <Table>
                <caption>ITS성능평가 신청내역 표</caption>
                <colgroup>
                  <col style={{ width: "4%" }} />
                  <col style={{ width: "8%" }} />
                  <col />
                  <col style={{ width: "12%" }} />
                  <col style={{ width: "15%" }} />
                  <col style={{ width: "12%" }} />
                  <col style={{ width: "12%" }} />
                  <col style={{ width: "12%" }} />
                  <col style={{ width: "12%" }} />
                </colgroup>
                <TableHeader>
                  <TableRow>
                    <TableHead>
                      <span className="sr-only">선택</span>
                    </TableHead>
                    <TableHead>번호</TableHead>
                    <TableHead>신청일자</TableHead>
                    <TableHead>진행현황</TableHead>
                    <TableHead>접수번호</TableHead>
                    <TableHead>
                      신청<br />시료수량
                    </TableHead>
                    <TableHead>
                      수집<br />완료건수
                    </TableHead>
                    <TableHead>
                      분석<br />완료건수
                    </TableHead>
                    <TableHead>
                      평가<br />완료건수
                    </TableHead>
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
                      <TableCell>{row.status}</TableCell>
                      <TableCell>{row.receipt}</TableCell>
                      <TableCell>{row.sampleCount}</TableCell>
                      <TableCell>{row.collect}</TableCell>
                      <TableCell>{row.analyze}</TableCell>
                      <TableCell>{row.eval}</TableCell>
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
              onPageChange={(newPage: number) => setPage(newPage)}
            />

            <div className="btn-wrap justify-end">
              <XcButton variant="default" size="lg">
                신규등록하기
              </XcButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default sampleMyPageITSList;
