import { ComponentProps } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { IXcComponent, IXcControlState } from "@/types/xc/xc-ui";
import { cn } from "@/lib/utils";
import XcLabel from "@/components/xc/ui/XcLabel";
import { cva, VariantProps } from "class-variance-authority";

export const checkboxVariants = cva("xc-checkbox", {
  variants: {
    variant: {
      default: "variant-default",
      secondary: "variant-secondary",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type IXcCheckboxProps = Omit<ComponentProps<typeof Checkbox>, "value" | "checked"> &
  Pick<IXcControlState, "disabled" | "readOnly"> &
  Omit<IXcComponent, "ref"> &
  VariantProps<typeof checkboxVariants> & {
    label?: string | React.ReactNode;
    value?: any;
    checked?: boolean;
    labelPosition?: "right" | "left";
    onChange?: (value: any) => void;
    parseValue?: (value: any) => boolean;
    formatValue?: (value: boolean) => any;
  };

const XcCheckbox = ({
  variant,
  label,
  value,
  labelPosition = "right",
  readOnly,
  disabled,
  checked,
  className,
  width,
  height,
  onChange,
  parseValue = (v) => !!v,
  formatValue = (v) => v,
  ...props
}: IXcCheckboxProps) => {
  const handleChange = (next: boolean) => {
    if (readOnly) return;
    const newValue = formatValue(next);
    onChange?.(newValue);
  };

  const isChecked = checked ?? parseValue(value);

  return (
    <XcLabel
      readOnly={readOnly}
      disabled={disabled}
      className={cn("xc-field-label", checkboxVariants({ variant, className }))}
      style={{ width, height }}
    >
      <div className="flex items-center">
        {labelPosition === "left" && (
          <span className="xc-checkbox-label-left-spacing">
            {typeof label === "string" ? label : label}
          </span>
        )}

        <Checkbox
          className={cn(
            "peer",
            "xc-input-checkbox xc-focus-visible xc-aria-invalid",
            { "xc-disabled": disabled },
            { "xc-input-readonly": readOnly }
          )}
          checked={isChecked}
          disabled={disabled}
          onCheckedChange={handleChange}
          onClick={(e) => {
            if (readOnly) {
              e.preventDefault();
              e.stopPropagation();
            }
          }}
          {...props}
        />

        {labelPosition === "right" && (
          <span className="xc-checkbox-label-right-spacing">
            {typeof label === "string" ? label : label}
          </span>
        )}
      </div>
    </XcLabel>
  );
};

export default XcCheckbox;
