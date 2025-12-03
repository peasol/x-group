import React from 'react';
import { UiTab, TabTitle, TabContent } from '../../components/tab/UiTab';

function TheTab() {
  return (
    <div className="pub-guide">
      <h1>탭 <small>UiTab</small></h1>
      <h2>기본형 탭</h2>
      <UiTab className="tabs-style1">
        <TabTitle>탭 1</TabTitle>
        <TabTitle>탭 2</TabTitle>
        <TabTitle>탭 3</TabTitle>
        <TabContent>
          Content for Tab 1
        </TabContent>
        <TabContent>
          Content for Tab 2
        </TabContent>
        <TabContent>
          Content for Tab 3
        </TabContent>
      </UiTab>
    </div>
  );
}

export default TheTab;
