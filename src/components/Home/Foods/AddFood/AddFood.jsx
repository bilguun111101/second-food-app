import { Box } from "@mui/system";
import React from "react";
import { styles } from "../FoodStyle";
import AddIcon from "@mui/icons-material/Add";
import { Card, CardMedia, Typography, Button } from "@mui/material";
import { useOrderContext } from "../../../../orderContext";

const AddFood = (props) => {
  const { setAddFood } = useOrderContext();
  return (
    <Card sx={styles.cardSection}>
      <CardMedia image="" component="img" sx={styles.img} />
      <Box sx={styles.foodImpormation}>
        <Typography component="div" variant="h6" sx={{ marginTop: "10px" }}>
          Add
        </Typography>
        <Box sx={styles.addFood}>
          <Typography>
            <Button onClick={() => setAddFood(true)}>
              <AddIcon color="success" />
            </Button>
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default AddFood;
