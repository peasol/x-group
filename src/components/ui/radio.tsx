import * as React from "react";
import { cn } from "@/lib/utils";

export interface UIRadioProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Radio({ className, ...props }: UIRadioProps) {
  return (
    <input
      type="radio"
      className={cn("xc-input-radio", className)}
      {...props}
    />
  );
}
