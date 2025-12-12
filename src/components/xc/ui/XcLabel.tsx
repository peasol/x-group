import {ComponentProps} from "react";
import {Label} from "@/components/ui/label.tsx";
import {cn} from "@/lib/utils.ts";
import {IXcControlState} from "@/types/xc/xc-ui";

type IXcLabelProps = ComponentProps<typeof Label> & IXcControlState

// disabled 요소가 필요
// css group으로 뺄건 없고 className으로 요소 변경
const XcLabel = (
    {
        className,
        disabled,
        readOnly,
        ...props
    }: IXcLabelProps
) => {
    return (
        <Label className={cn(
                "xc-label",
                {"xc-disabled": disabled},
                { 'xc-input-readonly': readOnly},
                className
            )}
           {...props}
        />
    )
}

export default XcLabel