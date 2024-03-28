import React from "react"
import clsx from "clsx"
import * as RadixSwitch from "@radix-ui/react-switch"

type Props = RadixSwitch.SwitchProps & {
  label: string
  hideLabel?: boolean
  tooltip?: string
}

export default function Switch({ label, hideLabel = false, ...props }: Props) {
  const inputId = React.useId()
  return (
    <div className="flex items-center gap-2">
      <RadixSwitch.Root
        {...props}
        id={inputId}
        aria-label={hideLabel ? label : undefined}
        className={clsx(
          "relative block h-6 w-11 rounded-full shadow bg-custom-black",
          "focus:ring-custom-beige data-[state=checked]:bg-custom-beige",
          props.className
        )}
      >
        <RadixSwitch.Thumb
          className={clsx(
            "block h-5 w-5 rounded-full bg-white shadow",
            "translate-x-[2px] transition-transform will-change-transform",
            "data-[state=checked]:translate-x-[22px]"
          )}
        />
      </RadixSwitch.Root>
      {!hideLabel && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium leading-5 text-gray-700"
        >
          {label}
        </label>
      )}
    </div>
  )
}
