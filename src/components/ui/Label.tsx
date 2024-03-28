import clsx from "clsx"

type Props = React.PropsWithChildren<{
  id?: string
  optional?: boolean
}>

export default function Label({
  id,
  optional = false,
  children: label,
}: Props) {
  if (!label) return null
  return (
    <div className="flex items-center gap-4 mb-1">
      <label
        htmlFor={id}
        className={clsx(
          "text-sm font-medium leading-5 text-gray-100",
          optional &&
            "after:ml-2 after:text-xs after:font-semibold after:uppercase after:text-gray-400 after:content-['(optional)']"
        )}
      >
        {label}
      </label>
    </div>
  )
}
