import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { useTopTittleContext } from "../../../context";
import { useSignContext } from "../../../SignContext";

const style = {
  color: "#FFF",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  width: "100%",
  gap: "10px",
};

const NavbarBtn = (props) => {
  const { title, setTitle } = useTopTittleContext();
  const { setSignBool } = useSignContext();
  const navigate = useNavigate();
  const signOut = () => {
    setSignBool(false);
    navigate("/");
  };
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <Link
            to={props.data.path}
            style={style}
            onClick={() =>
              !props.signOut ? setTitle(props.data.name) : setSignBool(false)
            }
          >
            {props.data.icon}
            <Typography sx={{ color: "#FFF", textDecoration: "none" }}>
              {props.data.name}
            </Typography>
          </Link>
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  );
};

export default NavbarBtn;
