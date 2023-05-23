import { Link, NavLink } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import MiniPalette from "./MiniPalette";
import styles from './PaletteList.module.css';

export default function PaletteList({palettes, deletePalette}){
  
  const renderedPalettes = palettes.map((palette) => {
    return (
    <CSSTransition 
      key={palette.id}
      classNames='fade'
      timeout={500}
    >
      <MiniPalette deletePalette={deletePalette} {...palette}/>
    </CSSTransition>
    );
  });

  return(
    <div className={styles.root}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <h1>React Colors</h1>
          <Link to='/palette/new'>Create Palette</Link>
        </nav>
        <TransitionGroup className={styles.palettes}>
          {renderedPalettes}
        </TransitionGroup>
      </div>
    </div>
  );
} 