import React from "react"
import clsx from "clsx"

export type BasicInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  isValid?: boolean
  error?: string
}

const BaseInput = React.forwardRef<HTMLInputElement, BasicInputProps>(
  ({ isValid = true, error, ...props }, ref) => {
    const hasError = !isValid || !!error
    return (
      <div className="relative group">
        <input
          ref={ref}
          aria-invalid={hasError}
          type="text"
          {...props}
          className={clsx(
            "block w-full rounded-md shadow-sm sm:text-sm p-2",
            "text-gray-300",
            props.disabled
              ? "cursor-not-allowed bg-gray-800"
              : "bg-custom-black",
            "focus:border-custom-beige focus:ring-2 focus:ring-custom-beige",
            hasError
              ? "border-red-500 ring-2 ring-red-500/40"
              : "border-gray-600",
            props.className
          )}
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
      </div>
    )
  }
)

export default BaseInput
