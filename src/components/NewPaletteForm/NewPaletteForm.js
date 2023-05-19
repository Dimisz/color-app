import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { styled, useTheme } from '@mui/material/styles';
import { 
  Box,
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Divider,
  IconButton,
  Button
} from "@mui/material";
import { Menu, ChevronLeft } from "@mui/icons-material";

import ColorPicker from "./ColorPicker";
import DraggableColorBox from "../DraggableColorBox/DraggableColorBox";
import DraggableColorList from '../DraggableColorList/DraggableColorList';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
const drawerWidth = 400;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    height: 'calc(100vh - 64px)',
    padding: theme.spacing(3),
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

const MuiAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


const NewPaletteForm = ({savePalette, allPalettes}) => {
  const history = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [colors, setColors] = useState([]);
  const [newPaletteName, setNewPaletteName] = useState('');

  useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => {
      return allPalettes.every(({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase());
    });
  }, [allPalettes]);


  const addColor = (color) => {
    setColors((prev) => [...prev, color]);
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
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
  }

  const deleteColor = (colorName) => {
    const filteredColors = colors.filter((color) => {
      return color.name !== colorName;
    });
    setColors(filteredColors);
  }
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" color='default' open={open}>
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
            Persistent drawer
          </Typography>
          <ValidatorForm onSubmit={handleSubmitNewPalette}>
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
          </ValidatorForm>
          
        </Toolbar>
      </AppBar>
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

        <ColorPicker onAdd={addColor} colors={colors} />
        
      </Drawer>
      <Main open={open}>
        
        <DrawerHeader />
        <DraggableColorList
            colors={colors}
            // setColors={setColors}
            deleteColor={deleteColor}
          />
      </Main>
    </Box>
  );
}

export default NewPaletteForm;