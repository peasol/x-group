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

const sampleJoinAgreement = () => {
  const [agreeAll, setAgreeAll] = useState(false);
  const [terms1, setTerms1] = useState<"Y" | "N" | "">("");
  const [terms2, setTerms2] = useState<"Y" | "N" | "">("");
  const [terms3, setTerms3] = useState<"Y" | "N" | "">("");
  const [termsPop, setTermsPop] = useState<"Y" | "N" | "">("");

  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);

  return (
    <>
      <h1 className="sr-only">콘텐츠영역</h1>
      <div className="inner">
        <XcBreadcrumb
          items={[
            { label: "홈", href: "#", icon: <i className="ic-home" /> },
            { label: "회원가입", current: true },
          ]}
        />
        <div className="join">
          <div className="cont-top">
            <h2>
              <div>회원가입</div>
            </h2>
            <ul className="join-process">
              <li className="completion">
                <div className="dot" aria-hidden="true"/>
                <div className="step">1단계</div>
                <p>사용자 인증</p>
              </li>  
              <li className="current">
                <div className="dot" aria-hidden="true"/>
                <div className="step">2단계</div>
                <p>약관동의</p>
              </li>
              <li>
                <div className="dot" aria-hidden="true"/>
                <div className="step">3단계</div>
                <p>회원정보입력(법인)</p>
              </li>
              <li>
                <div className="dot" aria-hidden="true"/>
                <div className="step">4단계</div>
                <p>회원가입완료</p>
              </li>
            </ul>
            <div className="current-step" aria-hidden="true">
              <div><span className="current">2단계</span> / <span>4단계</span></div>
              <p>약관동의</p>
            </div>
          </div>

          <div className="terms-wrap">
            <div className="agreement-top">
              <XcCheckbox
                label={"모두 동의합니다."}
                checked={agreeAll}
                onChange={(v) => setAgreeAll(!!v)}
              />
              <p>
                민감정보 수집이용, 개인정보의 수집 및 이용, 온라인신청 서비스 정책, 고유식별정보 수집 및 이용 항목에 대해 모두 동의합니다.<br/>
                각 사항에 대한 동의 여부를 개별적으로 선택하실 수 있으며, 선택 동의 사항에 대한 동의를 거부하여도 서비스를 이용하실 수 있습니다.
              </p>
            </div>
            <div className="terms-block">
              <div>
                <div className="title">[필수] 사이트(서비스) 이용약관</div>
                <XcButton className="btn-terms" onClick={openModal}>약관읽기</XcButton>
                <div className="box">
                  <p>민감정보 수집 및 이용에 대한 안내 사항을 읽고 동의합니다.</p>
                  <div className="radio-wrap">
                    <XcRadio
                      name="terms1"
                      value="N"
                      checked={terms1 === "N"}
                      onChange={() => setTerms1("N")}
                      label="동의안함"
                    />
                    <XcRadio
                      name="terms1"
                      value="Y"
                      checked={terms1 === "Y"}
                      onChange={() => setTerms1("Y")}
                      label="동의함"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="title">[필수] 개인정보의 수집 및 이용</div>
                <XcButton className="btn-terms" onClick={openModal}>약관읽기</XcButton>
                <div className="box">
                  <p>개인정보 수집 및 이용에 대한 약관을 읽고 동의합니다.</p>
                  <div className="radio-wrap">
                    <XcRadio
                      name="terms2"
                      value="N"
                      checked={terms2 === "N"}
                      onChange={() => setTerms2("N")}
                      label="동의안함"
                    />
                    <XcRadio
                      name="terms2"
                      value="Y"
                      checked={terms2 === "Y"}
                      onChange={() => setTerms2("Y")}
                      label="동의함"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="title">[필수] 고유식별정보 수집</div>
                <XcButton className="btn-terms" onClick={openModal}>약관읽기</XcButton>
                <div className="box">
                  <p>온라인신청 서비스 정책에 대한 동의서를 읽고 동의합니다.</p>
                  <div className="radio-wrap">
                    <XcRadio
                      name="terms3"
                      value="N"
                      checked={terms3 === "N"}
                      onChange={() => setTerms3("N")}
                      label="동의안함"
                    />
                    <XcRadio
                      name="terms3"
                      value="Y"
                      checked={terms3 === "Y"}
                      onChange={() => setTerms3("Y")}
                      label="동의함"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="btn-wrap justify-between">
            <XcButton variant="outline" size="lg">이전으로</XcButton>
            <XcButton variant="default" size="lg" onClick={openModal}>동의하기</XcButton>
          </div>  

        </div>
      </div>

      {/* 약관 모달 */}
      <XcDialog open={open} onOpenChange={setOpen}>
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
      
    </>
  )
}

export default sampleJoinAgreement;