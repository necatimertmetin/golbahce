import {
  Card,
  CardContent,
  Typography,
  Box,
  Paper,
  Chip,
  Grid,
  Container,
} from "@mui/material";
import { Restaurant, LocalCafe, Fastfood, Icecream } from "@mui/icons-material";
import BrunchDiningIcon from "@mui/icons-material/BrunchDining";
const menuData = [
  {
    category: "Golbahce Kahvaltı",
    icon: <BrunchDiningIcon />,
    items: [
      {
        name: "Peynir (3 çeşit), Yeşillik Tabağı, Zeytin (2 çeşit), Tereyağ, Bal, Reçel (2 çeşit), Kaymak, Sıcak Tabağı (Pişi + Sigara Böreği + Patates Kızartması), Erken Hasat Zeytinyağı, Acuka - Ceviz - Kayısı (Tek Kişilik)",
        price: 500,
        featured: true,
      },
      { name: "Kahvaltı Harici Servis Ücreti", price: 50 },
    ],
    extras: [
      { name: "Pastırmalı Yumurta", price: 2.5 },
      { name: "Sucuklu Yumurta", price: 2.4 },
      { name: "Menemen Çeşitleri", price: 200 },
      { name: "Omlet Çeşitleri", price: 1330 },
      { name: "Sucuk Tabağı", price: 200 },
      { name: "Sosis Tabağı", price: 150 },
      { name: "Cips Tabağı", price: 140 },
      { name: "Pişi Tabağı", price: 160 },
      { name: "Sigara Böreği", price: 160 },
      { name: "Paçanga Böreği", price: 200 },
      { name: "Kuymak", price: 200 },
      { name: "Hellim L2Q", price: 200 },
    ],
  },
  {
    category: "Makarna Çeşitleri",
    icon: <Restaurant />,
    items: [
      { name: "Bolonez Soslu Makarna + İçecek", price: 340 },
      { name: "Penne Soslu Makarna + İçecek", price: 300 },
      { name: "Mantı", price: 320 },
    ],
  },
  {
    category: "Hamburger",
    icon: <Fastfood />,
    items: [
      { name: "Hamburger + Patates Kızartması + İçecek", price: 330 },
      { name: "Çiğ Börek", price: 240 },
    ],
  },
  {
    category: "Gözleme Çeşitleri",
    icon: <Restaurant />,
    items: [
      { name: "Peynirli", price: 150 },
      { name: "Patatesli", price: 150 },
      { name: "Kaşarlı", price: 150 },
    ],
  },
  {
    category: "Tost Çeşitleri",
    icon: <Fastfood />,
    items: [
      { name: "Karışık", price: 150 },
      { name: "Kaşarlı Tost", price: 150 },
    ],
  },
  {
    category: "Izgara Çeşitleri",
    icon: <Restaurant />,
    items: [
      { name: "Köfte + Salata + Patates Kızartması", price: 400 },
      { name: "Çıtır Tavuk + Salata + Patates Kızartması", price: 350 },
      { name: "Sucuk + Salata + Patates Kızartması", price: 400 },
      { name: "Tavuk Kanat + Salata + Patates Kızartması", price: 350 },
    ],
  },
  {
    category: "Soğuk İçecekler",
    icon: <Icecream />,
    items: [
      { name: "Maden Suyu", price: 30 },
      { name: "Meyveli Maden Suyu", price: 35 },
      { name: "Kola Kutu", price: 70 },
      { name: "Fanta Kutu", price: 70 },
      { name: "Kola Şişe", price: 60 },
      { name: "Uludağ Gazoz", price: 60 },
      { name: "Limonata", price: 130 },
      { name: "Ice Tea", price: 70 },
      { name: "Ayran", price: 30 },
      { name: "Su", price: 15 },
      { name: "Meyve Suyu", price: 70 },
      { name: "Frozen Çeşitleri", price: 150 },
      { name: "Milkshake", price: 150 },
      { name: "Soğuk Kahve", price: 150 },
      { name: "Churchill", price: 80 },
    ],
  },
  {
    category: "Sıcak İçecekler",
    icon: <LocalCafe />,
    items: [
      { name: "Çay", price: 30 },
      { name: "Türk Kahvesi", price: 75 },
      { name: "Neskafe", price: 100 },
      { name: "Filtre Kahve", price: 10 },
      { name: "Espresso", price: 80 },
      { name: "Doppio", price: 130 },
      { name: "Bitki Çayı", price: 30 },
      { name: "Sıcak Çikolata", price: 100 },
      { name: "Sahlep", price: null },
      { name: "Oralet", price: 30 },
      { name: "Tarçın", price: 30 },
      { name: "Cappuccino", price: 150 },
      { name: "Mocha", price: 150 },
      { name: "Americano", price: 120 },
      { name: "Latte Macchiato", price: 150 },
      { name: "Apa Colda", price: 130 },
      { name: "Sütlü Kahve", price: 100 },
    ],
  },
];

