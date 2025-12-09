import React from 'react';
import UiButton from '../../components/button/UiButton';

function TheButton() {
  return (
    <div className="pub-guide">
      <h1>버튼 <small>UiButton</small></h1>
      <h2>기본형 버튼</h2>
      <div className="btn-wrap">
        <UiButton type="button" className="btn s1 c1" onClick={() => alert('Button clicked!')}>
          버튼
        </UiButton>
        <UiButton type="submit" className="btn s2 c2">
          버튼
        </UiButton>
        <UiButton type="button" className="btn s3 c3">
          버튼
        </UiButton>
        <UiButton type="button" className="btn btn-icon s4 c4" disabled>
+          모르겠습니다
+       </UiButton>
      </div>

      <h2>Disabled</h2>
      <div className="btn-wrap">
        <UiButton type="button" className="btn s1 c1" disabled>
          버튼
        </UiButton>
        <UiButton type="submit" className="btn s2 c2" disabled>
          버튼
        </UiButton>
        <UiButton type="button" className="btn s3 c3" disabled>
          버튼
        </UiButton>
      </div>

      <h2>Hover Effect</h2>
      <div className="btn-wrap">
        <UiButton type="button" className="btn btn-hover color1">
          버튼
        </UiButton>
        <UiButton type="button" className="btn btn-hover color2">
          버튼
        </UiButton>
        <UiButton type="button" className="btn btn-hover color3">
          버튼
        </UiButton>
        <UiButton type="button" className="btn btn-hover color4">
          버튼
        </UiButton>
      </div>

      <h2>아이콘 버튼</h2>
      <div className="btn-wrap">
        <UiButton type="button" className="btn btn-icon c1">
          <i className="ic-search" />
        </UiButton>
      </div>
    </div>
  );
}

export default TheButton;
