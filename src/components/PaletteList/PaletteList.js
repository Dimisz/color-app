import { Link } from "react-router-dom";

export default function PaletteList({palettes}){
  const renderedPalettes = palettes.map((palette) => {
    return( 
      <p key={palette.id}>
        <Link
          to={`/palette/${palette.id}`}
        >
          {palette.paletteName}
        </Link>
      </p>
    );
  });

  return(
    <div>
      <h1>React Colors</h1>
      {renderedPalettes}
    </div>
  );
} 