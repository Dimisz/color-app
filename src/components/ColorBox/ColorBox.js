import { useState } from 'react';
import chroma from 'chroma-js';

import styles from './ColorBox.module.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

export default function ColorBox({
  background, 
  name, 
  colorBoxUrl,
  showLink,
  singleColorPalette
}){
  const [isCopied, setIsCopied] = useState(false);
  
  const showOverlay = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false)
    }, 1500);
  }

  const isDarkColor = chroma(background).luminance() <= 0.08;
  const isLightColor = chroma(background).luminance() > 0.7;

  return(
    <CopyToClipboard text={background} onCopy={showOverlay}>
      <div
        style={{background}}
        className={`${styles['color-box']} ${singleColorPalette ? styles['single-color-palette'] : ''}`}
      >
        <div 
          className={`${styles['copy-overlay']} ${isCopied ? styles.show : ''}`}
          style={{background}}
        ></div>
        <div className={`${styles['copy-message']} ${isCopied ? styles.show : ''} ${isLightColor ? styles['dark-text'] : ''}`}>
          <h1>Copied!</h1>
          <p>{background}</p>
        </div>
        <div className={styles['copy-container']}>
          <div className={styles['box-content']}>
            <span className={isDarkColor ? styles['light-text'] : ''}>{name}</span>
          </div>
          <button className={`${styles['copy-btn']} ${isLightColor ? styles['dark-text'] : ''}`}>Copy</button>
        </div>
        { showLink &&
            <Link to={`/palette/${colorBoxUrl}`} onClick={(e) => e.stopPropagation()}>
              <span className={`${styles['see-more']} ${isLightColor ? styles['dark-text'] : ''}`}>MORE</span>
            </Link>
        }
      </div>
    </CopyToClipboard>
  );
}