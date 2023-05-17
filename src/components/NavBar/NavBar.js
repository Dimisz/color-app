import { useState } from 'react';
import { Link } from 'react-router-dom';

import Slider from 'rc-slider';
import { NativeSelect } from '@mui/material';

import 'rc-slider/assets/index.css';
import styles from './NavBar.module.css';

export default function NavBar({level, changeLevel, handleSelect, showSlider}){

  return(
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <Link to='/'>Color Picker</Link>
      </div>
      {showSlider &&
      <div>
        <span>Level: {level}</span>
        <div className={styles.slider}>
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
        </div>
      </div>
      }
      <div className={styles['select-container']}>
        <NativeSelect onChange={handleSelect}>
          <option value='hex'>HEX - #ffffff</option>
          <option value='rgb'>RGB - rgb(255, 255, 255)</option>
          <option value='rgba'>RGBA - rgba(255, 255, 255, 1.0)</option>
        </NativeSelect>
      </div>
    </header>
  );
}