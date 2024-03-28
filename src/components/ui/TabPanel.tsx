import clsx from "clsx"

type Props = React.ComponentPropsWithoutRef<"div">

export default function TabPanel(props: Props) {
  return (
    <div role="tabpanel" {...props} className={clsx("pt-5", props.className)} />
  )
}
