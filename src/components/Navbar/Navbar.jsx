import React from 'react';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { IconButton, Divider, Typography, List, Toolbar, CssBaseline, Drawer, Box, FormControlLabel, ListItem } from "@mui/material"
import { AppBar, DrawerHeader, navbarElements, signBtns, styles } from './NavbarStyle';
import NavbarBtn from './NavbarBtns/NavbarBtn';
import { useSignContext } from '../../SignContext';
import { useTitleContext } from '../../TitleContext';
import { useSettingsContext } from '../../Settings';

import { MaterialUISwitch } from "./NavbarStyle"

const drawerWidth = 240;

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { signBool } = useSignContext();
  const { title } = useTitleContext();
  const { setColorChange } = useSettingsContext();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box display="flex" alignItems="center">
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start" 
              sx={{ mr: 2, ...(open && { display: 'none' }), color: theme.palette.primary.text }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              {title}
            </Typography>
          </Box>

          <List>
            <ListItem disablePadding>
              <FormControlLabel
                control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                onClick={() => setColorChange(old => !old)}
              />
            </ListItem>
          </List>

        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={open} 
      >
        <DrawerHeader sx={styles.leftNavbarStyle}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon color="primary" /> : <ChevronRightIcon color="primary"/>}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={styles.leftNavbarStyle}>
          {navbarElements.map((el, index) => (
            <NavbarBtn key={index} el={el} index={index} />
          ))}
        </List>
        <List sx={styles.leftNavbarStyle}>
          {signBtns.map((el, idx) => {
              if(signBool) {
                if(idx === 0) return <NavbarBtn key={idx} el={el} index={idx} />
              } else {
                if(idx === 1) return <NavbarBtn key={idx} el={el} index={idx} />
              }
            }
          )}
        </List>
      </Drawer>
    </Box>
  );
}
