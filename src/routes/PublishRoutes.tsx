import Publishing from "@/pages/publishing/Publishing.tsx";
import UiTabs from "@/pages/publishing/guide/uiTabs.tsx";
import UiButton from "@/pages/publishing/guide/uiButton.tsx";
import UiTable from "@/pages/publishing/guide/uiTable.tsx";
import UiForms from "@/pages/publishing/guide/uiForms.tsx";
import UiDialog from "@/pages/publishing/guide/uiDialog.tsx";

import SampleMain from "@/pages/publishing/guide/sampleMain.tsx";
import SampleLogin from "@/pages/publishing/guide/sampleLogin.tsx";
import SampleJoinCert from "@/pages/publishing/guide/sampleJoinCert.tsx";
import SampleJoinAgreement from "@/pages/publishing/guide/sampleJoinAgreement.tsx";
import SampleJoinEnterInfo from "@/pages/publishing/guide/sampleJoinEnterInfo.tsx";

import SampleNotice from "@/pages/publishing/guide/sampleNotice.tsx";
import SampleNoticeDetail from "@/pages/publishing/guide/sampleNoticeDetail.tsx";
import SampleFaq from "@/pages/publishing/guide/sampleFaq.tsx";

import SampleITSApplication from "@/pages/publishing/guide/sampleITSApplication.tsx";
import SampleHiPassApplication from "@/pages/publishing/guide/sampleHiPassApplication.tsx";

import SampleMyPageUserInfo from "@/pages/publishing/guide/sampleMyPageUserInfo.tsx";
import SampleMyPageUserInfo2 from "@/pages/publishing/guide/sampleMyPageUserInfo2.tsx";
import SampleMyPageUserInfo3 from "@/pages/publishing/guide/sampleMyPageUserInfo3.tsx";
import SampleMyPageITSList from "@/pages/publishing/guide/sampleMyPageITSList.tsx";
import SampleMyPageITSDetail from "@/pages/publishing/guide/sampleMyPageITSDetail.tsx";
import SampleMyPageHiPassList from "@/pages/publishing/guide/sampleMyPageHiPassList.tsx";
import SampleMyPageHiPassDetail from "@/pages/publishing/guide/sampleMyPageHiPassDetail.tsx";

const PublishRoutes:any = [
    {
      path: '/publishing',
      element: <Publishing />
    },

    // components sample
    {
      path: '/publishing/guide/uiTabs',
      element: <UiTabs />
    },
    {
      path: '/publishing/guide/uiButton',
      element: <UiButton />
    },   
    {
      path: '/publishing/guide/uiTable',
      element: <UiTable />
    },   
    {
      path: '/publishing/guide/uiForms',
      element: <UiForms />
    },   
    {
      path: '/publishing/guide/uiDialog',
      element: <UiDialog />
    },  

    // pages
    {
      path: '/publishing/guide/sampleMain',
      element: <SampleMain />
    },    

    {
      path: '/publishing/guide/sampleLogin',
      element: <SampleLogin />
    },    
    {
      path: '/publishing/guide/sampleJoinCert',
      element: <SampleJoinCert />
    }, 
    {
      path: '/publishing/guide/sampleJoinAgreement',
      element: <SampleJoinAgreement />
    }, 
    {
      path: '/publishing/guide/sampleJoinEnterInfo',
      element: <SampleJoinEnterInfo />
    },

    {
      path: '/publishing/guide/sampleNotice',
      element: <SampleNotice />
    },
    {
      path: '/publishing/guide/sampleNoticeDetail',
      element: <SampleNoticeDetail />
    },
    {
      path: '/publishing/guide/sampleFaq',
      element: <SampleFaq />
    },

    {
      path: '/publishing/guide/sampleITSApplication',
      element: <SampleITSApplication />
    },
    {
      path: '/publishing/guide/sampleHiPassApplication',
      element: <SampleHiPassApplication />
    },
    
    {
      path: '/publishing/guide/sampleMyPageUserInfo',
      element: <SampleMyPageUserInfo />
    },
    {
      path: '/publishing/guide/sampleMyPageUserInfo2',
      element: <SampleMyPageUserInfo2 />
    },
    {
      path: '/publishing/guide/sampleMyPageUserInfo3',
      element: <SampleMyPageUserInfo3 />
    },
    {
      path: '/publishing/guide/sampleMyPageITSList',
      element: <SampleMyPageITSList />
    },
    {
      path: '/publishing/guide/sampleMyPageITSDetail',
      element: <SampleMyPageITSDetail />
    },
    {
      path: '/publishing/guide/sampleMyPageHiPassList',
      element: <SampleMyPageHiPassList />
    },
    {
      path: '/publishing/guide/sampleMyPageHiPassDetail',
      element: <SampleMyPageHiPassDetail />
    },
]

export default PublishRoutes