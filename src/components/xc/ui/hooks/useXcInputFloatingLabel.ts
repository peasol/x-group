import { useState, useEffect } from 'react'

interface UseInputFloatingLabelParams {
  value?: any
  defaultValue?: any
  /** label floating on/off callback */
  onLabelFloatingChange?: (floating: boolean) => void
}

interface IXcUseInputFloatingLabelResult {
  handleFocus: () => void
  handleBlur: () => void
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

/**
 * Input 전용 Floating Label 훅
 * @param value 현재 입력 값
 * @param defaultValue 기본 입력 값
 * @param onLabelFloatingChange floating 상태 변경 시 호출
 */
export function useXcInputFloatingLabel({
  value,
  defaultValue,
  onLabelFloatingChange
}: UseInputFloatingLabelParams = {}): IXcUseInputFloatingLabelResult {
  const [focused, setFocused] = useState(false)
  const [hasValue, setHasValue] = useState(Boolean(value ?? defaultValue))

  // 값 변경 시 hasValue 업데이트
  useEffect(() => {
    setHasValue(Boolean(value ?? defaultValue))
  }, [value, defaultValue])

  // floating 상태 변경 시 콜백 호출
  useEffect(() => {
    onLabelFloatingChange?.(hasValue || focused)
  }, [hasValue, focused, onLabelFloatingChange])

  const handleFocus = () => setFocused(true)
  const handleBlur = () => setFocused(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(e.target.value !== '')
  }

  return { handleFocus, handleBlur, handleChange }
} 