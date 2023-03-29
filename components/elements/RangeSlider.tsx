import React, { useState, useEffect, ChangeEventHandler } from 'react'
import style from 'styles/components/_rangeSlider.module.scss'

export type RangeSliderProps = {
  min: number
  max: number
  changed: ChangeEventHandler
  value: number
}

export default function RangeSlider({
  min,
  max,
  changed,
  value,
}: RangeSliderProps) {
  return (
    <div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={changed}
      />
      <span className={style.sliderValue}>{value}</span>
    </div>
  )
}
