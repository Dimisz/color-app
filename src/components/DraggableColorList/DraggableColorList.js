import { ReactSortable } from "react-sortablejs";
import DraggableColorBox from "../DraggableColorBox/DraggableColorBox";

const DraggableColorList = ({colors, deleteColor, setColors}) => {
  // const { colors, setColors, removeColor } = props;
  const renderedColors = colors.map((color) => {
    return( 
      <DraggableColorBox 
        key={color.name}
        color={color}
        handleDelete={deleteColor}
      />
    )
  });


  return(
    <ReactSortable
      tag='div'
      list={colors}
      setList={setColors}
      style={{height: '100%'}}
    >
      {/* <div style={{height: '100%'}}> */}
        {renderedColors}
        {/* </div> */}
    </ReactSortable>
  );
}

export default DraggableColorList;