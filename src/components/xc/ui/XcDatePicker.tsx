import DatePicker, { DatePickerProps } from "react-datepicker";
import { ko } from "date-fns/locale";
import {IXcComponent, IXcControlState, IXcFloatingLabel, IXcClosableApi, IXcOpenState} from "@/types/xc/xc-ui";
import React, { useEffect, useState, useImperativeHandle, Ref, forwardRef } from "react";
import { cn } from "@/lib/utils.ts";
import XcInput from "@/components/xc/ui/XcInput.tsx";

export type IXcDatePickerProps =
    DatePickerProps &
    Omit<IXcComponent, 'ref'> &
    IXcControlState &
    IXcFloatingLabel &
    Omit<IXcOpenState, 'open'>

const XcDatePicker = forwardRef<IXcClosableApi, IXcDatePickerProps>(
    (
        {
            className = '',
            selected,
            showTimeSelect = false,
            dateFormat = showTimeSelect ? 'yyyy-MM-dd HH:mm' : 'yyyy-MM-dd',
            width,
            height,
            disabled,
            onChange,
            onLabelFloatingChange,
            onOpenChange,
            readOnly,
            ...props
        },
        ref
    ) => {
        const [open, setOpen] = useState<boolean>(false)
        const [date, setDate] = useState<Date | null | undefined>(selected || null)

        useEffect(() => {
            setDate(selected)
        }, [selected]);

        useEffect(() => {
            if (readOnly || disabled) {
                setOpen(false)
            }
        }, [readOnly, disabled]);

        useEffect(() => {
            onOpenChange?.(open)
        }, [open])

        useImperativeHandle(ref, () => ({
            close: () => setOpen(false)
        }), [])

        const handleChange = (date: any) => {
            setDate(date)
            onChange?.(date)
        }

        const handleClick = () => {
            if (!readOnly && !disabled) {
                setOpen(!open)
            }
        };

        return (
            <DatePicker
                className={cn(
                    `xc-date-picker`,
                    className,
                )}
                onClickOutside={() => setOpen(false)}
                onInputClick={handleClick}
                open={open}
                customInput={
                    <XcInput
                        onLabelFloatingChange={onLabelFloatingChange}
                        style={{ width, height }}
                    />
                }
                renderCustomHeader={(headerProps) => {
                    const { date, decreaseMonth, increaseMonth } = headerProps;
                    const year = date.getFullYear();
                    const month = date.getMonth() + 1;

                    return (
                        <div className="react-datepicker__header-custom flex items-center justify-center w-full px-[20px] pt-[7px] pb-[10px]">
                            <button
                                type="button"
                                onClick={decreaseMonth}
                                className="react-datepicker__navigation react-datepicker__navigation--previous"
                            >
                                <span />
                            </button>

                            <span className="react-datepicker__current-month-custom text-[17px] font-bold text-[#1D1D1D]">
                                {year}년 {month}월
                            </span>

                            <button
                                type="button"
                                onClick={increaseMonth}
                                className="react-datepicker__navigation react-datepicker__navigation--next"
                            >
                                <span />
                            </button>
                        </div>
                    );
                }}
                disabled={disabled}
                autoComplete="off"
                selected={date}
                onChange={handleChange}
                showTimeSelect={showTimeSelect}
                timeFormat="HH:mm"
                timeIntervals={5}
                timeCaption="시간"
                dateFormat={dateFormat}
                locale={ko}
                readOnly={readOnly}
                wrapperClassName={cn(
                    width !== undefined ? "w-fit" : "",
                    { "xc-disabled": disabled }
                )}
                {...props}
            />
        )
    })

export default XcDatePicker as (
    props: IXcDatePickerProps & { ref?: Ref<IXcClosableApi> }
) => React.ReactNode;
