import styles from '../../styles/gift.module.css'

export default function Gift(){

  return(
    <div className={styles.gift}>
      <div className={styles.cover}></div>
      <div className={styles.box}></div>
      <div className={styles.tie1}></div>
      <div className={styles.tie2}></div>
    </div>
  )
}