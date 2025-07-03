import { Box, Button, Typography } from "@mui/material";
import { useTranslate } from "../../../hooks/useTranslation";
export const Hero = () => {
  const { translate } = useTranslate("pages.home.hero");
  return (
    <Box>
      <Box
        sx={{
          height: "calc(100vh - 64px)",
          backgroundImage:
            "url(https://idsb.tmgrup.com.tr/ly/uploads/images/2024/07/17/337261.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            bottom: 25,
            left: 25,
            fontWeight: 500,
            width: { xs: "90vw", md: "60vw" },
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            color: "white",
            textShadow: "0 4px 20px rgba(0,0,0,0.5)",
            zIndex: 2,
            backdropFilter: "blur(5px)",
            background: "rgba(255,255,255,0.1)",
            borderRadius: 3,
            p: { xs: 2, sm: 3 },
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          {translate("title")}
        </Typography>

        <Button
          variant="contained"
          sx={{
            position: "absolute",
            right: { xs: "5vw", md: "10vw" },
            top: "50%",
            transform: "translateY(-50%)",
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
            sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}
          >
            {translate("menu")}
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};
