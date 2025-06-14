import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  IconButton,
  useTheme,
  Container,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ColorModeContext } from "../../../context/ColorModeContext";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslate } from "../../../hooks/useTranslation";

export const Header = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const { translate, changeLocale } = useTranslate("layout.header");

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleLangClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: theme.palette.text.primary,
              fontWeight: 700,
              fontFamily: `"Pacifico", cursive`,
            }}
          >
            Gölbahçe
          </Typography>

          {/* Navigation */}
          <Stack direction="row" spacing={2} sx={{ mr: 2 }}>
            <Button color="inherit" component={Link} to="/">
              {translate("homepage")}
            </Button>
            <Button color="inherit" component={Link} to="/menu">
              {translate("menu")}
            </Button>
            <Button color="inherit" component={Link} to="/about">
              {translate("about")}
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              {translate("contact")}
            </Button>
          </Stack>

          {/* Dil Seçici */}
          <IconButton color="inherit" onClick={handleLangClick}>
            <TranslateIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem
              onClick={() => {
                changeLocale("tr");
                setAnchorEl(null);
              }}
            >
              Türkçe
            </MenuItem>
            <MenuItem
              onClick={() => {
                changeLocale("en");
                setAnchorEl(null);
              }}
            >
              English
            </MenuItem>
            <MenuItem
              onClick={() => {
                changeLocale("ar");
                setAnchorEl(null);
              }}
            >
              العربية
            </MenuItem>{" "}
            {/* Arapça eklendi */}
          </Menu>

          <IconButton onClick={colorMode.toggleMode} color="inherit">
            {theme.palette.mode === "dark" ? (
              <LightModeIcon />
            ) : (
              <DarkModeIcon />
            )}
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
