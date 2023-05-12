import { useState } from 'react';
import ColorBox from '../ColorBox/ColorBox';

export default function SingleColorPalette({palette, colorId}){

  const colorName = colorId.split('-')[0];
  const makeShades = (palette, colorName) => {
    let shades = [];
    const allColors = palette.colors;
    for(let key in allColors){
      shades = shades.concat(
        allColors[key].filter((color) => {
          return color.id.includes(colorName);
        })
      );
    }
    console.log(shades.slice(1));
    return shades.slice(1);
  }

  const shades = makeShades(palette, colorName);

  const renderedShades = shades.map((shade) => {
    return( 
      <ColorBox 
        key={shade.id} 
        name={shade.name}
        background={shade.hex}
        showLink={false}
      />
    );
  })

  return(
    <div className='palette'>
      <h1>Single Color Palette</h1>
      <div className='palette-colors'>
        {renderedShades}
      </div>
    </div>
  );
}