import { useState, useMemo } from "react";
import XcButton from "@/components/xc/ui/XcButton.tsx";
import XcRadio from "@/components/xc/ui/XcRadio.tsx";
import XcInput from "@/components/xc/ui/XcInput";
import {
  XcDialog,
  XcDialogContent,
  XcDialogHeader,
  XcDialogTitle,
  XcDialogBody,
  XcDialogFooter,
  XcDialogClose,
} from "@/components/xc/ui/XcDialog";

const uiDialog = () => {
  const [openTerms, setOpenTerms] = useState(false);
  const [termsPop, setTermsPop] = useState<"Y" | "N" | "">("");

  const [openOrg, setOpenOrg] = useState(false);
  const [orgKeyword, setOrgKeyword] = useState("");

  const organizations = useMemo(
    () => ["서울시청", "부산시청", "인천시청", "대구시청", "광주시청", "한국도로공사 강원본부", "한국도로공사 강원본부", "한국도로공사 강원본부", "한국도로공사 강원본부", "한국도로공사 강원본부", "한국도로공사 강원본부", "한국도로공사 강원본부"],
    []
  );

  const filteredOrganizations = useMemo(() => {
    const kw = orgKeyword.trim();
    if (!kw) return organizations;
    return organizations.filter((name) => name.includes(kw));
  }, [orgKeyword, organizations]);

  return (
    <div className="inner">
      <section className="my-[30px] p-[30px] border border-[#e7e7e7] rounded-[2px]">
        <h2 className="flex items-end gap-[8px] text-[28px] font-semibold mb-[30px]">UI 컴포넌트 : 다이얼로그 모달</h2>

        <h3 className="flex items-end gap-[8px] text-[20px] font-semibold mt-[30px] mb-[15px]">약관 동의 다이얼로그</h3>
        <XcButton variant="default" size="md" onClick={() => setOpenTerms(true)}>약관 모달 열기</XcButton>

        <h3 className="flex items-end gap-[8px] text-[20px] font-semibold mt-[30px] mb-[15px]">소속기관 선택 다이얼로그</h3>
        <div className="input-btn-group">
          <XcButton variant="default" size="md" onClick={() => setOpenOrg(true)}>소속기관 검색 모달 열기</XcButton>
        </div>

        <XcDialog open={openTerms} onOpenChange={setOpenTerms}>
          <XcDialogContent
            className="dialog-join"
            onClose={async () => true}
          >
            <XcDialogHeader>
              <XcDialogTitle>약관 상세내용</XcDialogTitle>
            </XcDialogHeader>
            <XcDialogBody>
              <div className="agreement-type">
                <div className="title">[필수] 사이트(서비스) 이용약관</div>
                <div className="btn-group">
                  <button className="btn-prev" aria-label="이전"></button>
                  <button className="btn-next" aria-label="다음"></button>
                </div>
              </div>
              <div className="terms-block">
                <div className="scroll-area">
                  <h2>제2장. 서비스 이용</h2>
                  <h3>1. 제3조 (이용계약의 성립)</h3>
                  <p>
                    이용자는 약관에 동의한다는 의사표시와 함께 회사가 정한 양식에 따라 정보를 기재하여 이용을 신청하고, 회사가 이를 승낙함으로써 이용계약이 성립됩니다.
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="radio-wrap">
                  <XcRadio
                    name="termsPop"
                    value="N"
                    checked={termsPop === "N"}
                    onChange={() => setTermsPop("N")}
                    label="동의안함"
                  />
                  <XcRadio
                    name="termsPop"
                    value="Y"
                    checked={termsPop === "Y"}
                    onChange={() => setTermsPop("Y")}
                    label="동의함"
                  />
                </div>
              </div>
            </XcDialogBody>
            <XcDialogFooter>
              <XcDialogClose onClose={async () => true}>
                <XcButton variant="outline">취소</XcButton>
              </XcDialogClose>
              <XcDialogClose onClose={async () => true}>
                <XcButton variant="default">확인</XcButton>
              </XcDialogClose>
            </XcDialogFooter>
          </XcDialogContent>
        </XcDialog>

        <XcDialog open={openOrg} onOpenChange={setOpenOrg}>
          <XcDialogContent 
            className="dialog-org-select" 
            onClose={async () => true}
          >
            <XcDialogHeader>
              <XcDialogTitle>소속기관 선택</XcDialogTitle>
            </XcDialogHeader>
            <XcDialogBody>
              <div className="org-search-block">
                <XcInput
                  name="orgSearch"
                  placeholder="소속기관을 입력해 주세요."
                  value={orgKeyword}
                  onChange={(e) => setOrgKeyword(e.target.value)}
                  clearable
                />
                <XcButton
                  type="button"
                  variant="default"
                  className="btn-search"
                >
                  <i/><span>검색</span>
                </XcButton>
              </div>

              <div className="org-result-block">
                <div className="org-table-scroll">
                  
                  {filteredOrganizations.length === 0 ? (
                    /* 검색 결과 없음 → no-data만 출력 */
                    <div className="no-data">
                      <i />
                      <p>검색 결과가 없습니다.</p>
                      <small>소속기관을 다시 입력해 주세요.</small>
                    </div>
                  ) : (
                    /* 검색 결과 있음 */
                    <table>
                      <caption className="sr-only">
                        소속기관 선택을 위한 검색 결과 표
                      </caption>
                      <colgroup>
                        <col />
                        <col className="w-[180px]" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th scope="col">소속기관명</th>
                          <th scope="col">선택적용</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredOrganizations.map((name, index) => (
                          <tr key={`${name}-${index}`}>
                            <td>{name}</td>
                            <td className="text-center">
                              <XcButton
                                type="button"
                                variant="default"
                              >
                                선택적용
                              </XcButton>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </XcDialogBody>
          </XcDialogContent>
        </XcDialog>

      </section>
    </div>
  )
}

export default uiDialog;
