import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";

const uiTable = () => {
  
  return (
    <div className="inner">
      <section className="my-[30px] p-[30px] border border-[#e7e7e7] rounded-[2px]">
        <h2 className="flex items-end gap-[8px] text-[28px] font-semibold mb-[30px]">UI 컴포넌트 : 테이블</h2>

        <div className="table-detail">
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
      </section>
    </div>
  )
}

export default uiTable;


