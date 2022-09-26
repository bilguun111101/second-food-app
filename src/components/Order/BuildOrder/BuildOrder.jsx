import { useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import BackpackIcon from "@mui/icons-material/Backpack";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "./BuildOrderStyle";
import { SetData } from "../../SetData";
import { DeleteData } from "../../DeleteData";

export default function CustomizedAccordions(props) {
  const [expanded, setExpanded] = useState(false);
  const propsy = props.data;

  const [checked, setChecked] = useState([0]);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  const packedBtn = () => {
    if (props.throwPlace !== "") {
      SetData(props.throwPlace, propsy);
      DeleteData(props.deletePlace, props.uid);
      return;
    }
    DeleteData(props.deletePlace, props.uid);
  };
  const total = propsy.cost * +propsy.ports;

  return (
    <Accordion
      expanded={expanded}
      onChange={handleChange}
      sx={{
        marginBottom: "1em",
        backgroundColor: "#FFF",
        borderBottom: "1px solid silver",
      }}
    >
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography>{propsy.dayTime}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "#FFF",
              borderBottom: "1px solid silver",
            }}
          >
            {/* ы */}
            <ListItem
              secondaryAction={<ListItemText primary={`x${propsy.ports}`} />}
              disablePadding
            >
              <ListItemButton role={undefined} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked}
                    tabIndex={-1}
                    disableRipple
                  />
                </ListItemIcon>
                <ListItemText primary={propsy.name} />
              </ListItemButton>
            </ListItem>
          </List>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
              borderTop: "1px solid silver",
            }}
          >
            <ListItem sx={{ gap: "1em" }}>
              <LocationOnIcon sx={{ color: "#09C900" }} />
              <ListItemText primary={propsy.address} />
            </ListItem>
            <ListItem sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Box alignItems="center" display="flex">
                {props.throwPlace !== "" ? (
                  <PriceChangeIcon />
                ) : (
                  <PriceCheckIcon />
                )}
                <ListItemText primary={`${total}₮`} />
              </Box>
            </ListItem>
            <ListItem sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button onClick={packedBtn}>
                <ListItemText primary={props.messBtn} />
                <BackpackIcon />
              </Button>
            </ListItem>
          </List>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
