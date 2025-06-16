import {
  Card,
  CardContent,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useTranslate } from "../../../../hooks/useTranslation";

import { ExtraItemCard } from "./ExtraItemCard";
import { AllergenIcons } from "./AllergenIcons";
import type { AllergenKey } from "../../../../types/Allergens";
import { useState } from "react";

type Extra = {
  key: string;
  allergens?: AllergenKey[];
};

type Item = {
  key: string;
  extras?: Extra[];
  allergens?: AllergenKey[];
};

type Props = {
  categoryKey: string;
  item: Item;
};

export const CategoryItemCard = ({ categoryKey, item }: Props) => {
  const { translate } = useTranslate("pages.menu");
  const hasExtras = item.extras && item.extras.length > 0;

  // Fallback resim yolu
  const fallbackSrc = "https://picsum.photos/500/300";

  // İlk resim kaynağı
  const initialSrc = `/images/menu/${categoryKey}/${item.key}.webp`;

  // State ile src kontrolü (büyük resim için)
  const [mainSrc, setMainSrc] = useState(initialSrc);

  return (
    <Grid
      size={{
        xs: hasExtras ? 12 : 12,
        sm: hasExtras ? 12 : 6,
        md: hasExtras ? 12 : 4,
        lg: hasExtras ? 12 : 3,
      }}
    >
      <CardContent>
        <Stack alignItems="center" spacing={2}>
          {hasExtras ? (
            <>
              <Paper sx={{ p: 3, borderRadius: 5 }}>
                <Stack direction="row" spacing={5}>
                  <img
                    style={{
                      height: 300,
                      width: "100%",
                      borderRadius: 12,
                      objectFit: "cover",
                      flex: 1,
                    }}
                    src={mainSrc}
                    alt={translate(`${categoryKey}.items.${item.key}.title`)}
                    onError={() => {
                      if (mainSrc !== fallbackSrc) setMainSrc(fallbackSrc);
                    }}
                  />

                  <Stack
                    flex={1}
                    textAlign="center"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography variant="h6" fontWeight={600}>
                      {translate(`${categoryKey}.items.${item.key}.title`)}
                    </Typography>
                    <Typography>
                      {translate(
                        `${categoryKey}.items.${item.key}.description`
                      )}
                    </Typography>
                  </Stack>
                </Stack>
              </Paper>
              <Typography variant="h4" textAlign="center" py={5}>
                Ekstralar
              </Typography>

              <Grid container spacing={5}>
                {item.extras!.map((extra) => (
                  <ExtraItemCard
                    key={extra.key}
                    categoryKey={categoryKey}
                    itemKey={item.key}
                    extra={extra}
                  />
                ))}
              </Grid>
            </>
          ) : (
            <Card sx={{ p: 2, borderRadius: 5, minHeight: "400px" }}>
              <img
                style={{
                  height: 200,
                  width: "100%",
                  borderRadius: 12,
                  objectFit: "cover",
                }}
                src={mainSrc}
                alt={translate(`${categoryKey}.items.${item.key}.title`)}
                onError={() => {
                  if (mainSrc !== fallbackSrc) setMainSrc(fallbackSrc);
                }}
              />
              <CardContent>
                <Stack alignItems="center" spacing={2} textAlign={"center"}>
                  <Typography variant="h6" fontWeight={600}>
                    {translate(`${categoryKey}.items.${item.key}.title`)}
                  </Typography>
                  <Typography>
                    {translate(`${categoryKey}.items.${item.key}.description`)}
                  </Typography>
                </Stack>
              </CardContent>
              <AllergenIcons allergens={item.allergens} />
            </Card>
          )}
        </Stack>
      </CardContent>
    </Grid>
  );
};
