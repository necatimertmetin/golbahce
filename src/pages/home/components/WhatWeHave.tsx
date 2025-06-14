import { Button, Grid, Typography } from "@mui/material";

export const WhatWeHave = () => {
  return (
    <Grid container justifyContent={"center"} p={10} spacing={10}>
      <Grid
        size={{ xs: 6 }}
        textAlign={"center"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={6}
      >
        <Typography variant="h2">What We Have</Typography>
        <Typography variant="h4">
          Crafted with the finest ingredients and a passion for flavor, our menu
          offers a tantalizing array of coffee creations, freshly baked goods,
          and savory bites.
        </Typography>
      </Grid>
      <Grid container spacing={5} px={20}>
        <Grid
          size={{ xs: 12, md: 4 }}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={2}
        >
          <img
            src={"/images/penne.png"}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              aspectRatio: 1,
              objectFit: "cover",
            }}
          />
          <Button variant="contained" size="large">
            <Typography variant="h4">All-Day Brunch</Typography>
          </Button>
        </Grid>
        <Grid
          size={{ xs: 12, md: 4 }}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={2}
        >
          <img
            src={"/images/penne.png"}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              aspectRatio: 1,
              objectFit: "cover",
            }}
          />
          <Button variant="contained" size="large">
            <Typography variant="h4">Pasties & Sweets</Typography>
          </Button>
        </Grid>
        <Grid
          size={{ xs: 12, md: 4 }}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={2}
        >
          <img
            src={"/images/penne.png"}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              aspectRatio: 1,
              objectFit: "cover",
            }}
          />
          <Button variant="contained" size="large">
            <Typography variant="h4">Coffee & Drinks</Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
