import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
  Container,
} from "@mui/material";
import NatureIcon from "@mui/icons-material/Nature";
import GroupsIcon from "@mui/icons-material/Groups";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import PoolIcon from "@mui/icons-material/Pool";
import SpaIcon from "@mui/icons-material/Spa";
import { useTheme } from "@mui/material/styles";

export const About = () => {
  const theme = useTheme();

  const features = [
    {
      icon: <NatureIcon />,
      title: "Doğal Güzellik",
      description: "Yeşillikler içinde, doğa ile iç içe huzurlu bir ortam",
      color: "#4ECDC4",
    },
    {
      icon: <GroupsIcon />,
      title: "Aile Dostu",
      description:
        "Her yaştan misafirimiz için özel olarak tasarlanmış alanlar",
      color: "#FF6B6B",
    },
    {
      icon: <RestaurantIcon />,
      title: "Lezzetli Mutfak",
      description: "Geleneksel ve modern lezzetlerin buluştuğu özel menümüz",
      color: "#45B7D1",
    },
    {
      icon: <LocalFloristIcon />,
      title: "Botanik Bahçe",
      description: "Nadir bitki türleri ve çiçeklerle dolu renkli bahçemiz",
      color: "#96CEB4",
    },
    {
      icon: <PoolIcon />,
      title: "Su Sporları",
      description: "Yüzme havuzu ve çeşitli su aktiviteleri imkanı",
      color: "#9B59B6",
    },
    {
      icon: <SpaIcon />,
      title: "Dinlence Alanları",
      description: "Stres atmak ve rahatlmak için özel dinlence bölgeleri",
      color: "#F39C12",
    },
  ];

  const stats = [
    { number: "15+", label: "Yıllık Deneyim", color: "#FF6B6B" },
    { number: "50K+", label: "Mutlu Misafir", color: "#4ECDC4" },
    { number: "25", label: "Farklı Aktivite", color: "#45B7D1" },
    { number: "12", label: "Ödül & Sertifika", color: "#96CEB4" },
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
            Hakkımızda
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "1rem", sm: "1.1rem" },
              maxWidth: 700,
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Gölbahçe Tesisleri olarak, doğanın kalbinde unutulmaz anlar yaşatmak
            için buradayız
          </Typography>
        </Box>

        {/* Main Story Section */}
        <Grid
          container
          spacing={{ xs: 3, sm: 4, md: 5 }}
          sx={{ mb: { xs: 4, md: 6 } }}
        >
          <Grid size={{ xs: 12, lg: 6 }}>
            <Card
              sx={{
                height: "100%",

                backdropFilter: "blur(10px)",
                border: `1px solid ${
                  theme.palette.mode === "dark"
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(255,255,255,0.3)"
                }`,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <CardContent sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    mb: 3,

                    fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
                  }}
                >
                  Hikayemiz
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    lineHeight: 1.8,
                    mb: 3,
                    fontSize: { xs: "0.95rem", sm: "1rem" },
                  }}
                >
                  2008 yılında başlayan yolculuğumuzda, İstanbul'un kalbinde
                  doğal güzellikleri koruyarak, misafirlerimize huzurlu ve
                  keyifli vakit geçirebilecekleri bir alan yaratma hedefiyle
                  yola çıktık.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    lineHeight: 1.8,
                    mb: 3,
                    fontSize: { xs: "0.95rem", sm: "1rem" },
                  }}
                >
                  Bugün, 15 yılı aşkın deneyimimizle, ailelerin, çiftlerin ve
                  arkadaş gruplarının unutulmaz anılar biriktirdikleri bir mekan
                  haline geldik. Doğaya saygılı, sürdürülebilir turizm
                  anlayışımızla, gelecek nesillere temiz bir çevre bırakma
                  sorumluluğunu taşıyoruz.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    lineHeight: 1.8,
                    fontSize: { xs: "0.95rem", sm: "1rem" },
                  }}
                >
                  Misyon olarak, şehrin stresinden uzaklaşmak isteyen herkese
                  doğal bir kaçış noktası sunmak, geleneksel Türk
                  misafirperverliğini modern konforsuz harmanlayarak unutulmaz
                  deneyimler yaşatmaktır.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, lg: 6 }}>
            <Card
              sx={{
                height: { xs: "300px", sm: "400px", lg: "100%" },
                minHeight: { lg: "500px" },
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Box
                component="img"
                src="https://picsum.photos/800/600?random=1"
                alt="Gölbahçe Tesisleri Genel Görünüm"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Card>
          </Grid>
        </Grid>

        {/* Statistics Section */}
        <Box sx={{ mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h4"
            textAlign="center"
            sx={{
              fontWeight: 600,
              mb: 4,
              fontSize: { xs: "1.5rem", sm: "2rem" },
            }}
          >
            Rakamlarla Gölbahçe
          </Typography>
          <Grid container spacing={{ xs: 2, sm: 3 }}>
            {stats.map((stat, index) => (
              <Grid size={{ xs: 6, sm: 3 }} key={index}>
                <Card
                  sx={{
                    background: `linear-gradient(135deg, 
                      ${theme.palette.background.paper} 0%, 
                      ${
                        theme.palette.mode === "dark"
                          ? "rgba(255,255,255,0.05)"
                          : "rgba(255,255,255,0.9)"
                      } 100%)`,
                    backdropFilter: "blur(10px)",
                    border: `2px solid ${stat.color}40`,
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: `0 12px 40px ${stat.color}30`,
                      border: `2px solid ${stat.color}60`,
                    },
                  }}
                >
                  <CardContent sx={{ py: { xs: 2, sm: 3 } }}>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 700,
                        color: stat.color,
                        mb: 1,
                        fontSize: { xs: "1.8rem", sm: "2.2rem" },
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        fontWeight: 500,
                        fontSize: { xs: "0.8rem", sm: "0.9rem" },
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Features Section */}
        <Box>
          <Typography
            variant="h4"
            textAlign="center"
            sx={{
              fontWeight: 600,
              mb: 4,
              color: "white",
              textShadow: "0 2px 10px rgba(0,0,0,0.3)",
              fontSize: { xs: "1.5rem", sm: "2rem" },
            }}
          >
            Özelliklerimiz
          </Typography>
          <Grid container spacing={{ xs: 2.5, sm: 3, md: 4 }}>
            {features.map((feature, index) => (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    background: `linear-gradient(135deg, 
                      ${theme.palette.background.paper} 0%, 
                      ${
                        theme.palette.mode === "dark"
                          ? "rgba(255,255,255,0.03)"
                          : "rgba(255,255,255,0.8)"
                      } 100%)`,
                    backdropFilter: "blur(10px)",
                    border: `1px solid ${
                      theme.palette.mode === "dark"
                        ? "rgba(255,255,255,0.08)"
                        : "rgba(255,255,255,0.2)"
                    }`,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: theme.shadows[12],
                      "& .feature-avatar": {
                        transform: "scale(1.15) rotate(5deg)",
                        boxShadow: `0 8px 30px ${feature.color}50`,
                      },
                    },
                  }}
                >
                  <CardContent
                    sx={{ p: { xs: 2.5, sm: 3 }, textAlign: "center" }}
                  >
                    <Avatar
                      className="feature-avatar"
                      sx={{
                        bgcolor: feature.color,
                        width: { xs: 60, sm: 70 },
                        height: { xs: 60, sm: 70 },
                        mx: "auto",
                        mb: 2,
                        transition: "all 0.3s ease",
                        boxShadow: `0 4px 20px ${feature.color}30`,
                      }}
                    >
                      {feature.icon}
                    </Avatar>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 1.5,
                        color: theme.palette.text.primary,
                        fontSize: { xs: "1rem", sm: "1.1rem" },
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        lineHeight: 1.6,
                        fontSize: { xs: "0.85rem", sm: "0.9rem" },
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
