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


const PaletteFormNav = ({allPalettes, savePalette, handleDrawerOpen, colors, open}) => {
  const history = useNavigate();

  return(
    <>
      <CssBaseline />
      <AppBar 
        className={styles.appbar}
        position="fixed" 
        color='default' 
        open={open} 
      >
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
            <FormDialog 
              allPalettes={allPalettes} 
              savePalette={savePalette} 
              colors={colors}
              className={styles.btn}
            />
            <Button
                onClick={() => history('/')}
                variant='contained'
                color='secondary'
                className={styles.btn}
              >
                Go Back
            </Button>
          </div>
      </AppBar>
    </>
  )
}

export default PaletteFormNav;
