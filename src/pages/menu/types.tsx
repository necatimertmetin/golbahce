import type { JSX } from "react";
import type { AllergenKey } from "../../types/Allergens";
export interface Allergen {
  title: string;
  color: string;
  icon: JSX.Element;
}

export interface MenuItem {
  title: string;
  description: string;
  image: string;
  price: number;
  allergens: AllergenKey[];
  extras?: MenuItem[];
}

export interface MenuCategory {
  title: string;
  description: string;
  image: string;
  items: MenuItem[];
  extras?: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    title: "breakfast.title",
    description: "breakfast.description",
    image: "/images/menu/breakfast/breakfast.jpg",
    items: [
      {
        title: "breakfast.items.serpme_single.title",
        description: "breakfast.items.serpme_single.description",
        image: "breakfast.items.serpme_single.image",
        price: 500,
        allergens: [],
        extras: [
          {
            title:
              "breakfast.items.serpme_single.extras.egg_with_pastirma.title",
            description:
              "breakfast.items.serpme_single.extras.egg_with_pastirma.description",
            image:
              "breakfast.items.serpme_single.extras.egg_with_pastirma.image",
            price: 2.5,
            allergens: [],
          },
          {
            title: "breakfast.items.serpme_single.extras.egg_with_sucuk.title",
            description:
              "breakfast.items.serpme_single.extras.egg_with_sucuk.description",
            image: "breakfast.items.serpme_single.extras.egg_with_sucuk.image",
            price: 2.4,
            allergens: [],
          },
          {
            title:
              "breakfast.items.serpme_single.extras.menemen_varieties.title",
            description:
              "breakfast.items.serpme_single.extras.menemen_varieties.description",
            image:
              "breakfast.items.serpme_single.extras.menemen_varieties.image",
            price: 200,
            allergens: [],
          },
          {
            title:
              "breakfast.items.serpme_single.extras.omelet_varieties.title",
            description:
              "breakfast.items.serpme_single.extras.omelet_varieties.description",
            image:
              "breakfast.items.serpme_single.extras.omelet_varieties.image",
            price: 1330,
            allergens: [],
          },
          {
            title: "breakfast.items.serpme_single.extras.sucuk_plate.title",
            description:
              "breakfast.items.serpme_single.extras.sucuk_plate.description",
            image: "breakfast.items.serpme_single.extras.sucuk_plate.image",
            price: 200,
            allergens: [],
          },
          {
            title: "breakfast.items.serpme_single.extras.sosis_plate.title",
            description:
              "breakfast.items.serpme_single.extras.sosis_plate.description",
            image: "breakfast.items.serpme_single.extras.sosis_plate.image",
            price: 150,
            allergens: [],
          },
          {
            title: "breakfast.items.serpme_single.extras.chips_plate.title",
            description:
              "breakfast.items.serpme_single.extras.chips_plate.description",
            image: "breakfast.items.serpme_single.extras.chips_plate.image",
            price: 140,
            allergens: [],
          },
          {
            title: "breakfast.items.serpme_single.extras.pisi_plate.title",
            description:
              "breakfast.items.serpme_single.extras.pisi_plate.description",
            image: "breakfast.items.serpme_single.extras.pisi_plate.image",
            price: 160,
            allergens: [],
          },
          {
            title: "breakfast.items.serpme_single.extras.sigara_boregi.title",
            description:
              "breakfast.items.serpme_single.extras.sigara_boregi.description",
            image: "breakfast.items.serpme_single.extras.sigara_boregi.image",
            price: 160,
            allergens: [],
          },
          {
            title: "breakfast.items.serpme_single.extras.pacanga_boregi.title",
            description:
              "breakfast.items.serpme_single.extras.pacanga_boregi.description",
            image: "breakfast.items.serpme_single.extras.pacanga_boregi.image",
            price: 200,
            allergens: [],
          },
          {
            title: "breakfast.items.serpme_single.extras.kuymak.title",
            description:
              "breakfast.items.serpme_single.extras.kuymak.description",
            image: "breakfast.items.serpme_single.extras.kuymak.image",
            price: 200,
            allergens: [],
          },
          {
            title: "breakfast.items.serpme_single.extras.hellim_l2q.title",
            description:
              "breakfast.items.serpme_single.extras.hellim_l2q.description",
            image: "breakfast.items.serpme_single.extras.hellim_l2q.image",
            price: 200,
            allergens: [],
          },
        ],
      },
    ],
  },
  {
    title: "toast.title",
    description: "toast.description",
    image: "/images/menu/toast/toast.jpg",
    items: [
      {
        title: "toast.items.karisik.title",
        description: "toast.items.karisik.description",
        image: "toast.items.karisik.image",
        price: 150,
        allergens: [],
      },
      {
        title: "toast.items.kasarli.title",
        description: "toast.items.kasarli.description",
        image: "toast.items.kasarli.image",
        price: 150,
        allergens: [],
      },
    ],
  },
  {
    title: "gozleme.title",
    description: "gozleme.description",
    image: "/images/menu/gozleme/gozleme.webp",
    items: [
      {
        title: "gozleme.items.peynirli.title",
        description: "gozleme.items.peynirli.description",
        image: "gozleme.items.peynirli.image",
        price: 150,
        allergens: [],
      },
      {
        title: "gozleme.items.patatesli.title",
        description: "gozleme.items.patatesli.description",
        image: "gozleme.items.patatesli.image",
        price: 150,
        allergens: [],
      },
      {
        title: "gozleme.items.kasarli.title",
        description: "gozleme.items.kasarli.description",
        image: "gozleme.items.kasarli.image",
        price: 150,
        allergens: [],
      },
    ],
  },
  {
    title: "burger.title",
    description: "burger.description",
    image: "/images/menu/burger/hamburger.jpg",
    items: [
      {
        title: "burger.items.burger_combo.title",
        description: "burger.items.burger_combo.description",
        image: "burger.items.burger_combo.image",
        price: 330,
        allergens: [],
      },
      {
        title: "burger.items.cig_borek.title",
        description: "burger.items.cig_borek.description",
        image: "burger.items.cig_borek.image",
        price: 240,
        allergens: [],
      },
    ],
  },
  {
    title: "pasta.title",
    description: "pasta.description",
    image: "/images/menu/pasta/pasta.jpg",
    items: [
      {
        title: "pasta.items.bolonez.title",
        description: "pasta.items.bolonez.description",
        image: "pasta.items.bolonez.image",
        price: 340,
        allergens: [],
      },
      {
        title: "pasta.items.penne.title",
        description: "pasta.items.penne.description",
        image: "pasta.items.penne.image",
        price: 300,
        allergens: [],
      },
      {
        title: "pasta.items.manti.title",
        description: "pasta.items.manti.description",
        image: "pasta.items.manti.image",
        price: 320,
        allergens: [],
      },
    ],
  },
  {
    title: "grill.title",
    description: "grill.description",
    image: "/images/menu/grill/grill.jpg",
    items: [
      {
        title: "grill.items.kofte.title",
        description: "grill.items.kofte.description",
        image: "grill.items.kofte.image",
        price: 400,
        allergens: [],
      },
      {
        title: "grill.items.citir_tavuk.title",
        description: "grill.items.citir_tavuk.description",
        image: "grill.items.citir_tavuk.image",
        price: 350,
        allergens: [],
      },
      {
        title: "grill.items.sucuk.title",
        description: "grill.items.sucuk.description",
        image: "grill.items.sucuk.image",
        price: 400,
        allergens: [],
      },
      {
        title: "grill.items.tavuk_kanat.title",
        description: "grill.items.tavuk_kanat.description",
        image: "grill.items.tavuk_kanat.image",
        price: 350,
        allergens: [
          "egg",
          "milk",
          "fish",
          "crustacean",
          "peanut",
          "tree_nut",
          "soy",
          "gluten",
          "sesame",
          "lactose",
        ],
      },
    ],
  },
  {
    title: "cold_drinks.title",
    description: "cold_drinks.description",
    image: "/images/menu/cold/cold.jpg",
    items: [
      {
        title: "cold_drinks.items.mineral.title",
        description: "cold_drinks.items.mineral.description",
        image: "cold_drinks.items.mineral.image",
        price: 30,
        allergens: [],
      },
      {
        title: "cold_drinks.items.fruit_mineral.title",
        description: "cold_drinks.items.fruit_mineral.description",
        image: "cold_drinks.items.fruit_mineral.image",
        price: 35,
        allergens: [],
      },
      {
        title: "cold_drinks.items.cola_can.title",
        description: "cold_drinks.items.cola_can.description",
        image: "cold_drinks.items.cola_can.image",
        price: 70,
        allergens: [],
      },
      {
        title: "cold_drinks.items.fanta_can.title",
        description: "cold_drinks.items.fanta_can.description",
        image: "cold_drinks.items.fanta_can.image",
        price: 70,
        allergens: [],
      },
      {
        title: "cold_drinks.items.cola_bottle.title",
        description: "cold_drinks.items.cola_bottle.description",
        image: "cold_drinks.items.cola_bottle.image",
        price: 60,
        allergens: [],
      },
      {
        title: "cold_drinks.items.uludag_gazoz.title",
        description: "cold_drinks.items.uludag_gazoz.description",
        image: "cold_drinks.items.uludag_gazoz.image",
        price: 60,
        allergens: [],
      },
      {
        title: "cold_drinks.items.lemonade.title",
        description: "cold_drinks.items.lemonade.description",
        image: "cold_drinks.items.lemonade.image",
        price: 130,
        allergens: [],
      },
      {
        title: "cold_drinks.items.ice_tea.title",
        description: "cold_drinks.items.ice_tea.description",
        image: "cold_drinks.items.ice_tea.image",
        price: 70,
        allergens: [],
      },
      {
        title: "cold_drinks.items.ayran.title",
        description: "cold_drinks.items.ayran.description",
        image: "cold_drinks.items.ayran.image",
        price: 30,
        allergens: [],
      },
      {
        title: "cold_drinks.items.water.title",
        description: "cold_drinks.items.water.description",
        image: "cold_drinks.items.water.image",
        price: 15,
        allergens: [],
      },
      {
        title: "cold_drinks.items.fruit_juice.title",
        description: "cold_drinks.items.fruit_juice.description",
        image: "cold_drinks.items.fruit_juice.image",
        price: 70,
        allergens: [],
      },
      {
        title: "cold_drinks.items.frozen_varieties.title",
        description: "cold_drinks.items.frozen_varieties.description",
        image: "cold_drinks.items.frozen_varieties.image",
        price: 150,
        allergens: [],
      },
      {
        title: "cold_drinks.items.milkshake.title",
        description: "cold_drinks.items.milkshake.description",
        image: "cold_drinks.items.milkshake.image",
        price: 150,
        allergens: [],
      },
      {
        title: "cold_drinks.items.iced_coffee.title",
        description: "cold_drinks.items.iced_coffee.description",
        image: "cold_drinks.items.iced_coffee.image",
        price: 150,
        allergens: [],
      },
      {
        title: "cold_drinks.items.churchill.title",
        description: "cold_drinks.items.churchill.description",
        image: "cold_drinks.items.churchill.image",
        price: 80,
        allergens: [],
      },
    ],
  },
  {
    title: "hot_drinks.title",
    description: "hot_drinks.description",
    image: "/images/menu/hot/hot.jpg",
    items: [
      {
        title: "hot_drinks.items.tea.title",
        description: "hot_drinks.items.tea.description",
        image: "hot_drinks.items.tea.image",
        price: 30,
        allergens: [],
      },
      {
        title: "hot_drinks.items.turkish_coffee.title",
        description: "hot_drinks.items.turkish_coffee.description",
        image: "hot_drinks.items.turkish_coffee.image",
        price: 75,
        allergens: [],
      },
      {
        title: "hot_drinks.items.nescafe.title",
        description: "hot_drinks.items.nescafe.description",
        image: "hot_drinks.items.nescafe.image",
        price: 100,
        allergens: [],
      },
      {
        title: "hot_drinks.items.filter_coffee.title",
        description: "hot_drinks.items.filter_coffee.description",
        image: "hot_drinks.items.filter_coffee.image",
        price: 10,
        allergens: [],
      },
      {
        title: "hot_drinks.items.espresso.title",
        description: "hot_drinks.items.espresso.description",
        image: "hot_drinks.items.espresso.image",
        price: 80,
        allergens: [],
      },
      {
        title: "hot_drinks.items.doppio.title",
        description: "hot_drinks.items.doppio.description",
        image: "hot_drinks.items.doppio.image",
        price: 130,
        allergens: [],
      },
      {
        title: "hot_drinks.items.herbal_tea.title",
        description: "hot_drinks.items.herbal_tea.description",
        image: "hot_drinks.items.herbal_tea.image",
        price: 30,
        allergens: [],
      },
      {
        title: "hot_drinks.items.chocolate.title",
        description: "hot_drinks.items.chocolate.description",
        image: "hot_drinks.items.chocolate.image",
        price: 100,
        allergens: [],
      },
      {
        title: "hot_drinks.items.sahlep.title",
        description: "hot_drinks.items.sahlep.description",
        image: "hot_drinks.items.sahlep.image",
        price: 0,
        allergens: [],
      },
      {
        title: "hot_drinks.items.oralet.title",
        description: "hot_drinks.items.oralet.description",
        image: "hot_drinks.items.oralet.image",
        price: 30,
        allergens: [],
      },
      {
        title: "hot_drinks.items.cinnamon.title",
        description: "hot_drinks.items.cinnamon.description",
        image: "hot_drinks.items.cinnamon.image",
        price: 30,
        allergens: [],
      },
      {
        title: "hot_drinks.items.cappuccino.title",
        description: "hot_drinks.items.cappuccino.description",
        image: "hot_drinks.items.cappuccino.image",
        price: 150,
        allergens: [],
      },
      {
        title: "hot_drinks.items.mocha.title",
        description: "hot_drinks.items.mocha.description",
        image: "hot_drinks.items.mocha.image",
        price: 150,
        allergens: [],
      },
      {
        title: "hot_drinks.items.americano.title",
        description: "hot_drinks.items.americano.description",
        image: "hot_drinks.items.americano.image",
        price: 120,
        allergens: [],
      },
      {
        title: "hot_drinks.items.latte_macchiato.title",
        description: "hot_drinks.items.latte_macchiato.description",
        image: "hot_drinks.items.latte_macchiato.image",
        price: 150,
        allergens: [],
      },
      {
        title: "hot_drinks.items.apa_colda.title",
        description: "hot_drinks.items.apa_colda.description",
        image: "hot_drinks.items.apa_colda.image",
        price: 130,
        allergens: [],
      },
      {
        title: "hot_drinks.items.milk_coffee.title",
        description: "hot_drinks.items.milk_coffee.description",
        image: "hot_drinks.items.milk_coffee.image",
        price: 100,
        allergens: [],
      },
    ],
  },
];
