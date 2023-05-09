import Palette from "./components/Palette/Palette";
import seedColors from "./seedColors";

export default function App(){
  return(
    <Palette {...seedColors[0]}/>
  );
}