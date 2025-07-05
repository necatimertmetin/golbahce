import { Box, Button, Stack, Typography } from "@mui/material";
import { useTranslate } from "../../../hooks/useTranslation";
import heroImg from "/images/hero/kapak.png";

export const Hero = () => {
  const { translate } = useTranslate("pages.home.hero");

  return (
    <Box
      sx={{
        position: "relative",
        height: "calc(100vh - 64px)",
        overflow: "hidden",
        background: {
          xs: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroImg}) center/cover no-repeat`,
          md: "none",
        },
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={{ xs: "center", md: "space-between" }}
        alignItems={{ xs: "center", md: "stretch" }}
        sx={{
          height: "100%",
          px: { xs: 2, sm: 4, md: 7 },
          pl: { xs: 2, sm: 4, md: 20 },
          position: "relative",
          zIndex: 2,
        }}
      >
        <Stack
          height={{ xs: "auto", md: "100%" }}
          justifyContent="center"
          alignItems={{ xs: "center", md: "flex-start" }}
          spacing={{ xs: 3, md: 5 }}
          sx={{
            textAlign: { xs: "center", md: "left" },
            py: { xs: 4, md: 0 },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 500,
              width: { xs: "100%", md: "60vw" },
              fontSize: {
                xs: "1.8rem",
                sm: "2.5rem",
                md: "3.5rem",
                lg: "4rem",
              },
              color: { xs: "#ddd", md: "inherit" },
              lineHeight: { xs: 1.2, md: 1.1 },
              textShadow: { xs: "2px 2px 4px rgba(0,0,0,0.5)", md: "none" },
            }}
          >
            {translate("title")}
          </Typography>

          <Button
            variant="contained"
            onClick={() => {
              window.location.href = "/menu";
            }}
            sx={{
              width: { xs: "200px", sm: "220px", md: "300px" },
              height: { xs: "50px", sm: "60px", md: "70px" },
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
              borderRadius: 3,
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.3)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
              },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#fff",
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                fontWeight: 600,
              }}
            >
              {translate("menu")}
            </Typography>
          </Button>
        </Stack>

        {/* SAĞDA IMG sadece MD ve üstünde */}
        <Box
          component="img"
          src={heroImg}
          alt="hero"
          sx={{
            display: { xs: "none", md: "block" },
            height: "100%",
            maxWidth: "50%",
            objectFit: "cover",
            position: "relative",
          }}
        />
      </Stack>

      {/* Mobil için overlay - sadece gerekirse */}
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.2)",
          zIndex: 1,
        }}
      />
    </Box>
  );
};
