import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import { Box, Drawer, Divider, IconButton } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";
import colorPalettes from "../../helpers/seedColors";

import ColorPicker from "./ColorPicker";
import PaletteFormNav from './PaletteFormNav';
import DraggableColorList from '../DraggableColorList/DraggableColorList';
const drawerWidth = 400;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    height: '100vh',
    marginLeft: `-${drawerWidth}px`,
  }),
);


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


const NewPaletteForm = ({savePalette, allPalettes}) => {
  const [open, setOpen] = useState(false);
  const [colors, setColors] = useState(colorPalettes[0].colors);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const clearColors = () => {
    setColors([]);
  }

  const addColor = (color) => {
    setColors((prev) => [...prev, color]);
  }

  const addRandomColor = () => {
    let randomColor = '';
    let colorUnique = false;
    while(!colorUnique){
        const randomPaletteIdx = Math.floor(Math.random() * allPalettes.length);
        const randomColorIdx = Math.floor(Math.random() * allPalettes[randomPaletteIdx].colors.length);
        randomColor = allPalettes[randomPaletteIdx].colors[randomColorIdx];
        colorUnique = colors.every((color) => {
          return color.name !== randomColor.name;
        });
    }
    addColor(randomColor);
  }

  const deleteColor = (colorName) => {
    const filteredColors = colors.filter((color) => {
      return color.name !== colorName;
    });
    setColors(filteredColors);
  }
  
  return (
    <Box sx={{ display: 'flex' }}>
      <PaletteFormNav 
        savePalette={savePalette} 
        allPalettes={allPalettes} 
        handleDrawerOpen={handleDrawerOpen}
        colors={colors}
        open={open}
      />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            height: '100vh',
            overflow: 'hidden',
            width: {xs: '100%', sm: '50%', md: '40%', lg: '30%'},
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </DrawerHeader>
        <Divider />

        <ColorPicker 
          onAdd={addColor} 
          colors={colors} 
          clearColors={clearColors}
          addRandomColor={addRandomColor}
          style={{marginTop: 0}}
        />
        
      </Drawer>
      <Main open={open}>
        
        <DrawerHeader />
        <DraggableColorList
            colors={colors}
            setColors={setColors}
            deleteColor={deleteColor}
          />
      </Main>
    </Box>
  );
}

export default NewPaletteForm;