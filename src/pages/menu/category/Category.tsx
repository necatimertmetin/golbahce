import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useTranslate } from "../../../hooks/useTranslation";
import type { MenuCategory } from "../types";
import { ALLERGENS } from "../../../types/Allergens";

type Props = {
  category: MenuCategory;
};

export const CategoryPage = ({ category }: Props) => {
  const { translate } = useTranslate("pages.menu");
  return (
    <Grid container p={5} mx={30} spacing={5}>
      <Grid
        size={{ xs: 12 }}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography variant="h4">Menü</Typography>
        <Typography variant="h3" fontWeight={"bold"}>
          {translate(category.title)}
        </Typography>
      </Grid>

      {[...category.items]
        .sort((a, b) => {
          const aHasExtras = a.extras && a.extras.length > 0;
          const bHasExtras = b.extras && b.extras.length > 0;
          return aHasExtras === bHasExtras ? 0 : aHasExtras ? -1 : 1;
        })
        .map((item) => {
          console.log(item);
          return (
            <Grid
              key={item.title}
              size={{
                xs: item?.extras?.length && item.extras.length > 0 ? 12 : 4,
              }}
            >
              <Card
                sx={{
                  p: 2,
                  borderRadius: 5,
                  background: item.extras?.length ?? "transparent",
                }}
              >
                <CardContent>
                  <Stack alignItems={"center"} spacing={2}>
                    {item?.extras?.length && item.extras.length > 0 ? (
                      <>
                        <Paper sx={{ p: 3, borderRadius: 5 }}>
                          <Stack direction={"row"} spacing={5}>
                            <CardMedia
                              sx={{
                                flex: 1,
                                height:
                                  item?.extras?.length && item.extras.length > 0
                                    ? 300
                                    : 200,
                                borderRadius: 3,
                              }}
                              image={"https://picsum.photos/500/140"}
                              title="green iguana"
                            />
                            <Stack
                              flex={1}
                              textAlign={"center"}
                              alignItems={"center"}
                              justifyContent={"center"}
                            >
                              <Typography variant="h6" fontWeight={600}>
                                {translate(item.title)}
                              </Typography>
                              <Typography>
                                {translate(item.description)}
                              </Typography>
                            </Stack>
                          </Stack>
                        </Paper>
                        <Typography variant="h4" textAlign={"center"} py={5}>
                          Ekstralar
                        </Typography>
                      </>
                    ) : (
                      <>
                        <CardMedia
                          sx={{
                            height:
                              item?.extras?.length && item.extras.length > 0
                                ? 300
                                : 200,
                            borderRadius: 3,
                          }}
                          image={"https://picsum.photos/500/140"}
                          title="green iguana"
                        />
                        <Typography variant="h6" fontWeight={600}>
                          {translate(item.title)}
                        </Typography>
                        <Typography>{translate(item.description)}</Typography>
                      </>
                    )}

                    <Grid container spacing={5}>
                      {item.extras?.map((extra) => (
                        <Grid
                          key={item.title}
                          size={{
                            xs: 4,
                          }}
                        >
                          <Card
                            sx={{ p: 2, borderRadius: 5, minHeight: "400px" }}
                          >
                            <CardMedia
                              sx={{
                                height: 200,
                                borderRadius: 3,
                              }}
                              image={"https://picsum.photos/500/140"}
                              title="green iguana"
                            />
                            <CardContent>
                              <Stack alignItems={"center"} spacing={2}>
                                <Typography variant="h6" fontWeight={600}>
                                  {translate(extra.title)}
                                </Typography>
                                <Typography>
                                  {translate(extra.description)}
                                </Typography>

                                <Grid container>
                                  {item.allergens.map((key) => {
                                    const allergen = ALLERGENS[key];
                                    return (
                                      <Grid size={{ xs: 12 / 5 }}>
                                        <Stack
                                          key={key}
                                          alignItems="center"
                                          textAlign={"center"}
                                        >
                                          {allergen.icon}
                                          <Typography variant="caption">
                                            {allergen.title}
                                          </Typography>
                                        </Stack>
                                      </Grid>
                                    );
                                  })}
                                </Grid>
                              </Stack>
                            </CardContent>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                    <Grid container>
                      {item.allergens.map((key) => {
                        const allergen = ALLERGENS[key];
                        return (
                          <Grid size={{ xs: 12 / 5 }}>
                            <Stack
                              key={key}
                              alignItems="center"
                              textAlign={"center"}
                            >
                              {allergen.icon}
                              <Typography variant="caption">
                                {allergen.title}
                              </Typography>
                            </Stack>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
    </Grid>
  );
};
