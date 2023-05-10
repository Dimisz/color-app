import { useState } from 'react';

import ColorBox from "../ColorBox/ColorBox";
import NavBar from '../NavBar/NavBar';
import './Palette.css';

export default function Palette({palette}){
  const [level, setLevel] = useState(500);

  const colorBoxes = palette.colors[level].map((color) => {
    return (
      <ColorBox 
        key={color.name} 
        background={color.hex} 
        name={color.name}
      />
    )
  });

  const changeLevel = (newLevel) => {
    setLevel(newLevel);
  }

  return(
    <div className="palette">
      <NavBar level={level} changeLevel={changeLevel}/>
      {/* navbar goes here */}
      <div className='palette-colors'>
        {colorBoxes}
      </div>
      {/* footer */}
    </div>
  );
}