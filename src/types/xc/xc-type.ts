// export type AnyObject = Record<string, unknown>
export interface AnyObject {
    [key: string]: any;
}
export type Primitive = string | number | boolean | symbol | null | undefined
export type EmptyObject = Record<string, never>
export type Nullable<T> = T | null | undefined
export type NonNullable<T> = T extends null | undefined ? never : T
// 객체의 모든 속성을 선택적(?)으로 바꿈
export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}
// 객체의 모든 속성을 필수로 바꿈
export type DeepRequired<T> = {
    [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P]
}

// 모든 readOnly를 수정가능하도록 변경
export type Mutable<T> = {
    -readonly [P in keyof T]: T[P]
}

export type GenericFunction<P, R> = (param: P) => R
export type VoidFunction = () => void
export type AnyFunction = (...args: any[] | any) => any[] | any
export type AsyncFunction<R> = () => Promise<R>
export type CallbackFunction<P> = (param: P) => void

//export type LabelPosition = 'left' | 'right' | 'top' | 'bottom'
//export type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse'