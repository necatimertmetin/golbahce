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
import { useTranslate } from "../../hooks/useTranslation";

export const About = () => {
  const theme = useTheme();
  const { translate } = useTranslate("pages.about");

  const features = [
    {
      icon: <NatureIcon />,
      title: translate("features.nature.title"),
      description: translate("features.nature.description"),
      color: "#4ECDC4",
    },
    {
      icon: <GroupsIcon />,
      title: translate("features.family.title"),
      description: translate("features.family.description"),
      color: "#FF6B6B",
    },
    {
      icon: <RestaurantIcon />,
      title: translate("features.kitchen.title"),
      description: translate("features.kitchen.description"),
      color: "#45B7D1",
    },
    {
      icon: <LocalFloristIcon />,
      title: translate("features.garden.title"),
      description: translate("features.garden.description"),
      color: "#96CEB4",
    },
    {
      icon: <PoolIcon />,
      title: translate("features.pool.title"),
      description: translate("features.pool.description"),
      color: "#9B59B6",
    },
    {
      icon: <SpaIcon />,
      title: translate("features.spa.title"),
      description: translate("features.spa.description"),
      color: "#F39C12",
    },
  ];

  const stats = [
    {
      number: translate("stats.experience.number"),
      label: translate("stats.experience.label"),
      color: "#FF6B6B",
    },
    {
      number: translate("stats.guests.number"),
      label: translate("stats.guests.label"),
      color: "#4ECDC4",
    },
    {
      number: translate("stats.activities.number"),
      label: translate("stats.activities.label"),
      color: "#45B7D1",
    },
    {
      number: translate("stats.awards.number"),
      label: translate("stats.awards.label"),
      color: "#96CEB4",
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
            }}
          >
            {translate("subtitle")}
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
                  {translate("story.title")}
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
                  {translate("story.paragraph1")}
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
                  {translate("story.paragraph2")}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    lineHeight: 1.8,
                    fontSize: { xs: "0.95rem", sm: "1rem" },
                  }}
                >
                  {translate("story.paragraph3")}
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
                alt={translate("story.imageAlt")}
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
            {translate("statsTitle")}
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
            {translate("featuresTitle")}
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
