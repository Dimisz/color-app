import { useNavigate } from 'react-router-dom';
import React from "react";
import styles from './PaletteFormNav.module.css';

import { 
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button
} from "@mui/material";
import { AddToPhotos } from "@mui/icons-material";
import FormDialog from './FormDialog';

const PaletteFormNav = ({allPalettes, savePalette, handleDrawerOpen, colors, open}) => {
  const history = useNavigate();

  return(
    <>
      <AppBar 
        position="fixed" 
        color='default' 
        open={open} 
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '10%'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ 
              mr: 2, 
              ...(open && { display: 'none' }) 
            }}
          >
            <AddToPhotos />
          </IconButton>
          <Typography 
            variant="h5" 
            noWrap color='inherit' 
            sx={{ 
              mr: 2, 
              display: { xs: 'none', sm: 'contents'},
              ...(open && { display: 'none' }) 
            }}
          >
            Create a Palette
          </Typography>  
        </Toolbar>
        <div className={styles['nav-bts']}>
            <FormDialog 
              allPalettes={allPalettes} 
              savePalette={savePalette} 
              colors={colors}
              className={styles.btn}
              style={{
                marginRight: '0.5rem',
                marginLeft: '0.5rem'
              }}
            />
              <Button
                  onClick={() => history('/')}
                  variant='contained'
                  color='secondary'
                  className={styles.btn}
                  style={{
                    marginRight: '0.5rem',
                    marginLeft: '0.5rem'
                  }}
                >
                  Go Back
              </Button>
          </div>
      </AppBar>
    </>
  )
}

export default PaletteFormNav;
