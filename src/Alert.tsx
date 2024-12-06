import { memo, type ReactNode } from "react"
import clsx from "clsx"
import { Color } from "."

interface AlertProps {
  title?: ReactNode
  children?: ReactNode
  color?: Color
  variant?: "solid" | "soft"
}

const Alert = memo(({ title, children, color = "primary", variant = "solid" }: AlertProps) => {
  const classes = clsx(
    "mt-2 text-sm rounded-lg p-4",
    {
      "text-white": variant === "solid",
      "border": variant === "soft",
    },
    variant === "solid" && {
      "bg-gray-800 dark:bg-white dark:text-neutral-800": color === "primary",
      "bg-gray-500": color === "secondary",
      "bg-blue-600 dark:bg-blue-500": color === "info",
      "bg-teal-500": color === "success",
      "bg-red-500": color === "danger",
      "bg-yellow-500": color === "warning",
      "bg-white text-gray-600": color === "light",
    },
    variant === "soft" && {
      "bg-gray-100 border-gray-200 text-gray-800 dark:bg-white/10 dark:border-white/20 dark:text-white": color === "primary",
      "bg-gray-50 border-gray-200 text-gray-600 dark:bg-white/10 dark:border-white/10 dark:text-neutral-400": color === "secondary",
      "bg-blue-100 border-blue-200 text-blue-800 dark:bg-blue-800/10 dark:border-blue-900 dark:text-blue-500": color === "info",
      "bg-teal-100 border-teal-200 text-teal-800 dark:bg-teal-800/10 dark:border-teal-900 dark:text-teal-500": color === "success",
      "bg-red-100 border-red-200 text-red-800 dark:bg-red-800/10 dark:border-red-900 dark:text-red-500": color === "danger",
      "bg-yellow-100 border-yellow-200 text-yellow-800 dark:bg-yellow-800/10 dark:border-yellow-900 dark:text-yellow-500": color === "warning",
      "bg-white/10 border-white/10 text-white": color === "light",
    },
  )

  return (
    <div className={classes} role="alert" tabIndex={-1} aria-labelledby="hs-solid-color-info-label">
      <span className="font-bold">{title}</span>
      <div>{children}</div>
    </div>
  )
})

Alert.displayName = "Alert"

export default Alert
