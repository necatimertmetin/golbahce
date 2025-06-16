import { Grid } from "@mui/material";
import type { MenuCategory } from "../types";
import { CategoryHeader } from "./components/CategoryHeader";
import { CategoryItemCard } from "./components/CategoryItemCard";

type Props = {
  category: MenuCategory;
};

export const CategoryPage = ({ category }: Props) => {
  return (
    <Grid container p={5} mx={30} spacing={5}>
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
