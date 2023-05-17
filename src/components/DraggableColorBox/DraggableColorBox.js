import styles from './DraggableColorBox.module.css';

export default function DraggableColorBox({color}){
  return(
    <div 
      className={styles.root}
      style={{backgroundColor: color}}
    >
      {color}
    </div>
  )
}