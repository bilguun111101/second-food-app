import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import NavbarBtn from "./BuildNavbar/NavbarBtn";
import SearchIcon from "@mui/icons-material/Search";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  TextField,
  Avatar,
} from "@mui/material";
import Home from "../Home/Home";
import { navbarBtns } from "./NavbarBtns";
import { AppBar, Main, DrawerHeader, styles } from "./NavbarStyles";
import { CardMedia } from "@mui/material";
import logo from "../../images/Logo.png";
import { useTopTittleContext } from "../../context";
import { useSearchContext } from "../../searchContext";
import { useSignContext } from "../../SignContext";

const drawerWidth = 240;

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const { title } = useTopTittleContext();
  const { setSearch } = useSearchContext();
  const { signBool, setSignBool } = useSignContext();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={styles.topNavbar}>
          <Toolbar sx={{ gap: "2em" }}>
            <Button onClick={() => setOpen(true)}>
              <Typography variant="h6" component="div" sx={{ color: "#000" }}>
                {title}
              </Typography>
            </Button>
          </Toolbar>

          <Toolbar>
            <Box sx={styles.navbarLast}>
              <Button
                sx={{ color: "#000" }}
                onClick={() => setOpenSearch(!openSearch)}
              >
                <SearchIcon />
              </Button>
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                onChange={(e) => setSearch(e.target.value)}
                sx={openSearch ? { display: "block" } : { display: "none" }}
              />
            </Box>
          </Toolbar>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#000",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={() => setOpen(false)}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon sx={{ color: "#FFF" }} />
            ) : (
              <ChevronRightIcon sx={{ color: "#FFF" }} />
            )}
          </IconButton>
        </DrawerHeader>
        <Box sx={styles.logoSection}>
          <CardMedia src={logo} component="img" sx={{ width: "50%" }} />
        </Box>
        <Divider />
        <List>
          {navbarBtns.map((text, index) => {
            if (text.name === navbarBtns[navbarBtns.length - 1].name) {
              const signOut = {
                name: "Гарах",
                path: "/",
                icon: <AssignmentReturnIcon />,
              };
              return (
                <NavbarBtn
                  data={!signBool ? text : signOut}
                  index={index}
                  key={index}
                  signOut={true}
                />
              );
            }
            return (
              <NavbarBtn
                signOut={false}
                data={text}
                index={index}
                key={index}
              />
            );
          })}
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
