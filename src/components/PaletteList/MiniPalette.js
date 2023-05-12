import styles from './MiniPalette.module.css';

export default function MiniPalette({paletteName, emoji}){
  return(
    <div className={styles.root}>
      <div className={styles.color}>

      </div>
      <h5 className={styles.title}>
        {paletteName} 
        <span className={styles.emoji}>{emoji}</span>
      </h5>
    </div>
  )
}