import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cn } from "@/lib/utils";
import IcSelectArrow from "@/assets/images/common/ic_select_arrow.svg?react";

type RootProps = React.ComponentProps<typeof SelectPrimitive.Root>;

interface SelectCtxValue {
  close?: () => void;
  open?: boolean;
}

const SelectCtx = React.createContext<SelectCtxValue>({});

function Select({
  children,
  open: openProp,
  onOpenChange,
  ...rest
}: RootProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);
  const isControlled = openProp !== undefined;
  const open = isControlled ? openProp : uncontrolledOpen;

  const setOpen = (next: boolean) => {
    if (!isControlled) {
      setUncontrolledOpen(next);
    }
    onOpenChange?.(next);
  };

  const close = React.useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <SelectCtx.Provider value={{ close, open }}>
      <SelectPrimitive.Root open={open} onOpenChange={setOpen} {...rest}>
        {children}
      </SelectPrimitive.Root>
    </SelectCtx.Provider>
  );
}

function SelectGroup(props: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group {...props} />;
}

function SelectValue(props: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value {...props} />;
}

function SelectTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger>) {
  return (
    <SelectPrimitive.Trigger
      data-radix-select-trigger=""
      style={{ outline: "none" }}
      className={cn(
        "group/select-trigger w-full h-[40px] py-[10px] px-[20px] border border-[#717171] bg-white rounded-[6px]",
        "cursor-pointer flex items-center justify-between gap-[8px] text-left",
        "focus:outline-none focus-visible:outline-none",
        "focus:border-[#246BEB] focus-visible:border-[#246BEB]",
        "focus:ring-0 focus-visible:ring-0",
        "disabled:cursor-default disabled:bg-[#F0F0F0] disabled:border-[#C6C6C6]",
        className
      )}
      {...props}
    >
      <span className="truncate">{children}</span>
      <IcSelectArrow
        className={cn(
          "w-[20px] h-[20px] block transition-transform duration-200",
          "group-data-[state=open]/select-trigger:rotate-180",
          "group-data-[disabled]/select-trigger:opacity-70"
        )}
      />
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  const { close, open } = React.useContext(SelectCtx);

  React.useEffect(() => {
    if (!open || !close) return;
    const handleWheel = () => {
      close();
    };
    window.addEventListener("wheel", handleWheel, { passive: true, capture: true });
    return () => {
      window.removeEventListener("wheel", handleWheel, { capture: true } as any);
    };
  }, [open, close]);

  return (
    <SelectPrimitive.Content
      className={cn(
        "bg-white text-[#1D1D1D] relative z-50 max-h-96 overflow-hidden p-[3px] rounded-[6px] border border-[#CDD1D5] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.09)]",
        "w-[var(--radix-select-trigger-width)]",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      onCloseAutoFocus={(e) => e.preventDefault()}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full scroll-my-1"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  );
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      className={cn("px-2 py-1.5 text-sm font-medium", className)}
      {...props}
    />
  );
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center gap-2 rounded-[6px] py-[8px] px-[10px] text-[15px] outline-none",
        "hover:bg-[#EEF2F7]",
        "data-[state=checked]:bg-[#EEF2F7] data-[state=checked]:text-[#003675]",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      className={cn("bg-[#E5E7EB] -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      className={cn("flex cursor-default items-center justify-center py-1", className)}
      {...props}
    >
      <IcSelectArrow className="w-[20px] h-[20px] rotate-180 opacity-60" />
    </SelectPrimitive.ScrollUpButton>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      className={cn("flex cursor-default items-center justify-center py-1", className)}
      {...props}
    >
      <IcSelectArrow className="w-[20px] h-[20px] opacity-60" />
    </SelectPrimitive.ScrollDownButton>
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
