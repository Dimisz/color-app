import { useState } from 'react';
import { Button, Typography } from "@mui/material";
import { ChromePicker } from "react-color";

export default function ColorPicker({onAdd}){
  const [currentColor, setCurrentColor] = useState('teal');

  const updateColor = (newColor) => {
    setCurrentColor(newColor.hex);
  }


  return(
       <>
         <Typography variant='h4'>
            Design You Palette
          </Typography>
          <div>
            <Button variant='contained' color='secondary'>
              Clear Palette
            </Button>
            <Button variant='contained' color='primary'>
              Random Color
            </Button>
          </div>
          <ChromePicker
            color={currentColor}
            onChangeComplete={updateColor}
          />
          <Button 
            variant='contained' 
            color='primary'
            style={{
              backgroundColor: currentColor
            }}
            onClick={() => onAdd(currentColor)}
          >
            Add Color
          </Button>
       </>
  )
}