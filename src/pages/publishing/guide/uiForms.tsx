import { useRef, useState, useCallback } from "react";
import XcRadio from "@/components/xc/ui/XcRadio.tsx";
import XcCheckbox from "@/components/xc/ui/XcCheckbox.tsx";
import XcSwitch from "@/components/xc/ui/XcSwitch";
import XcInput from "@/components/xc/ui/XcInput";
import XcButton from "@/components/xc/ui/XcButton.tsx";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select.tsx";

const uiForms = () => {
  const [useKeyboardSec, setUseKeyboardSec] = useState(true);

  const [agreeAll, setAgreeAll] = useState(false);
  const [terms1, setTerms1] = useState<"Y" | "N" | "">("");

  const [emailLocal, setEmailLocal] = useState("");
  const [emailDomain, setEmailDomain] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [phone3, setPhone3] = useState("");
  const [fileName, setFileName] = useState("");

  const fileRef = useRef<HTMLInputElement>(null);

  const onlyDigits = useCallback((s: string) => s.replace(/\D/g, ""), []);
  const onChangePhone1 = (v: string) => setPhone1(onlyDigits(v).slice(0, 3));
  const onChangePhone2 = (v: string) => setPhone2(onlyDigits(v).slice(0, 4));
  const onChangePhone3 = (v: string) => setPhone3(onlyDigits(v).slice(0, 4));

  return (
    <div className="inner">
      <section className="my-[30px] p-[30px] border border-[#e7e7e7] rounded-[2px]">
        <h2 className="flex items-end gap-[8px] text-[28px] font-semibold mb-[30px]">UI 컴포넌트 : 폼 요소</h2>

        <h3 className="flex items-end gap-[8px] text-[20px] font-semibold mt-[30px] mb-[15px]">radio</h3>
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

        <h3 className="flex items-end gap-[8px] text-[20px] font-semibold mt-[30px] mb-[15px]">checkbox</h3>
        <XcCheckbox
          label={"모두 동의합니다."}
          checked={agreeAll}
          onChange={(v) => setAgreeAll(!!v)}
        />

        <h3 className="flex items-end gap-[8px] text-[20px] font-semibold mt-[30px] mb-[15px]">switch</h3>
        <XcSwitch
          label="키보드 보안 프로그램 사용"
          labelPosition="right"
          value={useKeyboardSec}
          onChange={setUseKeyboardSec}
          variant="default"
          aria-label="키보드 보안 프로그램 사용"
        />

        <div className="registration-form w-[944px] mt-[30px] pt-[0]">
          <h3 className="flex items-end gap-[8px] text-[20px] font-semibold mt-[30px] mb-[15px]">이메일</h3>
          <div className="email-wrap">
            <XcInput
              name="emailLocal"
              placeholder="example"
              value={emailLocal}
              onChange={(e) => setEmailLocal(e.target.value)}
              className="w-[220px]"
            />
            <span aria-hidden="true">@</span>
            <Select
              value={emailDomain || undefined}
              onValueChange={(v) => setEmailDomain(v)}
            >
              <SelectTrigger className="w-[220px]" aria-label="이메일 도메인 선택">
                <SelectValue placeholder="도메인 선택" />
              </SelectTrigger>
              <SelectContent className="w-[220px]">
                <SelectItem value="gmail.com">gmail.com</SelectItem>
                <SelectItem value="naver.com">naver.com</SelectItem>
                <SelectItem value="daum.net">daum.net</SelectItem>
                <SelectItem value="kakao.com">kakao.com</SelectItem>
                <SelectItem value="ex.co.kr">ex.co.kr</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <h3 className="flex items-end gap-[8px] text-[20px] font-semibold mt-[30px] mb-[15px]">전화번호</h3>
          <div className="phone-wrap">
            <XcInput
              name="phone1"
              inputMode="tel"
              value={phone1}
              onChange={(e) => onChangePhone1(e.target.value)}
              aria-label="전화번호 첫째칸"
            />
            <span aria-hidden="true">-</span>
            <XcInput
              name="phone2"
              inputMode="tel"
              value={phone2}
              onChange={(e) => onChangePhone2(e.target.value)}
              aria-label="전화번호 둘째칸"
            />
            <span aria-hidden="true">-</span>
            <XcInput
              name="phone3"
              inputMode="tel"
              value={phone3}
              onChange={(e) => onChangePhone3(e.target.value)}
              aria-label="전화번호 셋째칸"
            />
          </div>

          <h3 className="flex items-end gap-[8px] text-[20px] font-semibold mt-[30px] mb-[15px]">파일첨부</h3>
          <div className="input-btn-group">
            <div className="sr-only">
              <XcInput
                ref={fileRef}
                name="sampleFile"
                type="file"
                accept=".jpg,.jpeg,.png,.gif,.bmp,.webp,.pdf"
                hideFileUI
                onChange={(e) => {
                  const file = (e.currentTarget.files && e.currentTarget.files[0]) || null;
                  setFileName(file ? file.name : "");
                }}
              />
            </div>
            <XcInput
              name="sampleFileName"
              placeholder="선택된 파일 없음"
              value={fileName}
              clearable
              onClearClick={(doClear) => {
                doClear();
                setFileName("");
                if (fileRef.current) {
                  fileRef.current.value = "";
                }
              }}
            />
            <XcButton
              type="button"
              variant="preset-01"
              size="md"
              onClick={() => fileRef.current?.click()}
            >
              파일등록
            </XcButton>
          </div>
        </div>

      </section>
    </div>
  )
}

export default uiForms;
