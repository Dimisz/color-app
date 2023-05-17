import { Button, Typography } from "@mui/material";
import { ChromePicker } from "react-color";

export default function ColorPicker(){
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
            color='purple'
            onChangeComplete={(newColor) => console.log(newColor)}
          />
          <Button variant='contained' color='primary'>
            Add Color
          </Button>
       </>
  )
}