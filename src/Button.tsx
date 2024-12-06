import { memo, ReactNode } from "react";
import clsx from "clsx";
import { Color } from ".";

interface ButtonProps {
  children: ReactNode
  color?: Color
  variant?: "solid" | "outline" | "ghost" | "soft" | "white"
}

const Button = memo(({ children, variant = "solid", color = "primary" }: ButtonProps) => {
  const classes = clsx(
    "py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
    {
      "border-transparent": ["ghost", "solid"].includes(variant),
      "text-white": variant === "solid",
    },
    variant === "solid" && {
      "bg-gray-800 hover:bg-gray-900 focus:bg-gray-900 dark:bg-white dark:text-neutral-800": color === "primary",
      "bg-gray-500 hover:bg-gray-600 focus:bg-gray-600": color === "secondary",
      "bg-blue-600 hover:bg-blue-700 focus:bg-blue-700": color === "info",
      "bg-teal-500 hover:bg-teal-600 focus:bg-teal-600": color === "success",
      "bg-red-500 hover:bg-red-600 focus:bg-red-600": color === "danger",
      "bg-yellow-500 hover:bg-yellow-600 focus:bg-yellow-600": color === "warning",
    },
    variant === "outline" && {
      "border-gray-800 text-gray-800 hover:border-gray-500 hover:text-gray-500 focus:border-gray-500 focus:text-gray-500 dark:border-white dark:text-white dark:hover:text-neutral-300 dark:hover:border-neutral-300": color === "primary",
      "border-gray-500 text-gray-500 hover:border-gray-800 hover:text-gray-800 focus:border-gray-800 focus:text-gray-800 dark:border-neutral-400 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hover:border-neutral-300": color === "secondary",
      "border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 focus:text-blue-500 dark:border-blue-500 dark:text-blue-500 dark:hover:text-blue-400 dark:hover:border-blue-400": color === "info",
      "border-teal-500 text-teal-500 hover:border-teal-400 hover:text-teal-400 focus:border-teal-400 focus:text-teal-400": color === "success",
      "border-red-500 text-red-500 hover:border-red-400 hover:text-red-400 focus:border-red-400 focus:text-red-400": color === "danger",
      "border-yellow-500 text-yellow-500 hover:border-yellow-400 focus:border-yellow-400 focus:text-yellow-400": color === "warning",
    },
    variant === "ghost" && {
      "text-gray-800 hover:bg-gray-100 focus:bg-gray-100 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700": color === "primary",
      "text-gray-500 hover:bg-gray-100 focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800": color === "secondary",
      "text-blue-600 hover:bg-blue-100 focus:bg-blue-100 hover:text-blue-800 focus:text-blue-800 dark:text-blue-500 dark:hover:bg-blue-800/30 dark:hover:text-blue-400 dark:focus:bg-blue-800/30 dark:focus:text-blue-400": color === "info",
      "text-teal-500 hover:bg-teal-100 focus:bg-teal-100 hover:text-teal-800 dark:hover:bg-teal-800/30 dark:focus:bg-teal-800/30 dark:hover:text-teal-400 dark:focus:text-teal-400": color === "success",
      "": color === "danger",
      "": color === "warning",
    },
  )

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  )
})

Button.displayName = "Button"

export default Button
