import Palette from "./components/Palette/Palette";
import PaletteList from "./components/PaletteList/PaletteList";
import seedColors from "./helpers/seedColors";
import { generatePalette } from "./helpers/colorHelpers";
import { Route, Routes, useParams } from 'react-router-dom';


const findPalette = (id) => {
  return seedColors.find((palette) => {
    return palette.id === id;
  });
  // return seedColors[id];
}

const PaletteWrapper = () => {
  const { id } = useParams();
  console.log(id);
  const palette = generatePalette(findPalette(id));
  return <Palette palette={palette} />;
}

export default function App(){
  // console.log(generatePalette(seedColors[4]));
  return(
    <Routes>
      <Route path='/' element={
        <PaletteList palettes={seedColors}/>} 
      />
      <Route path='/palette/:id' element={
        <PaletteWrapper />} 
      />
    </Routes>
    // 
  );
}