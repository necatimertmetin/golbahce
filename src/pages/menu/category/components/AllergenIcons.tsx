import { Grid, Stack, Typography } from "@mui/material";
import { ALLERGENS, type AllergenKey } from "../../../../types/Allergens";
import { useTranslate } from "../../../../hooks/useTranslation";

type Props = {
  allergens?: AllergenKey[];
};

export const AllergenIcons = ({ allergens = [] }: Props) => {
  const { translate } = useTranslate();

  return (
    <Grid container spacing={1} width={"100%"}>
      {allergens.map((key) => {
        const allergen = ALLERGENS[key];
        if (!allergen) return null;
        return (
          <Grid key={key} size={{ xs: 12 / 5 }}>
            <Stack alignItems="center" textAlign="center">
              {allergen.icon}
              <Typography variant="caption">
                {translate(allergen.title)}
              </Typography>
            </Stack>
          </Grid>
        );
      })}
    </Grid>
  );
};
