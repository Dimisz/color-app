import styles from './DraggableColorBox.module.css';
import { Delete } from '@mui/icons-material';
import chroma from 'chroma-js';

export default function DraggableColorBox({color, handleDelete}){
  const isDarkColor = chroma(color.color).luminance() <= 0.08;
  // const isLightColor = chroma(color.color).luminance() >= 0.7;
  return(
    <div 
      className={styles.root}
      style={{backgroundColor: color.color}}
    >
      <div className={`${styles['box-content']} ${isDarkColor ? styles['light-text'] : styles['dark-text']}`}>
        <span>{color.name}</span>
        <Delete
          onClick={() => handleDelete(color.name)}
          className={styles['delete-icon']}
        />
      </div>
    </div>
  )
}