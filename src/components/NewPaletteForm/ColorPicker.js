import { useEffect, useState } from 'react';
import { Button, Typography } from "@mui/material";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import styles from './ColorPicker.module.css';

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
    setEnteredColorName('');
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
       <div className={styles.container}>
         <Typography variant='h4' gutterBottom>
            Design You Palette
          </Typography>
          <div className={styles.btns}>
            <Button 
              className={styles.btn}
              variant='contained' 
              color='secondary'
              onClick={clearColors}
            >
              Clear Palette
            </Button>
            <Button 
              className={styles.btn}
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
            className={styles.picker}
          />
          <ValidatorForm
            onSubmit={submitNewColor}
            className={styles['validator-form']}
          >
            <TextValidator 
              value={enteredColorName}
              onChange={changeColorName}
              placeholder='Color Name'
              variant='filled'
              margin='normal'
              validators={['required', 'isColorNameUnique', 'isColorUnique']}
              errorMessages={['this field is required', 'color name must be unique', 'color already used']}
              className={styles['color-input']}
            />
            <Button 
            variant='contained' 
            color='primary'
            className={styles['add-color']}
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
       </div>
  )
}
