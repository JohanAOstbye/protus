import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import style from 'styles/components/_input.module.scss'

export type InputProps = Pick<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'type' | 'value' | 'onChange' | 'value' | 'placeholder' | 'id' | 'name'
> & { color?: 'default' | 'dark'; contentWidth?: boolean }

export const Input = ({
  color = 'default',
  contentWidth,
  ...props
}: InputProps) => {
  return (
    <input className={`${style.input} ${style['input_' + color]}`} {...props} />
  )
}
