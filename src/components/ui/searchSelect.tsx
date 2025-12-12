import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import IcSelectArrow from "@/assets/images/common/ic_select_arrow.svg?react"
import IcSelectSearch from "@/assets/images/common/ic_select_search.svg?react"

interface Props {
  value?: string
  placeholder?: string
  options: string[]
  onChange?: (v: string) => void
  disabled?: boolean
}

export default function SearchSelect({
  value,
  placeholder = "선택",
  options,
  onChange,
  disabled = false
}: Props) {
  const [open, setOpen] = useState(false)
  const [keyword, setKeyword] = useState("")
  const [internal, setInternal] = useState(value || "")
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  // value prop이 변경되면 internal state 업데이트
  useEffect(() => {
    setInternal(value || "")
  }, [value])

  // 외부 클릭 시 닫힘
  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      if (!wrapperRef.current) return
      if (!wrapperRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", clickHandler)
    return () => document.removeEventListener("mousedown", clickHandler)
  }, [])

  // 스크롤 시 닫힘
  // useEffect(() => {
  //   const scrollHandler = () => setOpen(false)
  //   window.addEventListener("scroll", scrollHandler, true)
  //   return () => window.removeEventListener("scroll", scrollHandler, true)
  // }, [])

  const filtered = keyword
    ? options.filter((o) =>
        o && typeof o === 'string' && o.toLowerCase().includes(keyword.toLowerCase())
      )
    : options.filter((o) => o != null && typeof o === 'string')

  const handleSelect = (v: string) => {
    setInternal(v)
    onChange?.(v)
    setOpen(false)
    setKeyword("") 
  }

  return (
    <div className="relative w-full" ref={wrapperRef}>
      {/* Trigger */}
      <button
        type="button"
        disabled={disabled}
        className={cn(
          "group w-full h-[40px] py-[10px] px-[20px] rounded-[6px] border border-[#717171] bg-white flex items-center justify-between text-left",
          "focus:outline-none focus-visible:outline-none",
          "focus:border-[#246BEB] focus-visible:border-[#246BEB]",
          "disabled:bg-[#F0F0F0] disabled:border-[#C6C6C6] disabled:cursor-default",
        )}
        onClick={() => {
          if (!disabled) setOpen(!open)
        }}
      >
        <span
          className={cn(
            "truncate",
            !internal ? "text-[#999]" : "text-[#1D1D1D]"
          )}
        >
          {internal || placeholder}
        </span>

        <IcSelectArrow
          className={cn(
            "w-[20px] h-[20px] transition-transform duration-200",
            open && "rotate-180",
            disabled && "opacity-70"
          )}
        />
      </button>

      {/* Dropdown */}
      {open && !disabled && (
        <div className="absolute left-0 top-[44px] z-50 bg-white w-full border border-[#CDD1D5] rounded-[6px] shadow-[0px_4px_8px_rgba(0,0,0,0.09)] p-[3px]">
          
          {/* Search Input */}
          <div className="px-[4px] py-[4px] relative">
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="검색어 입력"
              className="w-full h-[38px] text-[15px] border border-[#58616A] rounded-[6px] focus:outline-none focus:border-[#246BEB]"
              autoFocus
            />
            <IcSelectSearch className="w-[20px] h-[20px] absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Options */}
          <div className="max-h-60 overflow-y-auto p-1">
            {filtered.map((item, index) => (
              <button
                key={`${item}-${index}`}
                type="button"
                onClick={() => handleSelect(item)}
                className={cn(
                  "w-full text-left px-[10px] py-[8px] rounded-[6px] text-[15px]",
                  item === internal
                    ? "bg-[#EEF2F7] text-[#003675]"
                    : "hover:bg-[#EEF2F7]"
                )}
              >
                {item}
              </button>
            ))}

            {filtered.length === 0 && (
              <div className="py-3 text-center text-[#888] text-[14px]">
                검색 결과가 없습니다.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
