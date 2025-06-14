import { Typography, Link, Stack, Container } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import StarIcon from "@mui/icons-material/Star";
export const Social = () => {
  return (
    <Container
      sx={{
        py: 6,
        textAlign: "center",
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems={"center"}
        spacing={6}
        sx={{ fontSize: 48, color: "text.secondary" }}
      >
        <Link
          href="https://www.instagram.com/golbahcetesisleri/"
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            p: 1.5, // padding artırarak dokunma alanını genişlet
            touchAction: "manipulation", // dokunma hareketlerini optimize eder
          }}
        >
          <InstagramIcon fontSize="large" htmlColor="#E4405F" />
        </Link>

        <StarIcon fontSize="large" />
        <Typography variant="h4" gutterBottom color="text.primary">
          Use{" "}
          <Link
            href="https://www.instagram.com/golbahcetesisleri/"
            target="_blank"
            rel="noopener"
            underline="hover"
            color="primary"
            sx={{ cursor: "pointer" }}
            aria-label="Instagram hashtag golbahce"
          >
            #golbahcetesisleri
          </Link>{" "}
          to share your experience with us
        </Typography>

        <StarIcon fontSize="large" />
        <Link
          href="https://www.instagram.com/golbahcetesisleri/"
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            p: 1.5, // padding artırarak dokunma alanını genişlet
            touchAction: "manipulation", // dokunma hareketlerini optimize eder
          }}
        >
          <InstagramIcon fontSize="large" htmlColor="#E4405F" />
        </Link>
      </Stack>
    </Container>
  );
};
