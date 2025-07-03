import { Typography, Box, Container, Paper } from "@mui/material";
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
      title: translate("items.ceramics.title"),
      description: translate("items.ceramics.description"),
      icon: <PaletteIcon />,
      color: "#1565C0",
      images: [
        "/images/products/cini/1.jpg",
        "/images/products/cini/2.jpg",
        "/images/products/cini/3.jpg",
        "/images/products/cini/4.jpg",
        "/images/products/cini/5.jpg",
        "/images/products/cini/6.jpg",
        "/images/products/cini/7.jpg",
        "/images/products/cini/8.jpg",
        "/images/products/cini/10.jpg",
      ],
      features: [
        translate("items.ceramics.features.0"),
        translate("items.ceramics.features.1"),
        translate("items.ceramics.features.2"),
      ],
    },
    {
      id: 2,
      title: translate("items.olives.title"),
      description: translate("items.olives.description"),
      icon: <SpaIcon />,
      color: "#2E7D32",
      images: [
        "https://picsum.photos/600/400?random=10",
        "https://picsum.photos/600/400?random=13",
      ],
      features: [
        translate("items.olives.features.0"),
        translate("items.olives.features.1"),
        translate("items.olives.features.2"),
      ],
    },
    {
      id: 3,
      title: translate("items.oil.title"),
      description: translate("items.oil.description"),
      icon: <OpacityIcon />,
      color: "#F57F17",
      images: [
        "https://picsum.photos/600/400?random=11",
        "https://picsum.photos/600/400?random=14",
      ],
      features: [
        translate("items.oil.features.0"),
        translate("items.oil.features.1"),
        translate("items.oil.features.2"),
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
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
            {translate("title")}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: 700,
              mx: "auto",
              color: theme.palette.text.secondary,
              lineHeight: 1.6,
            }}
          >
            {translate("subtitle")}
          </Typography>
        </Box>

        {products.map((product) => (
          <Paper
            key={product.id}
            sx={{
              mb: 6,
              p: { xs: 2, sm: 3 },
              borderRadius: 3,
              boxShadow: theme.shadows[1],
              "&:hover": {
                boxShadow: theme.shadows[4],
              },
              transition: "box-shadow 0.3s ease",
            }}
          >
            {/* Title & Icon */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Box
                sx={{
                  bgcolor: product.color,
                  color: "#fff",
                  borderRadius: "50%",
                  width: 50,
                  height: 50,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 2,
                }}
              >
                {product.icon}
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                {product.title}
              </Typography>
            </Box>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                lineHeight: 1.8,
                color: theme.palette.text.secondary,
              }}
            >
              {product.description}
            </Typography>

            {/* Images */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                mb: 3,
              }}
            >
              {product.images?.map((img, idx) => (
                <Box
                  key={idx}
                  component="img"
                  src={img}
                  alt={`${product.title} ${idx + 1}`}
                  sx={{
                    width: { xs: "100%", sm: "48%", md: "30%" },
                    borderRadius: 2,
                    objectFit: "cover",
                    boxShadow: theme.shadows[2],
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.03)",
                    },
                  }}
                />
              ))}
            </Box>

            {/* Features */}
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                {translate("featuresLabel")}
              </Typography>
              <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
                {product.features.map((feature, index) => (
                  <li key={index} style={{ marginBottom: 4 }}>
                    <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                      {feature}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Box>
          </Paper>
        ))}
      </Container>
    </Box>
  );
};
