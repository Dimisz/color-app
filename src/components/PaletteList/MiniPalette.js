import styles from './MiniPalette.module.css';
import { useNavigate } from 'react-router-dom';

export default function MiniPalette({paletteName, emoji, colors, id}){
  const history = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    history(`/palette/${id}`);
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
  })
  return(
    <div className={styles.root} onClick={handleClick}>
      <div className={styles.colors}>
        {miniColorBoxes}
      </div>
      <h5 className={styles.title}>
        {paletteName} 
        <span className={styles.emoji}>{emoji}</span>
      </h5>
    </div>
  )
}