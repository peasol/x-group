import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { cn } from "@/lib/utils"
import { IXcShadcnExtensions } from "@/types/xc/xc-ui";

function Checkbox({
  className,
  icon, 
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root> & IXcShadcnExtensions) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator data-slot="checkbox-indicator" className="hidden" />
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
