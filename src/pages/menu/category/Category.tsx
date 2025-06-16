import { Grid, CircularProgress, Alert, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { useMenuData } from "../../../hooks/FirebaseMenuHooks";
import { CategoryHeader } from "./components/CategoryHeader";
import { CategoryItemCard } from "./components/CategoryItemCard";

export const CategoryPage = () => {
  const { categoryKey } = useParams<{ categoryKey: string }>();
  const { menuData, loading, error } = useMenuData();

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="50vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box p={{ xs: 2, md: 3 }} mx={{ xs: 1, sm: 2, md: 30 }}>
        <Alert severity="error">
          Kategori verisi yüklenirken hata oluştu: {error}
        </Alert>
      </Box>
    );
  }

  const category = menuData.find((cat) => cat.key === categoryKey);

  if (!category) {
    return (
      <Box p={{ xs: 2, md: 3 }} mx={{ xs: 1, sm: 2, md: 30 }}>
        <Alert severity="warning">Kategori bulunamadı.</Alert>
      </Box>
    );
  }

  return (
    <Grid
      container
      p={{ xs: 2, sm: 3, md: 5 }}
      mx={{ xs: 1, sm: 2, md: 30 }}
      spacing={{ xs: 2, sm: 3, md: 5 }}
    >
      <CategoryHeader category={category} />

      {[...category.items]
        .sort((a, b) => {
          const aHasExtras = a.extras && a.extras.length > 0;
          const bHasExtras = b.extras && b.extras.length > 0;
          return aHasExtras === bHasExtras ? 0 : aHasExtras ? -1 : 1;
        })
        .map((item) => (
          <CategoryItemCard
            key={item.key}
            categoryKey={category.key}
            item={item}
          />
        ))}
    </Grid>
  );
};
