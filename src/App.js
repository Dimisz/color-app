import Palette from "./components/Palette/Palette";
import seedColors from "./helpers/seedColors";
import { generatePalette } from "./helpers/colorHelpers";
import { Route, Routes } from 'react-router-dom';

const InividualPalette = () => {
  return <h1>Individual palette</h1>
}

export default function App(){
  console.log(generatePalette(seedColors[4]));
  return(
    <Routes>
      <Route path='/palette' element={
        <Palette 
          palette={generatePalette(seedColors[4])}
        />} 
      />
      <Route path='/palette/:id' element={
        <InividualPalette/>} 
      />
    </Routes>
    // 
  );
}