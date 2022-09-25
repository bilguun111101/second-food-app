import { styled } from '@mui/material/styles';
import MuiAppBar from "@mui/material/AppBar";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 240;

export const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
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
  
export const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    backgroundColor: theme.palette.primary.main,
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
  
export const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

// export const leftNavbarStyle = theme => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   backgroundColor: theme.palette.primary.contrastText,
//   '& .MuiDrawer-paper': {
//     width: drawerWidth,
//     boxSizing: 'border-box',
//   },
// })

export const styles = {
  leftNavbarStyle: theme => ({
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: theme.palette.primary.text,
    '& .MuiDrawer-paper': {
      width: drawerWidth,
      boxSizing: 'border-box',
    },
  }),
  bar: theme => ({
    color: theme.palette.primary.text
  })
}



export const navbarElements = [
  {text: "Захиалга", icon: <CalendarMonthIcon />, path: "/Order"},
  {text: "График", icon: <BarChartIcon />, path: "/Chart"},
  {text: "Тохиргоо", icon: <SettingsIcon />, path: "/Settings"},
  {text: "Мэню", icon: <MenuBookIcon />, path: "/Home"},
]

export const signBtns = [
  {text: "Гарах", icon: <LogoutIcon />, path: "/"},
  {text: "Нэвтрэх", icon: <LoginIcon />, path: "/"},
]