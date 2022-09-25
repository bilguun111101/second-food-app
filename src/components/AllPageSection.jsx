import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PersistentDrawerLeft from "./Navbar/Navbar";
import { lightTheme, darkTheme } from "../themes";
import { useSignContext } from "../SignContext";
import SignInSide from "./SignIn/SignIn";
import { Button } from "@mui/material";
import SignUp from "./SignUp/Signup";
import _ from "lodash";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFF",
      text: '#000',
    },
  }
})

const secTheme = createTheme({
  palette: {
    primary: {
      main: "#000",
      text: '#FFF',
    },
  }
})

const AllPageSection = () => {
  const { signBool } = useSignContext();

  return (
    <ThemeProvider theme={!signBool ? theme : secTheme}>
      <BrowserRouter>
          <Button variant="text" color="primary">click</Button>
          <PersistentDrawerLeft />
          <Routes>
            <Route path="/" element={<SignInSide />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="" element />
          </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default AllPageSection