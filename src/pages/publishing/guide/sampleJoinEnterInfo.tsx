import { useRef, useMemo, useState, useCallback } from "react";
import XcBreadcrumb from "@/components/xc/ui/XcBreadcrumb";
import XcButton from "@/components/xc/ui/XcButton.tsx";
import XcRadio from "@/components/xc/ui/XcRadio.tsx";
import XcInput from "@/components/xc/ui/XcInput";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select.tsx";
import {
  XcDialog,
  XcDialogContent,
  XcDialogHeader,
  XcDialogTitle,
  XcDialogBody,
} from "@/components/xc/ui/XcDialog";

const sampleJoinEnterInfo = () => {
  const [userType, setUserType] = useState<"personal" | "corporate">("personal");
  const [orgName, setOrgName]   = useState("");
  const [bizNo]       = useState("");
  const [userName, setUserName] = useState("");
  const [departmentName, setDepartmentName] = useState("");
  const [emailLocal, setEmailLocal]   = useState("");
  const [emailDomain, setEmailDomain] = useState(""); 
  const [phone1, setPhone1]       = useState("");
  const [phone2, setPhone2]       = useState("");
  const [phone3, setPhone3]       = useState("");
  const [userId, setUserId]       = useState("");

  // 파일명 표시용 상태
  const [bizCertName, setBizCertName] = useState("");
  const [empCertName, setEmpCertName] = useState("");

  // 실제 파일 인풋 refs (숨김)
  const bizCertRef = useRef<HTMLInputElement>(null);
  const empCertRef = useRef<HTMLInputElement>(null);

  // 소속기관 검색 모달
  const [orgModalOpen, setOrgModalOpen] = useState(false);
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

  const openOrgModal = () => setOrgModalOpen(true);
  const handleApplyOrg = (name: string) => {
    setOrgName(name);
    setOrgModalOpen(false);
  };

  // 사업자번호
  const bizParts = useMemo(() => {
    const digits = (bizNo || "").replace(/\D/g, "");
    const a = digits.slice(0, 3);
    const b = digits.slice(3, 5);
    const c = digits.slice(5, 10);
    return [a, b, c];
  }, [bizNo]);

  // 전화번호
  const onlyDigits = useCallback((s: string) => s.replace(/\D/g, ""), []);
  const onChangePhone1 = (v: string) => setPhone1(onlyDigits(v).slice(0, 3));
  const onChangePhone2 = (v: string) => setPhone2(onlyDigits(v).slice(0, 4));
  const onChangePhone3 = (v: string) => setPhone3(onlyDigits(v).slice(0, 4));

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
              <li className="completion">
                <div className="dot" aria-hidden="true"/>
                <div className="step">2단계</div>
                <p>약관동의</p>
              </li>
              <li className="current">
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
              <div><span className="current">3단계</span> / <span>4단계</span></div>
              <p>회원정보입력</p>
            </div>
          </div>

          <div className="registration-form">
            <form
              method="post"
              autoComplete="off"
              noValidate
              autoCapitalize="none"
              autoCorrect="off"
            >
              <h3>기본 신청 정보 입력</h3>

              {/* 사용자 구분 */}
              <div className="form-group">
                <label className="block">
                  <div className="label-title">사용자 구분</div>
                  <div className="form-block" role="radiogroup" aria-label="사용자 구분">
                    <div className="radio-wrap flex-col gap-[24px]">
                      <XcRadio
                        name="userType"
                        value="personal"
                        checked={userType === "personal"}
                        onChange={() => setUserType("personal")}
                        label="개인"
                      />
                      <XcRadio
                        name="userType"
                        value="corporate"
                        checked={userType === "corporate"}
                        onChange={() => setUserType("corporate")}
                        label="법인"
                      />
                    </div>
                  </div>
                </label>
              </div>

              {/* 소속기관명 */}
              <div className="form-group">
                <label className="block">
                  <div className="label-title">소속기관명 <span className="required">(필수)</span></div>
                  <div className="form-block">
                    <div className="input-btn-group">
                      <XcInput
                        name="organizationName"
                        placeholder="소속기관명을 입력하세요"
                        value={orgName}
                        onChange={(e) => setOrgName(e.target.value)}
                        clearable
                        aria-required="true"
                        autoComplete="organization"
                      />
                      <XcButton variant="preset-01" size="md" onClick={openOrgModal}>기관검색</XcButton>
                    </div>
                  </div>
                </label>
                <div className="ins"><i/><p>사업자등록에 표기된 정확한 명칭을 확인해 주세요.</p></div>
              </div>

              {/* 소속 부서명 */}
              <div className="form-group">
                <label className="block">
                  <div className="label-title">소속 부서명 <span className="required">(필수)</span></div>
                  <div className="form-block">
                    <XcInput
                      name="departmentName"
                      placeholder="운영팀"
                      value={departmentName}
                      onChange={(e) => setDepartmentName(e.target.value)}
                      clearable
                      aria-required="true"
                      autoComplete="name"
                    />
                  </div>
                </label>
                <div className="ins"><i/><p>가입하시는 사용자의 소속 부서명을 입력 해주세요.</p></div>
              </div>

              {/* 사업자번호 */}
              <div className="form-group">
                <label className="block">
                  <div className="label-title">사업자번호 <span className="txt">(자동입력)</span></div>
                  <div className="form-block">
                    <div className="biznum-wrap">
                      <XcInput
                        readOnly
                        value={bizParts[0]}
                        aria-label="사업자번호 첫째칸"
                      />
                      <span aria-hidden="true">-</span>
                      <XcInput
                        readOnly
                        value={bizParts[1]}
                        aria-label="사업자번호 둘째칸"
                      />
                      <span aria-hidden="true">-</span>
                      <XcInput
                        readOnly
                        value={bizParts[2]}
                        aria-label="사업자번호 셋째칸"
                      />
                    </div>
                  </div>
                </label>
              </div>

              {/* 사용자명 */}
              <div className="form-group">
                <label className="block">
                  <div className="label-title">사용자명 <span className="required">(필수)</span></div>
                  <div className="form-block">
                    <XcInput
                      name="userName"
                      placeholder="이름을 입력하세요"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      clearable
                      aria-required="true"
                      autoComplete="name"
                    />
                  </div>
                </label>
                <div className="ins"><i/><p>사용자명을 입력해 주세요.</p></div>
              </div>

              {/* 이메일 */}
              <div className="form-group">
                <label className="block">
                  <div className="label-title">이메일 <span className="required">(필수)</span></div>
                  <div className="form-block">
                    <div className="email-wrap">
                      <XcInput
                        name="emailLocal"
                        placeholder="example"
                        value={emailLocal}
                        onChange={(e) => setEmailLocal(e.target.value)}
                        aria-required="true"
                        autoComplete="email-local"
                        className="w-[220px]"
                      />
                      <span aria-hidden="true">@</span>
                      <Select
                        value={emailDomain || undefined}
                        onValueChange={(v) => setEmailDomain(v)}
                      >
                        <SelectTrigger aria-label="이메일 도메인 선택">
                          <SelectValue placeholder="도메인 선택" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gmail.com">gmail.com</SelectItem>
                          <SelectItem value="naver.com">naver.com</SelectItem>
                          <SelectItem value="daum.net">daum.net</SelectItem>
                          <SelectItem value="kakao.com">kakao.com</SelectItem>
                          <SelectItem value="ex.co.kr">ex.co.kr</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </label>
                <div className="ins"><i/><p>유효한 이메일 주소를 입력해 주세요.</p></div>
              </div>

              {/* 연락처 */}
              <div className="form-group">
                <label className="block">
                  <div className="label-title">연락처 <span className="required">(필수)</span></div>
                  <div className="form-block">
                    <div className="phone-wrap">
                      <XcInput
                        name="phone1"
                        inputMode="tel"
                        value={phone1}
                        onChange={(e) => onChangePhone1(e.target.value)}
                        autoComplete="tel-area-code"
                        aria-label="전화번호 첫째칸"
                      />
                      <span aria-hidden="true">-</span>
                      <XcInput
                        name="phone2"
                        inputMode="tel"
                        value={phone2}
                        onChange={(e) => onChangePhone2(e.target.value)}
                        autoComplete="tel-local-prefix"
                        aria-label="전화번호 둘째칸"
                      />
                      <span aria-hidden="true">-</span>
                      <XcInput
                        name="phone3"
                        inputMode="tel"
                        value={phone3}
                        onChange={(e) => onChangePhone3(e.target.value)}
                        autoComplete="tel-local-suffix"
                        aria-label="전화번호 셋째칸"
                      />
                    </div>
                  </div>
                </label>
              </div>

              {/* 사용자 ID */}
              <div className="form-group">
                <label className="block">
                  <div className="label-title">사용자 ID <span className="required">(필수)</span></div>
                  <div className="form-block">
                    <div className="input-btn-group">
                      <XcInput
                        name="username"
                        placeholder="영문+숫자 4~16자"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        clearable
                        aria-required="true"
                        autoComplete="username"
                      />
                      <XcButton variant="preset-01" size="md">중복확인</XcButton>
                    </div>
                  </div>
                </label>
                <div className="ins"><i/><p>영문+숫자를 포함하여 최소 4~16자 까지 허용</p></div>
              </div>

              {/* 사업자등록증 (파일) */}
              <div className="form-group">
                <label className="block">
                  <div className="label-title">사업자등록증</div>
                  <div className="form-block">
                    <div className="input-btn-group">
                      <div className="sr-only">
                        <XcInput
                          ref={bizCertRef}
                          name="businessCert"
                          type="file"
                          accept=".jpg,.jpeg,.png,.gif,.bmp,.webp,.pdf"
                          hideFileUI
                          onChange={(e) => {
                            const file = (e.currentTarget.files && e.currentTarget.files[0]) || null;
                            setBizCertName(file ? file.name : "");
                          }}
                        />
                      </div>
                      {/* 파일명 표시용 읽기전용 인풋 */}
                      <XcInput
                        name="businessCertName"
                        placeholder="선택된 파일 없음"
                        value={bizCertName}
                        clearable
                        onClearClick={(doClear) => {
                          doClear();
                          setBizCertName("");
                          if (bizCertRef.current) {
                            bizCertRef.current.value = ""; // 숨김 file input 초기화
                          }
                        }}
                      />
                      <XcButton
                        type="button"
                        variant="preset-01"
                        size="md"
                        onClick={() => bizCertRef.current?.click()}
                      >
                        파일등록
                      </XcButton>
                    </div>
                  </div>
                </label>
                <div className="ins"><i/><p>JPG/PNG/PDF 파일만 가능, 최대 20MB</p></div>
              </div>

              {/* 재직증명서 (파일) */}
              <div className="form-group">
                <label className="block">
                  <div className="label-title">재직증명서</div>
                  <div className="form-block">
                    <div className="input-btn-group">
                      <div className="sr-only">
                        <XcInput
                          ref={empCertRef}
                          name="employmentCert"
                          type="file"
                          accept=".jpg,.jpeg,.png,.gif,.bmp,.webp,.pdf"
                          hideFileUI
                          onChange={(e) => {
                            const file = (e.currentTarget.files && e.currentTarget.files[0]) || null;
                            setEmpCertName(file ? file.name : "");
                          }}
                        />
                      </div>
                      {/* 파일명 표시용 읽기전용 인풋 */}
                      <XcInput
                        name="employmentCertName"
                        placeholder="선택된 파일 없음"
                        value={empCertName}
                        clearable
                        onClearClick={(doClear) => {
                          doClear();
                          setEmpCertName("");
                          if (empCertRef.current) {
                            empCertRef.current.value = "";
                          }
                        }}
                      />
                      <XcButton
                        type="button"
                        variant="preset-01"
                        size="md"
                        onClick={() => empCertRef.current?.click()}
                      >
                        파일등록
                      </XcButton>
                    </div>
                  </div>
                </label>
                <div className="ins"><i/><p>JPG/PNG/PDF 파일만 가능, 최대 20MB</p></div>
              </div>

            </form>
          </div>

          <div className="btn-wrap justify-between">
            <XcButton variant="outline" size="lg">취소하기</XcButton>
            <XcButton variant="default" size="lg">가입완료</XcButton>
          </div>  
        </div>
      </div>

      {/* 소속기관 선택 모달 */}
      <XcDialog open={orgModalOpen} onOpenChange={setOrgModalOpen}>
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
                              onClick={() => handleApplyOrg(name)}
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
    </>
  )
}

export default sampleJoinEnterInfo;