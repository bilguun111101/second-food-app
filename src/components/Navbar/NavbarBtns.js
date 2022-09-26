import BorderInnerIcon from "@mui/icons-material/BorderInner";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LogoutIcon from "@mui/icons-material/Logout";

export const navbarBtns = [
  { name: "Захиалга", path: "/order", icon: <BorderInnerIcon /> },
  // { name: "График", path: "/chart", icon: <SignalCellularAltIcon /> },
  { name: "Тохиргоо", path: "/settings", icon: <SettingsIcon /> },
  { name: "Мэню", path: "/home", icon: <RestaurantIcon /> },
  { name: "Нэвтрэх", path: "/", icon: <LogoutIcon /> },
];
