
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

const FormDialog = ({allPalettes, savePalette, colors}) => {
  const [open, setOpen] = useState(false);
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

  const handleSavePalette = () => {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.replace(/\s+/g, '-').toLowerCase(),
      emoji: '🇰🇭',
      colors: colors
    }
    savePalette(newPalette);
    history('/');
  }

  const handleSubmitNewPalette = (e) => {
    e.preventDefault();
    handleSavePalette();
    handleClose();
  }


  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Save Palette
      </Button>

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
    </div>
  );
}

export default FormDialog;