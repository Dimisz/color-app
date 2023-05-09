import Palette from "./components/Palette";
import seedColors from "./seedColors";

export default function App(){
  return(
    <Palette {...seedColors[4]}/>
  );
}