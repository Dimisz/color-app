import { useState } from 'react';

import ColorBox from "../ColorBox/ColorBox";
import NavBar from '../NavBar/NavBar';
import './Palette.css';

export default function Palette({palette}){
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');

  const colorBoxes = palette.colors[level].map((color) => {
    return (
      <ColorBox 
        key={color.name} 
        background={color[format]} 
        name={color.name}
      />
    )
  });

  const changeLevel = (newLevel) => {
    setLevel(newLevel);
  }

  const handleSelect = (e) => {
    setFormat(e.target.value);
  }

  return(
    <div className="palette">
      <NavBar 
        level={level} 
        changeLevel={changeLevel}
        handleSelect={handleSelect}
      />
      {/* navbar goes here */}
      <div className='palette-colors'>
        {colorBoxes}
      </div>
      {/* footer */}
    </div>
  );
}