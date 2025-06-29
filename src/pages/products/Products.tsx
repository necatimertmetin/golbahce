import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Container,
  Chip,
} from "@mui/material";
import SpaIcon from "@mui/icons-material/Spa";
import OpacityIcon from "@mui/icons-material/Opacity";
import PaletteIcon from "@mui/icons-material/Palette";
import { useTheme } from "@mui/material/styles";
import { useTranslate } from "../../hooks/useTranslation";

export const Products = () => {
  const theme = useTheme();
  const { translate } = useTranslate("pages.products");

  const products = [
    {
      id: 1,
      title: translate("items.olives.title"),
      description: translate("items.olives.description"),
      icon: <SpaIcon />,
      color: "#2E7D32",
      image: "https://picsum.photos/400/300?random=10",
      features: [
        translate("items.olives.features.0"),
        translate("items.olives.features.1"),
        translate("items.olives.features.2"),
        translate("items.olives.features.3"),
      ],
    },
    {
      id: 2,
      title: translate("items.oil.title"),
      description: translate("items.oil.description"),
      icon: <OpacityIcon />,
      color: "#F57F17",
      image: "https://picsum.photos/400/300?random=11",
      features: [
        translate("items.oil.features.0"),
        translate("items.oil.features.1"),
        translate("items.oil.features.2"),
        translate("items.oil.features.3"),
      ],
    },
    {
      id: 3,
      title: translate("items.ceramics.title"),
      description: translate("items.ceramics.description"),
      icon: <PaletteIcon />,
      color: "#1565C0",
      image: "https://picsum.photos/400/300?random=12",
      features: [
        translate("items.ceramics.features.0"),
        translate("items.ceramics.features.1"),
        translate("items.ceramics.features.2"),
        translate("items.ceramics.features.3"),
      ],
    },
  ];

  return (
    <Box
      sx={{
        minHeight: { xs: "auto", md: "calc(100vh - 64px)" },
        py: { xs: 3, sm: 4, md: 6 },
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              fontWeight: 700,
              mb: 2,
            }}
          >
            {translate("title")}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "1rem", sm: "1.1rem" },
              maxWidth: 700,
              mx: "auto",
              lineHeight: 1.6,
              color: theme.palette.text.secondary,
            }}
          >
            {translate("subtitle")}
          </Typography>
        </Box>

        {/* Main Products Section */}
        <Grid
          container
          spacing={{ xs: 3, sm: 4, md: 5 }}
          sx={{ mb: { xs: 4, md: 6 } }}
        >
          {products.map((product) => (
            <Grid size={{ xs: 12, lg: 4 }} key={product.id}>
              <Card
                sx={{
                  height: "100%",
                  background: `linear-gradient(135deg, 
                    ${theme.palette.background.paper} 0%, 
                    ${
                      theme.palette.mode === "dark"
                        ? "rgba(255,255,255,0.03)"
                        : "rgba(255,255,255,0.9)"
                    } 100%)`,
                  backdropFilter: "blur(10px)",
                  border: `1px solid ${
                    theme.palette.mode === "dark"
                      ? "rgba(255,255,255,0.1)"
                      : "rgba(255,255,255,0.3)"
                  }`,
                  overflow: "hidden",
                  position: "relative",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: theme.shadows[20],
                  },
                }}
              >
                {/* Product Image */}
                <Box
                  sx={{
                    height: { xs: "200px", sm: "250px" },
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="img"
                    src={product.image}
                    alt={product.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 16,
                      left: 16,
                      bgcolor: product.color,
                      borderRadius: "50%",
                      width: 50,
                      height: 50,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      boxShadow: `0 4px 15px ${product.color}40`,
                    }}
                  >
                    {product.icon}
                  </Box>
                </Box>

                <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: theme.palette.text.primary,
                      fontSize: { xs: "1.3rem", sm: "1.5rem" },
                    }}
                  >
                    {product.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.text.secondary,
                      lineHeight: 1.6,
                      mb: 3,
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                    }}
                  >
                    {product.description}
                  </Typography>

                  {/* Features */}
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 1.5,
                        fontSize: "1rem",
                        color: theme.palette.text.primary,
                      }}
                    >
                      {translate("featuresLabel")}
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {product.features.map((feature, index) => (
                        <Chip
                          key={index}
                          label={feature}
                          size="small"
                          sx={{
                            bgcolor: `${product.color}15`,
                            color: product.color,
                            fontWeight: 500,
                            "& .MuiChip-label": {
                              fontSize: "0.75rem",
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
