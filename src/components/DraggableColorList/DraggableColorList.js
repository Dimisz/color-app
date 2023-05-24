import { ReactSortable } from "react-sortablejs";
import DraggableColorBox from "../DraggableColorBox/DraggableColorBox";
import styles from './DraggableColorList.module.css';

const DraggableColorList = ({colors, deleteColor, setColors}) => {
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
      className={styles.container}
    >
        {renderedColors}
    </ReactSortable>
  );
}

export default DraggableColorList;