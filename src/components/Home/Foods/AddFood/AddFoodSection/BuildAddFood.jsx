import {
  CardMedia,
  Card,
  Button,
  Backdrop,
  Box,
  Input,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { SetData } from "../../../../SetData";
import { useState, useEffect, useRef } from "react";
import { styles } from "../../Order/OrderStyle";
import { useOrderContext } from "../../../../../orderContext";
import { secondStyle } from "./BuidAddFoodStyle";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import {
  ref as sRef,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../../../../firebase";
import { storage } from "../../../../../firebase";

export default function BuildAddFood(props) {
  const { addFood, setAddFood } = useOrderContext();
  const [imageUrl, setImageUrl] = useState();
  const [foodType, setFoodType] = useState("");
  const [foodImg, setFoodImg] = useState("");
  const cost = useRef(null);
  const rate = useRef(null);
  const foodName = useRef(null);

  const closeAddFoodSection = () => {
    setAddFood(false);
  };

  const handleImageURL = (e) => {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function (event) {
      setImageUrl(event.target.result);
    };
    reader.readAsDataURL(file);
    setFoodImg((prevVal) => {
      let prevValACopy = prevVal;
      prevValACopy = e.target.files[0];
      return (prevVal = prevValACopy);
    });
  };

  const setHandleData = async () => {
    // console.log(foodType);
    const storageRef = sRef(storage, `foods/${foodName.current.value}`);
    await uploadBytes(storageRef, foodImg).then(async (snapshot) => {
      await getDownloadURL(snapshot.ref).then(async (url) => {
        console.log(url);
        setDoc(doc(db, `foodslist/${foodName.current.value}`), {
          name: foodName.current.value,
          image: url,
        });
      });
    });
    // const storageRef = sRef(storage, `images/${foodName.current.value}`);
    // await uploadBytes(storageRef, foodType).then((snapshot) => {
    //   getDownloadURL(snapshot.ref).then((url) => {
    //     console.log(url);
    //     // const data = {
    //     //   image: url,
    //     //   name: foodName.current.value,
    //     //   cost: cost.current.value,
    //     //   rate: rate.current.value,
    //     // };
    //     // SetData("foods", { image: url });
    //   });
    // });
  };

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={addFood}
      >
        <Card sx={styles.cardSection}>
          <Button sx={styles.closeBtn} onClick={closeAddFoodSection}>
            <CloseIcon sx={{ fontSize: "3em" }} />
          </Button>
          <Box sx={{ width: "50%", position: "relative" }}>
            <CardMedia
              component="img"
              src={imageUrl}
              sx={secondStyle.outInputImage}
            />
            <label>
              <Input
                sx={{ display: "none" }}
                type="file"
                image=""
                onChange={handleImageURL}
              />
              <AddAPhotoIcon sx={secondStyle.cameraIcon} />
            </label>
          </Box>
          <Box
            sx={{
              width: "50%",
              padding: "2em",
            }}
          >
            <Typography component="div" variant="h5">
              Create food
            </Typography>

            {/* Take imformation Section ---------------------------------------*/}

            <Box sx={styles.getImpormation}>
              <Input placeholder="Хоолны нэр..." inputRef={foodName} />
              <Input placeholder="Үнэ..." inputRef={cost} />
              <Input placeholder="Rate..." inputRef={rate} />
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Хэд дэхь өдөр
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={foodType}
                    label="Хэд дэхь өдөр"
                    onChange={(e) => setFoodType(e.target.value)}
                  >
                    <MenuItem value="Халуун ногоо">Халуун ногоо</MenuItem>
                    <MenuItem value="Хөнгөн">Хөнгөн</MenuItem>
                    <MenuItem value="1-р хоол">1-р хоол</MenuItem>
                    <MenuItem value="2-р хоол">2-р хоол</MenuItem>
                    <MenuItem value="Бусад">Бусад</MenuItem>
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
                <Button onClick={setHandleData}>
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
