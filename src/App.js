import { Route, Routes, useParams } from 'react-router-dom';

import Palette from "./components/Palette/Palette";
import PaletteList from "./components/PaletteList/PaletteList";
import SingleColorPalette from "./components/SingleColorPalette/SingleColorPalette";
import NewPaletteForm from './components/NewPaletteForm/NewPaletteForm';

import seedColors from "./helpers/seedColors";
import { generatePalette } from "./helpers/colorHelpers";


const findPalette = (id) => {
  return seedColors.find((palette) => {
    return palette.id === id;
  });
  // return seedColors[id];
}

const PaletteWrapper = () => {
  const { id } = useParams();
  // console.log(id);
  const palette = generatePalette(findPalette(id));
  return <Palette palette={palette} />;
}

const SingleColorPaletteWrapper = () => {
  const { paletteId, colorId } = useParams();
  console.log(paletteId, colorId);
  const palette = generatePalette(findPalette(paletteId));
  return(
    <SingleColorPalette 
          palette={palette} 
          colorId={colorId}
    />
  );
}

export default function App(){
  // console.log(generatePalette(seedColors[4]));
  return(
    <Routes>
      <Route 
          path='/' 
          element={<PaletteList palettes={seedColors}/>} 
      />
      <Route 
          path='/palette/new' 
          element={<NewPaletteForm/>} 
      />
      <Route 
          path='/palette/:id' 
          element={<PaletteWrapper />} 
      />
      <Route 
          path='/palette/:paletteId/:colorId'
          element={<SingleColorPaletteWrapper/>}
      />
    </Routes>
    // 
  );
}