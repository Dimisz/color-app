import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";

export default function PaletteList({palettes}){
  
  const renderedPalettes = palettes.map((palette) => {
    return <MiniPalette key={palette.id} {...palette}/>;
  });

  return(
    <div>
      <MiniPalette/>
      <h1>React Colors</h1>
      {renderedPalettes}
    </div>
  );
} 