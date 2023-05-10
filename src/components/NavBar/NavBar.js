import Slider from 'rc-slider';
import { NativeSelect } from '@mui/material';

import 'rc-slider/assets/index.css';
import './NavBar.css';

export default function NavBar({level, changeLevel, handleSelect}){
  return(
    <header className='navbar'>
      <div className='logo'>
        <a href='#'>Color Picker</a>
      </div>
      <div className='slider-container'>
        <span>Level: {level}</span>
        <div className='slider'>
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={changeLevel}
          />
        </div>
      </div>
      <div className='select-container'>
        <NativeSelect onChange={handleSelect}>
          <option value='hex'>HEX - #ffffff</option>
          <option value='rgb'>RGB - rgb(255, 255, 255)</option>
          <option value='rgba'>RGBA - rgba(255, 255, 255, 1.0)</option>
        </NativeSelect>
      </div>
    </header>
  );
}