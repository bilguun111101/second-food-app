import { useOrderContext } from "../../../../orderContext";
import {
  CardMedia,
  Card,
  Button,
  Backdrop,
  Box,
  Input,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styles } from "./OrderStyle";
import { SetData } from "../../../SetData";
import { useState, useEffect, useRef } from "react";

export default function SimpleBackdrop() {
  const phone = useRef(null);
  const ports = useRef(null);
  const address = useRef(null);
  const [setBool, setSetBool] = useState(false);
  const [dayTime, setDayTime] = useState("");
  const [week, setWeek] = useState("");
  const { booleanDet, setBooleanDet, orderDetail, setOrderDetail } =
    useOrderContext();
  const handleClose = () => {
    setBooleanDet(false);
  };
  // ----------------

  const handleWeek = (event) => {
    setWeek(event.target.value);
  };
  const handleTime = (e) => {
    setDayTime(e.target.value);
  };
  // =================

  const handleOrder = () => {
    if (
      phone.current.value.length !== 8 ||
      ports.current.value === "" ||
      address.current.value === "" ||
      dayTime === "" ||
      week === ""
    ) {
      alert("Мэдээлэл дутуу байна!!!");
      return;
    }
    setOrderDetail({
      ...orderDetail,
      ports: ports.current.value,
      phone: phone.current.value,
      address: address.current.value,
      dayTime: dayTime,
      week: week,
    });
    setSetBool(true);
  };

  useEffect(() => {
    if (setBool) {
      SetData("orders", orderDetail);
      setSetBool(false);
      setBooleanDet(false);
      ports.current.value = "";
      phone.current.value = "";
      address.current.value = "";
      setWeek("");
    }
  }, [setBool]);

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={booleanDet}
      >
        <Card sx={styles.cardSection}>
          <Button sx={styles.closeBtn} onClick={handleClose}>
            <CloseIcon sx={{ fontSize: "3em" }} />
          </Button>
          <CardMedia image={orderDetail.image} sx={styles.img} />
          <Box
            sx={{
              width: "50%",
              padding: "2em",
            }}
          >
            <Typography component="div" variant="h5">
              {orderDetail.name}
            </Typography>
            <Box sx={styles.getImpormation}>
              <Input type="number" placeholder="Утас..." inputRef={phone} />
              <Input
                type="number"
                placeholder="Хэдэн хүний порц..."
                inputRef={ports}
              />
              <Input placeholder="Гэрийн хаяг..." inputRef={address} />
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Хэд дэхь өдөр
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={week}
                    label="Хэд дэхь өдөр"
                    onChange={handleWeek}
                  >
                    <MenuItem value={`Даваа`}>Даваа</MenuItem>
                    <MenuItem value={`Мягмар`}>Мягмар</MenuItem>
                    <MenuItem value={`Лхагва`}>Лхагва</MenuItem>
                    <MenuItem value={`Пүрэв`}>Пүрэв</MenuItem>
                    <MenuItem value={`Баасан`}>Баасан</MenuItem>
                    <MenuItem value={`Бямба`}>Бямба</MenuItem>
                    <MenuItem value={`Ням`}>Ням</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Хэдий үед
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={dayTime}
                    label="Хэдий үед"
                    onChange={handleTime}
                  >
                    <MenuItem value={`Өглөө`}>Өглөө</MenuItem>
                    <MenuItem value={`Өдөр`}>Өдөр</MenuItem>
                    <MenuItem value={`Орой`}>Орой</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "100%",
                }}
              >
                <Button onClick={handleOrder}>
                  <ShoppingCartIcon sx={{ fontSize: "2em", color: "#000" }} />
                </Button>
              </Box>
            </Box>
          </Box>
        </Card>
      </Backdrop>
    </div>
  );
}
