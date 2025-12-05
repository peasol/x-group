import React, { useState } from "react";
import UiModal, { UiModalHeader, UiModalBody, UiModalFooter } from "../../components/modal/UiModal";
import UiButton from "../../components/button/UiButton";

function TheModal() {
  const [open, setOpen] = useState(false);

  return (
    <div className="pub-guide">
      <h1>모달 <small>UiModal</small></h1>

      <UiButton className="btn s2 c1" onClick={() => setOpen(true)}>
        모달 열기
      </UiButton>

      <UiModal open={open} onClose={() => setOpen(false)}>
        <UiModalHeader>모달 제목입니다</UiModalHeader>

        <UiModalBody>
          모달 내용 영역입니다.<br />
          텍스트뿐 아니라 폼 요소, 버튼 등 무엇이든 들어갈 수 있습니다.
        </UiModalBody>

        <UiModalFooter>
          <UiButton className="btn s2 c3" onClick={() => setOpen(false)}>
            닫기
          </UiButton>
          <UiButton className="btn s2 c1">
            확인
          </UiButton>
        </UiModalFooter>
      </UiModal>
    </div>
  );
}

export default TheModal;
