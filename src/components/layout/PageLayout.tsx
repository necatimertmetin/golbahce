import { Box } from "@mui/material";
import { Header } from "./header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";

export const PageLayout = () => {
  return (
    <Box>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};