export const Menu = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper
        elevation={0}
        sx={{
          p: 4,
          borderRadius: 4,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(245,245,245,0.9) 100%)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Box textAlign="center" mb={5}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: "bold",
              background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
            }}
          >
            Golbahçe Menü
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Lezzetli anlar için seçkin tatlar
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {menuData.map(({ category, items, extras, icon }) => (
            <Grid size={{ xs: 12, md: 6 }} key={category}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  height: "100%",
                  transition:
                    "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 4,
                  },
                }}
              >
                <Box display="flex" alignItems="center" mb={3}>
                  <Box
                    sx={{
                      mr: 2,
                      p: 1.5,
                      borderRadius: 2,
                      bgcolor: "primary.main",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {icon}
                  </Box>
                  <Typography
                    variant="h5"
                    component="h2"
                    sx={{
                      fontWeight: "bold",
                      color: "primary.main",
                    }}
                  >
                    {category}
                  </Typography>
                </Box>

                <Box sx={{ mb: 2 }}>
                  {items.map(({ name, price }) => (
                    <Card
                      key={name}
                      variant="outlined"
                      sx={{
                        mb: 2,
                        borderRadius: 2,
                        border: "1px solid",
                        borderColor: "divider",
                        bgcolor: "background.paper",
                        transition: "all 0.2s ease-in-out",
                        position: "relative",
                        overflow: "visible",
                        "&:hover": {
                          boxShadow: 2,
                          transform: "translateX(4px)",
                        },
                      }}
                    >
                      <CardContent sx={{ py: 2 }}>
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="flex-start"
                        >
                          <Typography
                            variant="body1"
                            sx={{
                              flex: 1,
                              pr: 2,
                              fontWeight: "normal",
                              fontSize: "0.95rem",
                              lineHeight: 1.4,
                            }}
                          >
                            {name}
                          </Typography>
                          {price !== null && (
                            <Box
                              sx={{
                                bgcolor: "primary.main",
                                color: "white",
                                px: 2,
                                py: 0.5,
                                borderRadius: 2,
                                minWidth: "fit-content",
                              }}
                            >
                              <Typography
                                variant="h6"
                                sx={{
                                  fontWeight: "bold",
                                  fontSize: "1.1rem",
                                }}
                              >
                                {price} ₺
                              </Typography>
                            </Box>
                          )}
                        </Box>
                      </CardContent>
                    </Card>
                  ))}
                </Box>

                {extras && extras.length > 0 && (
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        mb: 2,
                        fontWeight: "bold",
                        color: "text.secondary",
                        borderBottom: "2px solid",
                        borderColor: "divider",
                        pb: 1,
                      }}
                    >
                      Ekstra Seçenekler
                    </Typography>
                    <Grid container spacing={1}>
                      {extras.map(({ name, price }) => (
                        <Grid size={{ xs: 12, md: 6 }} key={name}>
                          <Card
                            variant="outlined"
                            sx={{
                              borderRadius: 2,
                              bgcolor: "grey.50",
                              transition: "all 0.2s ease-in-out",
                              "&:hover": {
                                bgcolor: "grey.100",
                                transform: "scale(1.02)",
                              },
                            }}
                          >
                            <CardContent sx={{ py: 1.5, px: 2 }}>
                              <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                              >
                                <Typography
                                  variant="body2"
                                  sx={{
                                    fontWeight: "medium",
                                    fontSize: "0.85rem",
                                  }}
                                >
                                  {name}
                                </Typography>
                                {price !== null && (
                                  <Chip
                                    label={`${price} ₺`}
                                    size="small"
                                    variant="outlined"
                                    sx={{
                                      fontSize: "0.75rem",
                                      fontWeight: "bold",
                                    }}
                                  />
                                )}
                              </Box>
                            </CardContent>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                )}
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box textAlign="center" mt={5}>
          <Typography variant="body2" color="text.secondary">
            Fiyatlar Türk Lirası (₺) cinsindendir • Afiyet olsun! 🍽️
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};
