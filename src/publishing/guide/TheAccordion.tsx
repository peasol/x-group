import React from "react";
import { UiAccordion, UiAccordionItem } from "../../components/accordion/UiAccordion";

function TheAccordion() {
  return (
    <div className="pub-guide">
      <h1>어코디언 <small>UiAccordion</small></h1>

      <UiAccordion>
        <UiAccordionItem title="첫 번째 내용" defaultOpen>
          첫 번째 어코디언 내용 영역입니다.
          <br />원하는 레이아웃을 자유롭게 넣을 수 있습니다.
        </UiAccordionItem>

        <UiAccordionItem title="두 번째 내용">
          두 번째 내용입니다.
        </UiAccordionItem>

        <UiAccordionItem title="세 번째 내용">
          세 번째 내용입니다.
        </UiAccordionItem>
      </UiAccordion>
    </div>
  );
}

export default TheAccordion;
