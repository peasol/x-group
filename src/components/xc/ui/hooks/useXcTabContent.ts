import {useState} from "react";

const useXcTabContent = (defaultValue: string) => {
    const [activeTab, setActiveTab] = useState<string>(defaultValue)


    return {
        activeTab,
        setActiveTab
    }
}

export default useXcTabContent