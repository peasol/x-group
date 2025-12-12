import * as React from "react"
import {ElementType, ReactNode} from "react"
import {Slot} from "@radix-ui/react-slot"

import {cn} from "@/lib/utils"
import {IXcComponent, IXcControlState} from "@/types/xc/xc-ui";
import {cva, type VariantProps} from "class-variance-authority";

const buttonVariants = cva(
    "xc-button",
    {
        variants: {
            variant: {
                default: "variant-default",
                destructive: "variant-destructive",
                outline: "variant-outline",
                secondary: "variant-secondary",
                ghost: "variant-ghost",
                link: "variant-link",
                icon: "variant-icon",
                'preset-01': "variant-preset-01",
                'preset-02': "variant-preset-02",
                'preset-03': "variant-preset-03",
            },
            size: {
                default: "size-default",
                sm: "size-sm",
                md: "size-md",
                lg: "size-lg",
                icon: "size-icon",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export type IShardcnButtonExtentions = & Pick<IXcControlState, "disabled">
    & IXcComponent
    & React.ComponentProps<"button">
    & {
        startIcon?: ReactNode | ElementType
        endIcon?: ReactNode
        asChild?: boolean
    }
    & VariantProps<typeof buttonVariants>

function Button(
    {
        className,
        variant = 'default',
        size = 'default',
        type = 'button',
        asChild = false,
        disabled,
        startIcon,
        endIcon,
        height,
        width,
        children,
        ...props
    }: IShardcnButtonExtentions
) {
    const Comp = asChild ? Slot : "button"

    return (
        <Comp
            type={type}
            data-slot="button"
            className={cn(
                buttonVariants({variant, size, className}),
                'xc-focus-visible xc-aria-invalid',
                {"xc-disabled": disabled},
            )}
            style={{width: width, height: height}}
            disabled={disabled}
            {...props}
        >
            {/*{StartIconComponent && <StartIconComponent />}*/}
            { startIcon }
            {children}
            {/*{EndIconComponent && <EndIconComponent/>}*/}
            { endIcon }
        </Comp>
    )
}

export {Button, buttonVariants}