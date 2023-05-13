import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from '../Palette/Palette.module.css';
import colorboxStyles from '../ColorBox/ColorBox.module.css';

import ColorBox from '../ColorBox/ColorBox';
import NavBar from '../NavBar/NavBar';
import SnackBar from '../NavBar/SnackBar';
import PaletteFooter from '../PaletteFooter/PaletteFooter';

export default function SingleColorPalette({palette, colorId}){

  const [format, setFormat] = useState('hex');
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleSelect = (e) => {
    setFormat(e.target.value);
    setShowSnackbar(true);
  }

  const colorName = colorId.split('-')[0];
  const makeShades = (palette, colorName) => {
    let shades = [];
    const allColors = palette.colors;
    // console.log(allColors);
    for(let key in allColors){
      shades = shades.concat(
        allColors[key].filter((color) => {
          return color.id.split('-')[0] === colorName;
        })
      );
    }
    console.log(shades.slice(1));
    return shades.slice(1);
  }

  const shades = makeShades(palette, colorName);

  const renderedShades = shades.map((shade) => {
    return( 
      <ColorBox 
        key={shade.id} 
        name={shade.name}
        background={shade[format]}
        showLink={false}
        singleColorPalette={true}
      />
    );
  })

  return(
    <div className={`${styles.palette} ${styles['single-color-palette']}`}>
      <NavBar handleSelect={handleSelect} showSlider={false}/>
      <SnackBar 
        format={format} 
        setShowSnackbar={setShowSnackbar} 
        showSnackbar={showSnackbar}
      />
      <div className={styles['palette-colors']}>
        {renderedShades}
        <div 
          className={
            `${colorboxStyles['color-box']} ${colorboxStyles['go-back']}`
          }
        >
          <Link 
            to={`/palette/${palette.id}`}
            className={colorboxStyles['back-btn']}
          >GO BACK
          </Link>
        </div>
      </div>
      <PaletteFooter palette={palette}/>
    </div>
  );
}