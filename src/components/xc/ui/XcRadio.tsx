import * as React from "react";
import { cn } from "@/lib/utils";
import XcLabel from "@/components/xc/ui/XcLabel";
import { Radio } from "@/components/ui/radio";

export type XcRadioProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "onChange" | "value" | "checked"
> & {
  id?: string;
  name: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  label?: string | React.ReactNode;
  labelPosition?: "left" | "right";
  className?: string;
  width?: number | string;
  height?: number | string;
  onChange?: (value: string) => void;
};

const XcRadio = ({
  id,
  name,
  value,
  checked,
  disabled,
  readOnly,
  label,
  labelPosition = "right",
  className,
  width,
  height,
  onChange,
  ...rest
}: XcRadioProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (readOnly) return;
    if (e.target.checked) onChange?.(value);
  };

  return (
    <XcLabel
      disabled={disabled}
      readOnly={readOnly}
      className={cn("xc-field-label xc-radio", className)}
      style={{ width, height }}
      htmlFor={id}
    >
      <div className="flex items-center">
        {labelPosition === "left" && (
          <span className="xc-radio-label-left-spacing">
            {typeof label === "string" ? label : label}
          </span>
        )}

        <Radio
          id={id}
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          onClick={(e) => {
            if (readOnly) {
              e.preventDefault();
              e.stopPropagation();
            }
          }}
          className="xc-focus-visible xc-aria-invalid"
          {...rest}
        />

        {labelPosition === "right" && (
          <span className="xc-radio-label-right-spacing">
            {typeof label === "string" ? label : label}
          </span>
        )}
      </div>
    </XcLabel>
  );
};

export default XcRadio;
