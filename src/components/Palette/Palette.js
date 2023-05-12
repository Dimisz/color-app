import { useState } from 'react';

import SnackBar from '../NavBar/SnackBar';
import ColorBox from "../ColorBox/ColorBox";
import NavBar from '../NavBar/NavBar';
import PaletteFooter from '../PaletteFooter/PaletteFooter';

import styles from './Palette.module.css';

export default function Palette({palette}){
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');
  const [showSnackbar, setShowSnackbar] = useState(false);

  const colorBoxes = palette.colors[level].map((color) => {
    return (
      <ColorBox 
        key={color.name} 
        background={color[format]} 
        name={color.name}
        colorBoxUrl={`${palette.id}/${color.id}`}
        showLink={true}
      />
    )
  });

  const changeLevel = (newLevel) => {
    setLevel(newLevel);
  }

  const handleSelect = (e) => {
    setFormat(e.target.value);
    setShowSnackbar(true);
  }

  return(
    <div className={styles.palette}>
      <NavBar 
        level={level} 
        changeLevel={changeLevel}
        handleSelect={handleSelect}
        showSlider={true}
      />
      <SnackBar 
        format={format} 
        setShowSnackbar={setShowSnackbar} 
        showSnackbar={showSnackbar}
      />
      <div className={styles['palette-colors']}>
        {colorBoxes}
      </div>
      <PaletteFooter palette={palette} />
    </div>
  );
}