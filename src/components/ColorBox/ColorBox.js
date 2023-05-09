import { useState } from 'react';

import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function ColorBox({background, name}){
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
        className='color-box'
      >
        <div 
          className={`copy-overlay ${isCopied ? 'show' : ''}`}
          style={{background}}
        ></div>
        <div className={`copy-message ${isCopied ? 'show' : ''}`}>
          <h1>Copied!</h1>
          <p>{background}</p>
        </div>
        <div className='copy-container'>
          <div className='box-content'>
            <span>{name}</span>
          </div>
          <button className='copy-btn'>Copy</button>
        </div>
        <span className='see-more'>MORE</span>
      </div>
    </CopyToClipboard>
  );
}