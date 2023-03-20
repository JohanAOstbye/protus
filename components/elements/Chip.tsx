import style from 'styles/components/_chip.module.scss'

export interface ChipProps {
  text?: string
}

export const Chip = ({ text }: ChipProps) => {
  return (
    <div className={style.chip}>
      <div className={style.chip_text}>{text}</div>
      <button
        className={style.chip_button}
        onClick={() => console.log('chipfunction not implemented')}
      >
        x
      </button>
    </div>
  )
}
export default Chip
