import './ColorBox.css';

export default function ColorBox({background, name}){
  return(
    <div 
      style={{background: background}}
      className='color-box'
    >
      <span>{name}</span>
      <span>More</span>
    </div>
  );
}