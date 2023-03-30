import React, { ChangeEventHandler } from 'react'
import style from 'styles/components/_selectionButton.module.scss'

export type SelectionButtonProps = {
  group?: string
  label: string
  type: 'radio' | 'checkbox'
  value: any
  changed?: ChangeEventHandler
  isSelected?: boolean
}

export const SelectionButton = ({
  group,
  label,
  type,
  value,
  changed,
  isSelected,
}: SelectionButtonProps) => {
  return (
    <div>
      <input
        type={type}
        className="custom-radio"
        name={group}
        value={value}
        checked={isSelected}
        onChange={changed}
      />
      <span className={style.textLabel}>{label}</span>
    </div>
  )
}
