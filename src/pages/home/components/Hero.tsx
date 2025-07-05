import { Box, Button, Stack, Typography } from "@mui/material";
import { useTranslate } from "../../../hooks/useTranslation";
import heroImg from "/images/hero/kapak.png";
export const Hero = () => {
  const { translate } = useTranslate("pages.home.hero");
  return (
    <Box>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        sx={{
          height: "calc(100vh - 64px)",
          background: (theme) => theme.palette.background.paper,
        }}
        px={7}
        pl={20}
      >
        <Stack height={"100%"} justifyContent={"center"} spacing={5}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 500,
              width: { xs: "90vw", md: "60vw" },
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
              zIndex: 2,
              color: (theme) => theme.palette.primary.main,
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
              width: { xs: "20vw", md: "10vw" },
              height: { xs: "8vw", md: "3vw" },
              minWidth: 120,
              minHeight: 60,
              fontSize: { xs: "1.2rem", md: "2rem" },
              borderRadius: 3,
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.3)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
              zIndex: 2,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "#fff", fontSize: { xs: "1rem", md: "1.5rem" } }}
            >
              {translate("menu")}
            </Typography>
          </Button>
        </Stack>
        <img style={{ position: "relative" }} height="100%" src={heroImg} />
      </Stack>
    </Box>
  );
};
