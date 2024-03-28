import clsx from "clsx"

type Props = React.PropsWithChildren<{
  selected: boolean
  onSelect: () => void
}>

export default function Tab({ selected, onSelect, children }: Props) {
  return (
    <button
      role="tab"
      aria-selected={selected}
      aria-label={children?.toString()}
      onClick={onSelect}
      className={clsx(
        "py-3 flex-1 flex items-center justify-center font-semibold border-b-2",
        selected
          ? "text-custom-beige border-custom-beige"
          : "border-transparent text-gray-300"
      )}
    >
      {children}
    </button>
  )
}
