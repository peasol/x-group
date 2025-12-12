import { ComponentProps } from "react";
import { Switch } from "@/components/ui/switch";
import { IXcComponent, IXcControlState } from "@/types/xc/xc-ui";
import { cn } from "@/lib/utils";
import XcLabel from "@/components/xc/ui/XcLabel";
import { cva, VariantProps } from "class-variance-authority";

export const switchVariants = cva("xc-switch", {
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

type BaseSwitchProps = Omit<
  ComponentProps<typeof Switch>,
  "onChange" | "onCheckedChange" | "checked" | "defaultChecked" | "value"
>;

export type IXcSwitchProps = BaseSwitchProps &
  Pick<IXcControlState, "disabled" | "readOnly"> &
  Omit<IXcComponent, "ref"> &
  VariantProps<typeof switchVariants> & {
    label?: string;
    value?: any;
    labelPosition?: "left" | "right";
    onChange?: (value: any) => void; 
    parseValue?: (value: any) => boolean;
    formatValue?: (value: boolean) => any;
    width?: number | string;
    height?: number | string;
  };

const XcSwitch = ({
  label,
  value,
  labelPosition = "right",
  onChange,
  readOnly,
  disabled,
  parseValue = (v) => !!v,
  formatValue = (v) => v,
  className,
  variant,
  width,
  height,
  style,
  ...props
}: IXcSwitchProps) => {
  const handleChange = (checked: boolean) => {
    if (!readOnly) onChange?.(formatValue(checked));
  };

  return (
    <XcLabel
      disabled={disabled}
      readOnly={readOnly}
      className={cn("xc-field-label", switchVariants({ variant, className }))}
    >
      {labelPosition === "left" && (
        <span className="xc-switch-label-left-spacing">{label}</span>
      )}

      <Switch
        className={cn(
          "peer",
          "xc-switch-toggle",
          "xc-focus-visible",
          { "xc-disabled": disabled },
          { "xc-input-readonly": readOnly }
        )}
        thumbClassName={cn("xc-switch-thumb")}
        style={{ width, height, ...style }}
        checked={parseValue(value)}
        disabled={disabled}
        onCheckedChange={handleChange}
        {...props}
      />

      {labelPosition === "right" && (
        <span className="xc-switch-label-right-spacing">{label}</span>
      )}
    </XcLabel>
  );
};

export default XcSwitch;
