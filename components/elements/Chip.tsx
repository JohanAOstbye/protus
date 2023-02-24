import style from 'styles/components/_chip.module.scss'

export interface ChipProps {
  text?: string
}

export const Chip = ({ text }: ChipProps) => {
  return (
    <div className={style.container}>
      <div className={style.chipText}>{text}</div>
      <a
        className={style.exitBtn}
        //   onClick={() => destroy(thisChip)}
      ></a>
    </div>
  )
}
export default Chip
