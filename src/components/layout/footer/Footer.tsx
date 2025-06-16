import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  Divider,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export const Footer = () => {
  const theme = useTheme();

  const quickLinks = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımızda", href: "/about" },
    { name: "Menü", href: "/menu" },
    { name: "İletişim", href: "/contact" },
  ];

  const workingHours = [
    { day: "Pazartesi - Perşembe", time: "08:00 - 22:00" },
    { day: "Cuma - Pazar", time: "08:00 - 24:00" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)"
            : "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
        pt: { xs: 6, md: 8 },
        pb: { xs: 4, md: 6 },
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            theme.palette.mode === "dark"
              ? "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)"
              : "linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent)",
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Logo & Description */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={3}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "1.8rem", md: "2.2rem" },
                  background: "linear-gradient(45deg, #4ECDC4, #45B7D1)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 400,
                }}
              >
                Gölbahçe Tesisleri
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  lineHeight: 1.6,
                  maxWidth: 300,
                }}
              >
                Göl manzarasında unutulmaz anlar yaşayın. Kaliteli kahve, taze
                lezzetler ve sıcak atmosfer.
              </Typography>
              <Stack direction="row" spacing={1}>
                <IconButton
                  component={Link}
                  href="https://www.instagram.com/golbahcetesisleri/"
                  target="_blank"
                  rel="noopener"
                  sx={{
                    background: "rgba(228, 64, 95, 0.1)",
                    color: "#E4405F",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "rgba(228, 64, 95, 0.2)",
                      transform: "scale(1.1)",
                      boxShadow: "0 4px 12px rgba(228, 64, 95, 0.3)",
                    },
                  }}
                >
                  <InstagramIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, md: 2 }}>
            <Stack spacing={2}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  fontSize: "1.1rem",
                }}
              >
                Hızlı Linkler
              </Typography>
              <Stack spacing={1}>
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    sx={{
                      color: theme.palette.text.secondary,
                      textDecoration: "none",
                      fontSize: "0.95rem",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        color: "#4ECDC4",
                        textDecoration: "underline",
                        transform: "translateX(4px)",
                      },
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* Working Hours */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Stack spacing={2}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  fontSize: "1.1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <AccessTimeIcon fontSize="small" />
                Çalışma Saatleri
              </Typography>
              <Stack spacing={1}>
                {workingHours.map((schedule, index) => (
                  <Box key={index}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        fontSize: "0.9rem",
                        fontWeight: 500,
                      }}
                    >
                      {schedule.day}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#4ECDC4",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                      }}
                    >
                      {schedule.time}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* Contact Info */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Stack spacing={2}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  fontSize: "1.1rem",
                }}
              >
                İletişim
              </Typography>
              <Stack spacing={2}>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                  <LocationOnIcon
                    fontSize="small"
                    sx={{ color: "#FF6B6B", mt: 0.5 }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      fontSize: "0.9rem",
                      lineHeight: 1.4,
                    }}
                  >
                    Gölbahçe Mah. Sahil Cad.
                    <br />
                    No:123 Bursa/Türkiye
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <PhoneIcon fontSize="small" sx={{ color: "#4ECDC4" }} />
                  <Link
                    href="tel:+902241234567"
                    sx={{
                      color: theme.palette.text.secondary,
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      "&:hover": { color: "#4ECDC4" },
                    }}
                  >
                    +90 (224) 123 45 67
                  </Link>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <EmailIcon fontSize="small" sx={{ color: "#45B7D1" }} />
                  <Link
                    href="mailto:info@golbahcetesisleri.com"
                    sx={{
                      color: theme.palette.text.secondary,
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      "&:hover": { color: "#45B7D1" },
                    }}
                  >
                    info@golbahcetesisleri.com
                  </Link>
                </Box>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Divider
          sx={{
            my: { xs: 4, md: 5 },
            background:
              theme.palette.mode === "dark"
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.1)",
          }}
        />

        {/* Bottom Section */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: "0.85rem",
            }}
          >
            © 2024 Gölbahçe Tesisleri. Tüm hakları saklıdır.
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link
              href="/privacy"
              sx={{
                color: theme.palette.text.secondary,
                textDecoration: "none",
                fontSize: "0.85rem",
                "&:hover": { color: "#4ECDC4" },
              }}
            >
              Gizlilik Politikası
            </Link>
            <Link
              href="/terms"
              sx={{
                color: theme.palette.text.secondary,
                textDecoration: "none",
                fontSize: "0.85rem",
                "&:hover": { color: "#4ECDC4" },
              }}
            >
              Kullanım Şartları
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
