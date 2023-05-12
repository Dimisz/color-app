import { useState } from 'react';

import styles from './ColorBox.module.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

export default function ColorBox({
  background, 
  name, 
  colorBoxUrl,
  showLink
}){
  const [isCopied, setIsCopied] = useState(false);
  
  const showOverlay = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false)
    }, 1500);
  }

  return(
    <CopyToClipboard text={background} onCopy={showOverlay}>
      <div
        style={{background}}
        className={styles['color-box']}
      >
        <div 
          className={styles[`copy-overlay ${isCopied ? 'show' : ''}`]}
          style={{background}}
        ></div>
        <div className={styles[`copy-message ${isCopied ? 'show' : ''}`]}>
          <h1>Copied!</h1>
          <p>{background}</p>
        </div>
        <div className={styles['copy-container']}>
          <div className={styles['box-content']}>
            <span>{name}</span>
          </div>
          <button className={styles['copy-btn']}>Copy</button>
        </div>
        { showLink &&
            <Link to={`/palette/${colorBoxUrl}`} onClick={(e) => e.stopPropagation()}>
              <span className='see-more'>MORE</span>
            </Link>
        }
      </div>
    </CopyToClipboard>
  );
}