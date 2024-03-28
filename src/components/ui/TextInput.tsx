import React from "react"

import Label from "./Label"
import BaseInput from "./BaseInput"
import type { BasicInputProps } from "./BaseInput"

type Props = BasicInputProps & {
  label?: string
  optional?: boolean
}

const TextInput = React.forwardRef<HTMLInputElement, Props>(
  ({ label, optional, ...props }, ref) => {
    const inputId = React.useId()
    return (
      <div>
        <Label {...{ id: inputId, optional }}>{label}</Label>
        <div>
          <BaseInput id={inputId} {...{ ref, ...props }} />
        </div>
      </div>
    )
  }
)

export default TextInput
