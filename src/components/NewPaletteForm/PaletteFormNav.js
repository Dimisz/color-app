import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import styles from './PaletteFormNav.module.css';

import { 
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import FormDialog from './FormDialog';

// import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';


const PaletteFormNav = ({allPalettes, savePalette, handleDrawerOpen, colors, open}) => {
  // const [newPaletteName, setNewPaletteName] = useState('');
  const history = useNavigate();

  // useEffect(() => {
  //   ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => {
  //     return allPalettes.every(({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase());
  //   });
  // }, [allPalettes]);


  // const handleSavePalette = () => {
  //   const newPalette = {
  //     paletteName: newPaletteName,
  //     id: newPaletteName.replace(/\s+/g, '-').toLowerCase(),
  //     emoji: '🇰🇭',
  //     colors: colors
  //   }
  //   savePalette(newPalette);
  //   history('/');
  // }

  // const handleSubmitNewPalette = (e) => {
  //   e.preventDefault();
  //   handleSavePalette();
  // }

  return(
    <>
      <CssBaseline />
      <AppBar position="fixed" color='default' open={open} className={styles.appbar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Create a Palette
          </Typography>  
        </Toolbar>
        <div className={styles['nav-bts']}>
            {/* <ValidatorForm onSubmit={handleSubmitNewPalette}>
              <TextValidator
                value={newPaletteName}
                name='newPaletteName'
                label='Palette Name'
                onChange={(e) => setNewPaletteName(e.target.value)}
                validators={['required', 'isPaletteNameUnique']}
                errorMessages={['enter palette name', 'palette name already used']}
              />
              <Button
                variant='contained'
                color='primary'
                type='submit'
              >
                Save Palette
              </Button>
            </ValidatorForm> */}
            <FormDialog allPalettes={allPalettes} savePalette={savePalette} colors={colors}/>
            <Button
                onClick={() => history('/')}
                variant='contained'
                color='secondary'
              >
                Go Back
            </Button>
          </div>
      </AppBar>
    </>
  )
}

export default PaletteFormNav;
