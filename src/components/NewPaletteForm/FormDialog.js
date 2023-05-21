
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
// mui
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// end of mui components

import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

const FormDialog = ({allPalettes, savePalette, colors}) => {
  const [open, setOpen] = useState(false);
  const [emojiOpen, setEmojiOpen] = useState(false);

  const [newPaletteName, setNewPaletteName] = useState('');
  const history = useNavigate();


  useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => {
      return allPalettes.every(({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase());
    });
  }, [allPalettes]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSavePalette = (emoji) => {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.replace(/\s+/g, '-').toLowerCase(),
      emoji: emoji,
      colors: colors
    }
    savePalette(newPalette);
    history('/');
  }

  const handleEmojiSelect = (val) => {
    setEmojiOpen(false);
    handleSavePalette(val.native);
  }

  const handleSubmitNewPalette = (e) => {
    e.preventDefault();
    handleClose();
    setEmojiOpen(true);
  }

  


  return (
    <>
      <Button 
        variant="outlined" 
        onClick={handleClickOpen}
      >
        Save Palette
      </Button>

      <Dialog open={emojiOpen} onClose={handleClose}>
        <Picker 
          data={data} 
          onEmojiSelect={handleEmojiSelect} theme='light'
        />
      </Dialog>

      <Dialog open={open} onClose={handleClose}>
        <ValidatorForm onSubmit={handleSubmitNewPalette}>
          <DialogTitle>Choose a Palettes Name</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please enter a name for your new palette. Make sure it's unique.
              </DialogContentText>
              <TextValidator
                  value={newPaletteName}
                  name='newPaletteName'
                  label='Palette Name'
                  onChange={(e) => setNewPaletteName(e.target.value)}
                  validators={['required', 'isPaletteNameUnique']}
                  errorMessages={['enter palette name', 'palette name already used']}
                  fullWidth
                  variant="standard"
                  autoFocus
                  margin="dense"
                />
            </DialogContent>
            <DialogActions>
                <Button
                  // variant='contained'
                  // color='primary'
                  type='submit'
                >
                  Save Palette
                </Button>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
          </ValidatorForm>
      </Dialog>
    </>
  );
}

export default FormDialog;