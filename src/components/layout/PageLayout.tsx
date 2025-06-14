import { Box } from "@mui/material";
import { Header } from "./header/Header";
import { Outlet } from "react-router-dom";

export const PageLayout = () => {
  return (
    <Box>
      <Header />
      <Outlet />
    </Box>
  );
};
