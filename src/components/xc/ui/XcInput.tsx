import React, { ComponentPropsWithoutRef, forwardRef } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { IXcComponent, IXcFloatingLabel } from "@/types/xc/xc-ui";
import { useXcInputFloatingLabel } from "./hooks/useXcInputFloatingLabel";
import { cva, VariantProps } from "class-variance-authority";
import { X as IconX } from "lucide-react";

export const inputVariant = {
  default: "variant-default",
  login: "variant-login",
  "preset-01": "variant-preset-01",
  "preset-02": "variant-preset-02",
  "preset-03": "variant-preset-03",
};

const inputVariants = cva("xc-input", {
  variants: { variant: inputVariant },
  defaultVariants: { variant: "default" },
});

export type IXcInputProps =
  ComponentPropsWithoutRef<typeof Input> &
  Omit<IXcComponent, "children" | "style"> &
  IXcFloatingLabel &
  VariantProps<typeof inputVariants> & {
    clearable?: boolean;
    onClearClick?: (callback: () => void) => void;
    hideFileUI?: boolean;
    type?: React.HTMLInputTypeAttribute;
    onlyNumber?: boolean; 
  };

export const XcInput = forwardRef<HTMLInputElement, IXcInputProps>(function XcInput(
  {
    className,
    width,
    height,
    readOnly,
    disabled,
    value,
    defaultValue,
    variant = "default",
    clearable = false,
    hideFileUI = false,
    onFocus,
    onBlur,
    onChange,
    onLabelFloatingChange,
    onClearClick,
    type: inputType = "text",
    onlyNumber = false,
    ...props
  },
  ref
) {
  const { handleFocus, handleBlur, handleChange } = useXcInputFloatingLabel({
    value,
    defaultValue,
    onLabelFloatingChange,
  });

  const isFile = inputType === "file";
  const isControlled = value !== undefined;

  const numberFilter = (val: string) => val.replace(/[^0-9]/g, "");

  const handleChangeInternal = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;

    if (onlyNumber) {
      newValue = numberFilter(newValue);
      e.target.value = newValue;
    }

    handleChange(e);
    onChange?.(e);
  };

  const handleClear = () => {
    const emptyValue = onlyNumber ? "" : inputType === "number" ? 0 : "";
    const target = { target: { value: emptyValue } } as any;

    if (onClearClick) {
      onClearClick(() => {
        handleChange(target);
        onChange?.(target);
      });
    } else {
      handleChange(target);
      onChange?.(target);
    }
  };

  return (
    <div className="relative w-full">
      <Input
        ref={ref}
        type={inputType}
        inputMode={onlyNumber ? "numeric" : undefined} 
        pattern={onlyNumber ? "[0-9]*" : undefined}
        className={cn(
          "peer",
          "xc-input-base",
          inputVariants({ variant }),
          className,
          { "!pr-7": clearable && !isFile },
          isFile && hideFileUI && "sr-only",
          "xc-focus-visible xc-aria-invalid",
          { "xc-input-readonly": readOnly },
          { "xc-disabled": disabled }
        )}
        style={{ width, height }}
        disabled={disabled}
        readOnly={readOnly}
        {...(isFile ? {} : isControlled ? { value } : { defaultValue })}
        onFocus={(e) => {
          handleFocus();
          onFocus?.(e);
        }}
        onBlur={(e) => {
          handleBlur();
          onBlur?.(e);
        }}
        onChange={handleChangeInternal}
        {...props}
      />

      {clearable && !!value && !isFile && (
        <button
          type="button"
          className="flex items-center absolute right-[20px] inset-y-1.5 cursor-pointer"
          onClick={handleClear}
          aria-label="입력 내용 지우기"
        >
          <IconX className="w-[20px] h-[20px]" />
        </button>
      )}
    </div>
  );
});

export default XcInput;
