import { Box, Button, Grid, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { menuData } from "./types";
import { Link } from "react-router-dom";
import { useTranslate } from "../../hooks/useTranslation";

export const MenuPage = () => {
  const { translate } = useTranslate("pages.menu");

  return (
    <Box p={3} mx={30}>
      <Typography variant="h2" gutterBottom textAlign="center">
        Menü
      </Typography>
      <Grid container spacing={5}>
        {menuData.map((category, index) => (
          <Grid
            key={category.key}
            size={{ xs: 12, md: 6 }}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={2}
            sx={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${category.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
              borderRadius: 2,
            }}
            p={"64px"}
            textAlign={"center"}
          >
            <Typography
              variant="h4"
              fontWeight={"bold"}
              textTransform={"uppercase"}
            >
              {/* Burada category.key'i tam path olarak veriyoruz */}
              {translate(`${category.key}.title`)}
            </Typography>
            <Typography variant="body1" fontWeight={500}>
              {translate(`${category.key}.description`)}
            </Typography>
            <Button
              variant="contained"
              endIcon={<NavigateNextIcon />}
              component={Link}
              to={`/menu/${encodeURIComponent(index)}`}
            >
              İçerikler
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MenuPage;
