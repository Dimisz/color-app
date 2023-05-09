import Palette from "./components/Palette/Palette";
import seedColors from "./helpers/seedColors";

import { generatePalette } from "./helpers/colorHelpers";

export default function App(){
  console.log(generatePalette(seedColors[4]));
  return(
    <Palette palette={generatePalette(seedColors[3])}/>
  );
}