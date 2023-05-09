import './Palette.css';

import ColorBox from "../ColorBox/ColorBox";

export default function Palette(props){
  const colorBoxes = props.colors.map((color) => {
    return (
      <ColorBox 
        key={color.name} 
        background={color.color} 
        name={color.name}
      />
    )
  });

  return(
    <div className="palette">
      {/* navbar goes here */}
      <div className='palette-colors'>
        {colorBoxes}
      </div>
      {/* footer */}
    </div>
  );
}