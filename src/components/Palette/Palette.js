import { useState } from 'react';

import SnackBar from '../NavBar/SnackBar';
import ColorBox from "../ColorBox/ColorBox";
import NavBar from '../NavBar/NavBar';
import './Palette.css';

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
    <div className="palette">
      <NavBar 
        level={level} 
        changeLevel={changeLevel}
        handleSelect={handleSelect}
      />
      <SnackBar 
        format={format} 
        setShowSnackbar={setShowSnackbar} 
        showSnackbar={showSnackbar}
      />
      {/* navbar goes here */}
      <div className='palette-colors'>
        {colorBoxes}
      </div>
      <footer className='palette-footer'>
        {palette.paletteName}
        <span className='emoji'>{palette.emoji}</span>
      </footer>
    </div>
  );
}