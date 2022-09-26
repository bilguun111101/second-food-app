import { Box, Typography, Card, Toolbar } from "@mui/material";
import React from "react";
import CustomizedAccordions from "./BuildOrder/BuildOrder";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import { styles } from "./OrderStyle";
import useGetData from "../TakeData";

const Order = (props) => {
  const orders = useGetData("orders");
  const packed = useGetData("packed");

  const days = [`Даваа`, `Мягмар`, `Лхагва`, `Пүрэв`, `Баасан`, `Бямба`, `Ням`];

  return (
    <Box sx={styles.weekSection}>
      <Box sx={styles.daySection}>
        {days.map((el, idx) => {
          const saveThisWeekData = orders.filter((ele, idx) => ele.week === el);
          const messageBtn = `Савлах`;
          return (
            <Card sx={styles.dayWithCard} key={idx}>
              <Box sx={styles.dayTitleSection}>
                <Typography>{el}</Typography>
                <Box sx={{ display: "flex", backgroundColor: "#FFF" }}>
                  <ViewInArIcon />
                  <Typography>{saveThisWeekData.length}</Typography>
                </Box>
              </Box>
              <Card sx={styles.orderCardSection}>
                {saveThisWeekData.map((el, idx) => (
                  <CustomizedAccordions
                    key={idx}
                    data={el}
                    uid={el.uid}
                    messBtn={messageBtn}
                    throwPlace="packed"
                    deletePlace="orders"
                  />
                ))}
              </Card>
            </Card>
          );
        })}
      </Box>

      <Box sx={styles.packedSection}>
        <Box sx={styles.packedTitle}>
          <Typography component="div" variant="h5">
            Савласан
          </Typography>
        </Box>
        <Box sx={styles.packedSectionWithin}>
          {days.map((el, idx) => {
            const saveThisWeekPackedData = packed.filter(
              (element, idx) => element.week === el
            );
            const messageBtn = `Хүргэгдсэн`;
            return (
              <Card sx={styles.dayWithCard} key={idx}>
                <Box sx={styles.dayTitleSection}>
                  <Typography>{el}</Typography>
                  <Box sx={{ display: "flex", backgroundColor: "#FFF" }}>
                    <ViewInArIcon />
                    <Typography>{saveThisWeekPackedData.length}</Typography>
                  </Box>
                </Box>
                <Card sx={styles.orderCardSection}>
                  {saveThisWeekPackedData.map((el, idx) => (
                    <CustomizedAccordions
                      key={idx}
                      data={el}
                      uid={el.uid}
                      messBtn={messageBtn}
                      throwPlace=""
                      deletePlace="packed"
                    />
                  ))}
                </Card>
              </Card>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Order;
