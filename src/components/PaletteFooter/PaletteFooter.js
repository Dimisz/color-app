import styles from './PaletteFooter.module.css';

export default function PaletteFooter({palette}){
  return(
    <footer className={styles.footer}>
        {palette.paletteName}
        <span className={styles.emoji}>{palette.emoji}</span>
      </footer>
  )
}