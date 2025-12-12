import {AnyObject} from "@/types/xc/xc-type";

export interface IXcClosableApi {
    close: () => void;
}

export interface IXcSkeleton {
    loading?: boolean
    renderSkeleton?: React.ReactNode
}

export interface IXcSelect<T> {
    defaultValue?: T[] | T
    onSelectionChange?: (values: T[] | T) => void
}

export interface IXcControlState {
    disabled?: boolean
    readOnly?: boolean
}

export interface IXcForm extends IXcControlState {
    name: string
    value?: any | any[]
    placeholder?: string
    // onChange?: (value: any | any[]) => void
}

export interface IXcSelectOption<T> {
    options?: T[]
    getOptionValue?: (option: T) => any
    getOptionLabel?: (option: T) => string
    disabledOption?: (option: T) => boolean
}

export interface IXcActionButton {
    buttonText?: string
    buttonIcon?: React.ReactNode
    buttonDisabled?: boolean
}

export interface IXcComponent {
    width?: string | number
    height?: string | number
    className?: string
    children?: any
    // ref?: RefObject<any>
    style?: AnyObject
}

export interface IXcShadcnExtensions {
    icon?: React.ReactNode
}

// 공통 정렬 옵션 (start, center, end, stretch)
export type JustifyAlignOptions = "start" | "center" | "end" | "stretch"

// align-self, justify-self에서만 사용되는 auto 추가
export type JustifyAlignSelfOptions = JustifyAlignOptions | "auto"

// align-items에서만 사용되는 baseline 추가
export type AlignItemsOptions = JustifyAlignOptions | "baseline"

// justify-content, align-content에서만 사용되는 추가 정렬 옵션
export type JustifyAlignContentOptions = JustifyAlignOptions | "space-between" | "space-around" | "space-evenly"

// 개별 아이템 정렬 (self 속성)
export type JustifySelf = JustifyAlignSelfOptions
export type AlignSelf = JustifyAlignSelfOptions

// Grid 전체 아이템 정렬 (items 속성)
export type JustifyItems = JustifyAlignOptions
export type AlignItems = AlignItemsOptions

// Flex/Grid 컨테이너 전체 정렬 (content 속성)
export type JustifyContent = JustifyAlignContentOptions
export type AlignContent = JustifyAlignContentOptions

// Flexbox 관련 속성 타입
export type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse"
export type FlexWrap = "nowrap" | "wrap" | "wrap-reverse"

// Flex 아이템 고유 속성 타입
export type FlexBasis = "auto" | "full" | "1/2" | "1/3" | "1/4" | "2/3" | "3/4" | `${number}px` | `${number}%`

// Grid Template 위치 설정 (시작/끝)
export type GridPlacement = "auto" | `${number}`
export type GridColumns = "auto" | "none" | `${number}`
export type GridRows = "auto" | "none" | `${number}`

// Display 속성 타입 정의
export type DisplayType = "block" | "inline-block" | "inline" | "hidden" | "contents" | "table"
export type FloatType = "left" | "right" | "none"

// Position 속성 타입 정의
export type PositionType = "static" | "relative" | "absolute" | "fixed" | "sticky"

export type LabelPosition = "left" | "right"
export type ScrollDirection = 'vertical' | 'horizontal' | 'both'
/**
 * Floating label state change callback
 */
export interface IXcFloatingLabel {
  /** 호출시 true면 label이 floating 상태, false면 기본 위치 */
  onLabelFloatingChange?: (floating: boolean) => void
}

export interface IXcOpenState {
    open?: boolean
    onOpenChange?: (open: boolean) => void
}