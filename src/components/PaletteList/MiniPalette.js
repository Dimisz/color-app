import styles from './MiniPalette.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { Delete } from '@mui/icons-material';
import ConfirmationDialog from './ConfirmationDialog';

const MiniPalette = ({paletteName, emoji, colors, id, deletePalette}) => {
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] = useState(false);
  const history = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    history(`/palette/${id}`);
  }

  const handleDelete = (e) => {
    e.stopPropagation();
    setIsConfirmationDialogOpen(true);
    // deletePalette(id);
  }
  
  const miniColorBoxes = colors.map((color) => {
    return(
      <div 
        key={color.name}
        className={styles.miniBox}
        style={{
          backgroundColor: color.color
        }}
      ></div>
    )
  });

  return(
    <div className={styles.root} onClick={handleClick}>
      <Delete 
        onClick={handleDelete}
        className={styles['delete-icon']}
        style={{
          transition: 'all 1.5s ease-in-out'
        }}
      />
      <div className={styles.colors}>
        {miniColorBoxes}
      </div>
      <h5 className={styles.title}>
        {paletteName} 
        <span className={styles.emoji}>{emoji}</span>
      </h5>
      <ConfirmationDialog
        isOpen={isConfirmationDialogOpen}
        closeConfirmationDialog={() => setIsConfirmationDialogOpen(false)}
        deletePalette={deletePalette} 
        id={id}
      />
    </div>
  )
}

export default MiniPalette;