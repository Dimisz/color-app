import { Route, Routes, useParams, useLocation } from 'react-router-dom';
import useLocalStorageState from './hooks/useLocalStorageState';

import Palette from "./components/Palette/Palette";
import PaletteList from "./components/PaletteList/PaletteList";
import SingleColorPalette from "./components/SingleColorPalette/SingleColorPalette";
import NewPaletteForm from './components/NewPaletteForm/NewPaletteForm';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import seedColors from "./helpers/seedColors";
import { generatePalette } from "./helpers/colorHelpers";
import './App.css';

const App = () => {
  const [palettes, setPalettes] = useLocalStorageState('palettes', seedColors);
  const location = useLocation();

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
    <TransitionGroup className='app' location={location}>
      <CSSTransition key={location.key} classNames='page' timeout={500}>
        <Routes location={location}>
          <Route
              path='/'
              element={
                <div className='page'>
                  <PaletteList 
                    palettes={palettes} 
                    deletePalette={deletePalette}
                  />
                </div>
                }
          />
          <Route
              path='/palette/new'
              element={
                      <div className='page'>
                        <NewPaletteForm
                          savePalette={savePalette}
                          allPalettes={palettes}
                        />
                      </div>
                    }
          />
          <Route
              path='/palette/:id'
              element={
                <div className='page'>
                  <PaletteWrapper />
                </div>
              }
          />
          <Route
              path='/palette/:paletteId/:colorId'
              element={
                <div className='page'>
                  <SingleColorPaletteWrapper/>
                </div>
                }
          />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;

