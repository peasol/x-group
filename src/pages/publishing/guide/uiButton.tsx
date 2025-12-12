import XcButton from "@/components/xc/ui/XcButton.tsx";

const uiButton = () => {

  return (
    <div className="inner">
      <section className="my-[30px] p-[30px] border border-[#e7e7e7] rounded-[2px]">
        <h2 className="flex items-end gap-[8px] text-[28px] font-semibold mb-[30px]">UI 컴포넌트 : 버튼</h2>

        <div className="flex gap-[12px]">
          <XcButton variant="default" size="default">버튼</XcButton>
          <XcButton variant="outline" size="default">버튼</XcButton>
        </div>
        
        <div className="btn-wrap justify-between">
          <XcButton variant="outline" size="lg">이전으로</XcButton>
          <XcButton variant="default" size="lg">동의하기</XcButton>
        </div>  

        <div className="flex gap-[12px] mt-[20px]">
          <XcButton variant="default" size="lg" disabled>disabled</XcButton>
          <XcButton variant="outline" size="lg" disabled>disabled</XcButton>
        </div>        
      </section>
    </div>
  )
}

export default uiButton;


