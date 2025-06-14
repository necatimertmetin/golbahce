import { Grid, Typography, Button } from "@mui/material";

export const OurStory = () => {
  return (
    <Grid container justifyContent={"center"} p={10}>
      <Grid
        size={{ xs: 6 }}
        textAlign={"center"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={6}
      >
        <Typography variant="h2">Our Story</Typography>
        <Typography variant="h4">
          At the Golbahce, we believe a great coffee experience is about more
          than just the brew. It's the cozy ambiance, varm hospitality, and
          delightful treats that accompany each sip. Our cafe is a sanctuary
          where you can escape the everyday hustle and indulge in the simple
          pleasures of good company, aromatic coffee, and decadent pastries.
        </Typography>

        <Button
          variant="outlined"
          size="large"
          sx={{
            fontSize: "2rem",
            px: "48px",
            borderWidth: 2,
          }}
        >
          About Us
        </Button>
      </Grid>
    </Grid>
  );
};
