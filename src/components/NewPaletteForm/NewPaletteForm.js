import React, { useState } from "react";
import { styled, useTheme } from '@mui/material/styles';
import { Box, Drawer, Divider, IconButton } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";

import ColorPicker from "./ColorPicker";
import PaletteFormNav from './PaletteFormNav';
import DraggableColorList from '../DraggableColorList/DraggableColorList';
const drawerWidth = 400;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    height: 'calc(100vh - 64px)',
    // padding: theme.spacing(3),
    padding: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginTop: theme.spacing(10),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
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
  // const history = useNavigate();
  // const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [colors, setColors] = useState(allPalettes[0].colors);
  
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
    const randomPaletteIdx = Math.floor(Math.random() * allPalettes.length);
    const randomColorIdx = Math.floor(Math.random() * allPalettes[randomPaletteIdx].colors.length);
    const randomColor = allPalettes[randomPaletteIdx].colors[randomColorIdx];
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
            width: drawerWidth,
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