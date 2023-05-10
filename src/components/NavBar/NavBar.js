import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import './NavBar.css';

export default function NavBar({level, changeLevel}){
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
    </header>
  );
}