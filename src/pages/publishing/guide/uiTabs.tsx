import useXcTabContent from "@/components/xc/ui/hooks/useXcTabContent.ts";
import {XcTabs, XcTabsContent, XcTabsList, XcTabsTrigger} from "@/components/xc/ui/XcTabs.tsx";

const uiTabs = () => {
  const {activeTab, setActiveTab} = useXcTabContent('0')
  
  return (
    <div className="inner">
      <section className="my-[30px] p-[30px] border border-[#e7e7e7] rounded-[2px]">
        <h2 className="flex items-end gap-[8px] text-[28px] font-semibold mb-[30px]">UI 컴포넌트 : 탭</h2>

        <XcTabs value={activeTab} onValueChange={setActiveTab}>
          <XcTabsList>
            <XcTabsTrigger value={'0'}>탭 첫번째</XcTabsTrigger>
            <XcTabsTrigger value={'1'}>탭 두번째</XcTabsTrigger>
          </XcTabsList>
        </XcTabs>
        <div className="my-[20px]">
          <XcTabsContent cacheContent value={'0'} activeTab={activeTab}>
            탭 첫번째
          </XcTabsContent>
          <XcTabsContent cacheContent value={'1'} activeTab={activeTab}>
            탭 두번째
          </XcTabsContent>
        </div>
      </section>
    </div>
  )
}

export default uiTabs;


