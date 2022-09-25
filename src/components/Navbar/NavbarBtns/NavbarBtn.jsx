import React from 'react'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import { useTitleContext } from '../../../TitleContext';

const style = {
  buttonColor: theme => ({
    color: theme.palette.primary.main
  })
}

const NavbarBtn = props => {
  const propsy = props.el;
  const { setTitle } = useTitleContext();
  return (
    <ListItem disablePadding>
      <Link to={propsy.path} onClick={() => setTitle(propsy.text)}>
        <ListItemButton sx={style.buttonColor}>
          <ListItemIcon sx={style.buttonColor}>
              {propsy.icon}
          </ListItemIcon>
          <ListItemText primary={propsy.text}/>
        </ListItemButton>
      </Link>
    </ListItem>
  )
}

export default NavbarBtn