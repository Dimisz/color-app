import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function ColorBox({background, name}){
  return(
    <CopyToClipboard text={background}>
      <div
        style={{background}}
        className='color-box'
      >
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