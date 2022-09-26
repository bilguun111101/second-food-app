import { Card, Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button, Rating } from "@mui/material";
import { styles } from "./FoodStyle";
import { SetData } from "../../SetData";
import { useOrderContext } from "../../../orderContext";

const Food = (props) => {
  const propsy = props.data;
  const { setBooleanDet, setOrderDetail } = useOrderContext();
  const addToOrder = () => {
    // taked img name           <------------
    setOrderDetail(propsy);
    setBooleanDet(true);
  };
  return (
    <Card sx={styles.cardSection}>
      <CardMedia image={propsy.image} component="img" sx={styles.img} />
      <Box sx={styles.foodImpormation}>
        <Typography component="div" variant="h6" sx={{ marginTop: "10px" }}>
          {`${propsy.name}`}
        </Typography>
        <Typography component="div" sx={{ color: "silver" }}>
          Порц
        </Typography>
        <Box sx={styles.cost}>
          <Typography>{`₮${propsy.cost}`}</Typography>
          <Typography onClick={addToOrder}>
            <Button>
              <AddIcon color="success" />
            </Button>
          </Typography>
        </Box>
        <Rating name="read-only" value={propsy.rate} readOnly />
      </Box>
    </Card>
  );
};

export default Food;
