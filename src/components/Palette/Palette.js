import { useState } from 'react';

import './Palette.css';

import ColorBox from "../ColorBox/ColorBox";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

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
      <Slider 
        defaultValue={level} 
        min={100} 
        max={900}
        step={100}
        onAfterChange={changeLevel}
      />
      {/* navbar goes here */}
      <div className='palette-colors'>
        {colorBoxes}
      </div>
      {/* footer */}
    </div>
  );
}