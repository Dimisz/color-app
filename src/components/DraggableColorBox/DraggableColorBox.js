import styles from './DraggableColorBox.module.css';
import { Delete } from '@mui/icons-material';

export default function DraggableColorBox({color, handleDelete}){
  return(
    <div 
      className={styles.root}
      style={{backgroundColor: color.color}}
    >
      <div className={styles['box-content']}>
        <span>{color.name}</span>
        <Delete
          onClick={() => handleDelete(color.name)}
          className={styles['delete-icon']}
        />
      </div>
    </div>
  )
}