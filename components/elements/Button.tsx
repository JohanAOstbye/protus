import { Colors } from 'lib/types/style'
import Link from 'next/link'
import React from 'react'
import style from 'styles/components/_button.module.scss'

export interface ButtonProps {
  children?: React.ReactNode
  text?: string
  url?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  //   outline?: boolean
  color?: Extract<Colors, 'blue' | 'blue_dark' | 'blue_grey'>
  target?: string
  disabled?: boolean
  className?: string
}
export const Button = ({
  children,
  text,
  url,
  onClick,
  //   outline = false,
  color = 'blue',
  target,
  disabled = false,
  className,
}: ButtonProps) => {
  return url ? (
    <Link href={url} target={target} passHref legacyBehavior>
      <a
        className={
          `${style.button} ${style.button_link} ${style[`button_${color}`]}` +
          className
            ? className
            : ''
        }
      >
        {text ? text : children}
      </a>
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={`${style.button} ${style.button_button} ${
        style[`button_${color}`]
      }`}
      disabled={disabled}
    >
      {text ? text : children}
    </button>
  )
}
