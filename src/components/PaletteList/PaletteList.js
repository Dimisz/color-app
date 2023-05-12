import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import styles from './PaletteList.module.css';

export default function PaletteList({palettes}){
  
  const renderedPalettes = palettes.map((palette) => {
    return <MiniPalette key={palette.id} {...palette}/>;
  });

  return(
    <div className={styles.root}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <h1>React Colors</h1>
        </nav>
        <div className={styles.palettes}>
          {renderedPalettes}
        </div>
      </div>
    </div>
  );
} 