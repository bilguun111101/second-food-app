import React, { useState } from "react";
import MediaCard from "./Card/Card";
import Food from "./Foods/Food";
import { Box, CircularProgress } from "@mui/material";
import { styles } from "./HomeWithinStyle";
import useGetData from "../TakeData";
import SimpleBackdrop from "./Foods/Order/OrderFood";
import { useSearchContext } from "../../searchContext";
import AddFood from "./Foods/AddFood/AddFood";
import _ from "lodash";
import BuildAddFood from "./Foods/AddFood/AddFoodSection/BuildAddFood";

const Home = (props) => {
  const { search } = useSearchContext();
  const [loading, setLoading] = useState(false);
  const saveData = useGetData("foods");
  const [addBoolean, setAddBoolean] = useState(false);

  const add = () => {
    setAddBoolean(true);
  };

  return (
    <Box sx={styles.topBox}>
      <Box sx={styles.rightScroll}>
        {saveData.map((el, idx) => (
          <MediaCard key={idx} data={el.data} />
        ))}
      </Box>

      <Box sx={styles.foodsSection}>
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            <AddFood setAdd={add} add={addBoolean} />
            {saveData
              .filter((el, idx) => {
                if (search === "") return el;
                else if (el.name.includes(search)) return el;
              })
              .map((el, idx) => (
                <Food key={idx} data={el.data} />
              ))}
            <SimpleBackdrop />
            <BuildAddFood />
          </>
        )}
      </Box>
    </Box>
  );
};

export default Home;
