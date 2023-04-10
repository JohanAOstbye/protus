import React from 'react'
import style from 'styles/components/_progressBar.module.scss'

export const ProgressBar = ({ percent }: { percent: number }) => {
  return (
    <div className={style.progressbar}>
      <div className={style.empty} style={{ width: '100%' }}>
        <div
          className={style.fill}
          style={{
            left: percent - 101 + '%',
            transition: '2s',
          }}
        />
      </div>
    </div>
  )
}
