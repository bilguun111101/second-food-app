import React from "react";
import PersistentDrawerLeft from "./Navbar/Navbar";
import { Box } from "@mui/material";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Order from "./Order/Order";
import Chart from "./Chart/Chart";
import LogIn from "./LogIn/LogIn";
import SignUp from "./SignUp/SignUp";
import { useSignContext } from "../SignContext";

const All = (props) => {
  const { signBool } = useSignContext();
  return (
    <BrowserRouter>
      <PersistentDrawerLeft />
      <Box>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/settings" />
          <Route path="/chart" element={<Chart />} />
          {!signBool && (
            <>
              <Route path="/" element={<LogIn />} />
              <Route path="/signUp" element={<SignUp />} />
            </>
          )}
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default All;
