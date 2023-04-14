import style from 'styles/components/_loading.module.scss'
const Loading = () => {
  return (
    <div className={style.loading}>
      <div className={style.spinner}>
        <span className={style.one}></span>
        <span className={style.two}></span>
        <span className={style.three}></span>
      </div>
    </div>
  )
}

export default Loading
