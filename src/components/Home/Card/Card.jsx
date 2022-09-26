import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box } from "@mui/material";
import { styles } from "./CardStyle";

export default function MediaCard(props) {
  const propsy = props.data;
  return (
    <Card sx={styles.card}>
      <CardMedia component="img" image={propsy.image} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={styles.name}>
          {propsy.name}
        </Typography>
      </CardContent>
      <CardActions sx={{ paddingLeft: "18px" }}>
        <Box sx={styles.bottom}>
          <Typography component="div" variant="h7">
            {`₮${propsy.cost}`}
          </Typography>
          <Button sx={styles.btn}>
            <RemoveIcon color="error" />
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}
