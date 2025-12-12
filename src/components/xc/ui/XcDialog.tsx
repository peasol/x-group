import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.tsx"
import {IXcComponent} from "@/types/xc/xc-ui"
import {cn} from "@/lib/utils.ts"
import {ComponentPropsWithoutRef, createContext, useContext, useState, useId, useEffect} from "react"
import XcButton from "@/components/xc/ui/XcButton.tsx"

interface IXcDialogContext {
    isOpen: boolean
    onOpenChange: (open: boolean) => void
}

const XcDialogContext = createContext<IXcDialogContext | undefined>(undefined)

export const useXcDialog = () => {
    const context = useContext(XcDialogContext)
    if (!context) {
        throw new Error('useXcDialog must be used within a XcDialog')
    }
    return context
}

type IXcDialogBodyProps = IXcComponent & {
    dividers?: boolean
}
type IDialogContentProps = ComponentPropsWithoutRef<typeof DialogContent> & {
    useXButton?: boolean
    onClose?: () => boolean | Promise<boolean>
}
type IXcDialogFooter = ComponentPropsWithoutRef<typeof DialogFooter>
type IXcDialogHeader = ComponentPropsWithoutRef<typeof DialogHeader>
type IXcDialogTitle = ComponentPropsWithoutRef<typeof DialogTitle>

const XcDialog = ({ children, ...props }: ComponentPropsWithoutRef<typeof Dialog>) => {
    const isControlled = props.open !== undefined && props.onOpenChange !== undefined
    const [internalOpen, setInternalOpen] = useState(false)
    const isOpen = isControlled ? (props.open ?? false) : internalOpen
    const onOpenChange = isControlled ? props.onOpenChange! : setInternalOpen
    
    return (
        <XcDialogContext.Provider value={{ isOpen, onOpenChange: onOpenChange }}>
            <Dialog open={isOpen} onOpenChange={onOpenChange} {...props}>
                {children}
            </Dialog>
        </XcDialogContext.Provider>
    )
}

const XcDialogTrigger = DialogTrigger

interface IXcDialogCloseProps extends Omit<ComponentPropsWithoutRef<'div'>, 'onClick'> {
    onClose?: () => boolean | Promise<boolean>
}

const XcDialogClose = ({ children, onClose, ...props }: IXcDialogCloseProps) => {
    const { onOpenChange } = useXcDialog()
    
    const handleClose = async () => {
        console.log('Trace.XcDialogClose.handleClose.onClose: ', onClose)
        if (onClose) {
            const result = await onClose()
            if (result) {
                onOpenChange(false)
            }
        } else {
            console.log('Trace.XcDialogClose.handleClose.onClose is null: ', onOpenChange)
            onOpenChange(false)
        }
    }
    
    return (
        <div onClick={handleClose} {...props}>
            {children}
        </div>
    )
}

const XcDialogBody = (
    {
        dividers = false,
        className,
        children
    }: IXcDialogBodyProps
) => {

    const bodyId = useId()

    return (
        <div
            id={bodyId}
            data-xc-body
            className={cn(
                'xc-dialog-body',
                {'xc-dialog-body-dividers': dividers},
                className
            )}>
            {children}
        </div>
    )
}

const XcDialogContent = ({ 
    className, 
    children, 
    useXButton = true,
    onClose,
    ...props 
}: IDialogContentProps) => {

    const [descId, setDescId] = useState<string | undefined>(undefined)

    useEffect(() => {
        const node = document.querySelector('.xc-dialog')
        if (!node) return
        const body = node.querySelector('[data-xc-body]')
        if (body instanceof HTMLElement) {
            setDescId(body.id)
        }
    }, [])

    useEffect(() => {
        const rootElement = document.getElementById('root')
        if (rootElement) {

            // Radix가 aria-hidden 넣기 전에 즉시 제거 → 경고 원천 차단
            rootElement.removeAttribute('aria-hidden')
            rootElement.removeAttribute('data-aria-hidden')

            const observer = new MutationObserver(() => {
                if (rootElement.hasAttribute('aria-hidden')) {
                    rootElement.removeAttribute('aria-hidden')
                    rootElement.removeAttribute('data-aria-hidden')
                }
            })
            
            observer.observe(rootElement, {
                attributes: true,
                attributeFilter: ['aria-hidden', 'data-aria-hidden']
            })

            if (rootElement.hasAttribute('aria-hidden')) {
                rootElement.removeAttribute('aria-hidden')
                rootElement.removeAttribute('data-aria-hidden')
            }

            return () => {
                observer.disconnect()
            }
        }
    }, [])

    return (
        <DialogContent
            aria-describedby={descId}
            className={cn(
                "xc-dialog [&_button:has(span.sr-only)]:hidden",
                "xc-dialog-modal",
                "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 duration-200",
                className
            )}
            onInteractOutside={(e) => {
                e.preventDefault()
            }}
            onOpenAutoFocus={(e) => {

                const rootElement = document.getElementById('root')
                if (rootElement) {
                    rootElement.removeAttribute('aria-hidden')
                    rootElement.removeAttribute('data-aria-hidden')
                }
                
                const content = e.currentTarget as HTMLElement
                if (content) {
                    const firstFocusable = content.querySelector(
                        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
                    ) as HTMLElement
                    
                    if (firstFocusable) {
                        e.preventDefault()
                        setTimeout(() => {
                            firstFocusable.focus()
                        }, 0)
                    }
                }
            }}
            {...props}
        >
            {children}

            {useXButton && (
                <XcDialogClose onClose={onClose}>
                    <XcButton
                        variant={'icon'}
                        size={'icon'}
                        className="xc-dialog-close-button"
                    />
                </XcDialogClose>
            )}
        </DialogContent>
    )
}

const XcDialogFooter = (
    {
        className,
        ...props
    }: IXcDialogFooter) => {
    return (
        <DialogFooter
            className={cn("xc-dialog-footer", className)}
            {...props}
        />
    )
}

const XcDialogHeader = (
    {
        className,
        ...props
    }: IXcDialogHeader) => {
    return (
        <DialogHeader
            className={cn("xc-dialog-header", className)}
            {...props}
        />
    )
}

const XcDialogTitle = (
    {
        className,
        ...props
    }: IXcDialogTitle) => {
    return (
        <DialogTitle
            className={cn(
                "text-lg leading-none font-semibold",
                "xc-dialog-title"
                , className)}
            {...props}
        />
    )
}

export {
    XcDialog,
    XcDialogTrigger,
    XcDialogClose,
    XcDialogHeader,
    XcDialogTitle,
    XcDialogBody,
    XcDialogContent,
    XcDialogFooter,
}

export default XcDialog
