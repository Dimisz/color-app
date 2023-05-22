import { Route, Routes, useParams } from 'react-router-dom';
import useLocalStorageState from './hooks/useLocalStorageState';

import Palette from "./components/Palette/Palette";
import PaletteList from "./components/PaletteList/PaletteList";
import SingleColorPalette from "./components/SingleColorPalette/SingleColorPalette";
import NewPaletteForm from './components/NewPaletteForm/NewPaletteForm';

import seedColors from "./helpers/seedColors";
import { generatePalette } from "./helpers/colorHelpers";


const App = () => {
  const [palettes, setPalettes] = useLocalStorageState('palettes', seedColors);
  
  const findPalette = (id) => {
    return palettes.find((palette) => {
      return palette.id === id;
    });
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
  const savePalette = (newPalette) => {
    setPalettes((prev) => {
      return [...prev, newPalette];
    });
    // console.log(newPalette);
  }

  const deletePalette = (paletteId) => {
    const filteredPalettes = palettes.filter((palette) => {
      return palette.id !== paletteId;
    });
    setPalettes(filteredPalettes);
  }

  return(
    <Routes>
      <Route 
          path='/' 
          element={<PaletteList palettes={palettes} deletePalette={deletePalette}/>} 
      />
      <Route 
          path='/palette/new' 
          element={
                    <NewPaletteForm 
                      savePalette={savePalette} 
                      allPalettes={palettes}
                  />} 
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

export default App;

