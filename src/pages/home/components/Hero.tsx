import { Box, Button, Typography } from "@mui/material";

export const Hero = () => {
  return (
    <Box>
      <Box
        sx={{
          height: "calc(100vh - 64px)",
          backgroundImage: "url(https://picsum.photos/1920/1080)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            fontFamily: `"Pacifico", cursive`,
            position: "absolute",
            bottom: 25,
            left: 25,
            fontWeight: 500,
            width: "60vw",
          }}
        >
          Göl manzarasında güne taptaze kahvaltıyla başla!
        </Typography>

        <Button
          variant="contained"
          sx={{
            position: "absolute",
            right: "10vw",
            top: "50%",
            transform: "translateY(-50%)",
            width: "10vw",
            height: "3vw",
            fontSize: "2rem",
          }}
        >
          <Typography variant="h4">Menu</Typography>
        </Button>
      </Box>
    </Box>
  );
};
