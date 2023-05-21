import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import styles from './PaletteList.module.css';

export default function PaletteList({palettes, deletePalette}){
  
  const renderedPalettes = palettes.map((palette) => {
    return (
    // <Link key={palette.id} to={`/palette/${palette.id}`}>
      <MiniPalette key={palette.id} deletePalette={deletePalette} {...palette}/>
    // </Link>
    );
  });

  return(
    <div className={styles.root}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <h1>React Colors</h1>
          <Link to='/palette/new'>Create Palette</Link>
        </nav>
        <div className={styles.palettes}>
          {renderedPalettes}
        </div>
      </div>
    </div>
  );
} 