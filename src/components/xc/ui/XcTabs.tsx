import {ComponentProps} from "react";
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {cn} from "@/lib/utils.ts";
import {IXcComponent} from "@/types/xc/xc-ui";

type IXcTabs = ComponentProps<typeof Tabs>
interface IXcTabsContentProps extends IXcComponent{
    cacheContent?: boolean;
    value: string;
    activeTab: string;
}
type IXcTabListProps = ComponentProps<typeof TabsList>
type IXcTabsTriggerProps = ComponentProps<typeof TabsTrigger>


// Tab css group을 상속 형태로 정리
const XcTabs = (
    {
        className,
        ...props
    }: IXcTabs
) => {
    return (
        <Tabs className={cn('xc-tabs', className)} {...props} />
    )
}

const XcTabsContent = (
    {
        cacheContent = false,
        activeTab,
        value,
        children
    }: IXcTabsContentProps
) => {
    return (
        <>
            {cacheContent ? (
                <>
                    <div className={cn(value === activeTab ? "block" : "hidden", "w-full h-full")}>
                        {children}
                    </div>
                </>
            ) : (
                <>
                    {activeTab === value && (
                        <div className={'w-full h-full'}>{children}</div>
                    )}
                </>
            )}
        </>
    )
}

const XcTabsList = (
    {
        className,
        ...props
    }: IXcTabListProps
) => {
    return (
        <TabsList className={cn('xc-tabs-list', className)} {...props} />
    )
}

const XcTabsTrigger = (
    {
        className,
        disabled,
        ...props
    }: IXcTabsTriggerProps
) => {
    return (
        <TabsTrigger
            className={cn(
                'xc-tabs-trigger', "xc-focus-visible",
                {'xc-disabled' : disabled},
                className
            )}  {...props}
        />
    )
}

export {
    XcTabs,
    XcTabsContent,
    XcTabsList,
    XcTabsTrigger
}