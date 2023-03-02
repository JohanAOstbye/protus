import { Colors } from 'lib/types/style'
import React from 'react'
import style from 'styles/components/_button.module.scss'

export interface ButtonProps {
  children?: React.ReactNode
  text?: string
  url?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  //   outline?: boolean
  color?: Extract<Colors, 'blue' | 'blue-dark' | 'blue-grey'>
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
    <a
      className={
        `${style.button} ${style[`button-${color}`]}` + className
          ? className
          : ''
      }
      href={url}
      target={target}
    >
      {text ? text : children}
    </a>
  ) : (
    <button
      onClick={onClick}
      className={`${style.button} ${style[`button-${color}`]}`}
      disabled={disabled}
    >
      {text ? text : children}
    </button>
  )
}
