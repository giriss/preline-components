import { memo, type ReactNode } from "react"
import clsx from "clsx"
import { Color } from "."

interface AlertProps {
  title?: ReactNode
  children?: ReactNode
  color?: Color
}

const Alert = memo(({ title, children, color = "primary" }: AlertProps) => {
  const classes = clsx("mt-2 text-sm text-white rounded-lg p-4", {
    "bg-gray-800 dark:bg-white dark:text-neutral-800": color === "primary",
    "bg-gray-500": color === "secondary",
    "bg-blue-600 dark:bg-blue-500": color === "info",
    "bg-teal-500": color === "success",
    "bg-red-500": color === "danger",
    "bg-yellow-500": color === "warning",
  })

  return (
    <div className={classes} role="alert" tabIndex={-1} aria-labelledby="hs-solid-color-info-label">
      <span className="font-bold">{title}</span>
      <div>{children}</div>
    </div>
  )
})

Alert.displayName = "Alert"

export default Alert
