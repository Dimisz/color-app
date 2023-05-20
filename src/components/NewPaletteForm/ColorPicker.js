import { useEffect, useState } from 'react';
import { Button, Typography } from "@mui/material";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default function ColorPicker({onAdd, colors, clearColors, addRandomColor}){
  const [currentColor, setCurrentColor] = useState('teal');
  const [enteredColorName, setEnteredColorName] = useState('');
  
  const paletteFull = colors.length > 19;
  
  const changeColorName = (e) => {
    setEnteredColorName(e.target.value);
  }

  const updateColor = (newColor) => {
    setCurrentColor(newColor.hex);
  }

  const submitNewColor = () => {
    const newColor = {
      color: currentColor,
      name: enteredColorName
    }
    onAdd(newColor);
  }
 
  useEffect(() => {
    ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
      return colors.every(({name}) => name.toLowerCase() !== value.toLowerCase());
    });
    ValidatorForm.addValidationRule('isColorUnique', () => {
      return colors.every(({color}) => color !== currentColor);
    });
  }, [colors, currentColor]);

  return(
       <>
         <Typography variant='h4'>
            Design You Palette
          </Typography>
          <div>
            <Button 
              variant='contained' 
              color='secondary'
              onClick={clearColors}
            >
              Clear Palette
            </Button>
            <Button 
              variant='contained' 
              color='primary'
              onClick={addRandomColor}
              disabled={paletteFull}
            >
              {
              paletteFull 
              ?
              'Palette Full'
              :
              'Random Color'
            }
            </Button>
          </div>
          <ChromePicker
            color={currentColor}
            onChangeComplete={updateColor}
          />
          <ValidatorForm
            onSubmit={submitNewColor}
          >
            <TextValidator 
              value={enteredColorName}
              onChange={changeColorName}
              validators={['required', 'isColorNameUnique', 'isColorUnique']}
              errorMessages={['this field is required', 'color name must be unique', 'color already used']}
            />
            <Button 
            variant='contained' 
            color='primary'
            style={{
              backgroundColor: paletteFull ? 'grey' : currentColor
            }}
            type='submit'
            disabled={paletteFull}
          >
            {
              paletteFull 
              ?
              'Palette Full'
              :
              'Add Color'
            }
          </Button>
          </ValidatorForm>
       </>
  )
}
