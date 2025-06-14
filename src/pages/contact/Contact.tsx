import { Grid, Typography, Box } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationPinIcon from "@mui/icons-material/LocationPin";

export const Contact = () => {
  return (
    <Grid
      container
      spacing={4}
      sx={{
        height: "calc(100vh - 64px)",
        px: 2,
        py: 3,
      }}
    >
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{
          height: "100%",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.5782538958983!2d29.371060500000006!3d40.413044600000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca5510211b5d85%3A0xb639e52413522826!2zR8O2bGJhaMOnZSBUZXNpc2xlcmk!5e1!3m2!1str!2str!4v1749325069982!5m2!1str!2str"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Golbahce Location"
        />
      </Grid>

      <Grid
        size={{ xs: 12, md: 6 }}
        container
        direction="column"
        spacing={3}
        sx={{
          height: "100%",
          overflowY: "auto",
        }}
      >
        <Grid>
          <Box
            component="img"
            src="https://picsum.photos/1920/540"
            alt="Logo"
            sx={{ width: 150 }}
          />
        </Grid>

        <Grid container spacing={1}>
          <Grid>
            <LocationPinIcon color="primary" />
          </Grid>
          <Grid>
            <Typography variant="h5">
              1234 Golbahce Street, Istanbul, Turkey
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={1}>
          <Grid>
            <AccessTimeIcon color="primary" />
          </Grid>
          <Grid>
            <Typography variant="h5">08:00 - 21:00</Typography>
          </Grid>
        </Grid>

        <Grid container spacing={3} justifyContent="flex-start" sx={{ mt: 4 }}>
          <Grid size={{ xs: 6 }} container spacing={1}>
            <Grid>
              <PhoneIcon color="primary" />
            </Grid>
            <Grid>
              <Typography variant="h5">+90 123 456 7890</Typography>
            </Grid>
          </Grid>
          <Grid size={{ xs: 6 }} container spacing={1}>
            <Grid>
              <EmailIcon color="primary" />
            </Grid>
            <Grid>
              <Typography variant="h5">info@golbahce.com</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
