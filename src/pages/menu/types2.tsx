import type { JSX } from "react";
import type { AllergenKey } from "../../types/Allergens";

export interface Allergen {
  title: string;
  color: string;
  icon: JSX.Element;
}

export interface MenuItem {
  id: string;
  price: number;
  allergens: AllergenKey[];
  extras?: MenuItem[];
}

export interface MenuCategory {
  id: string;
  image: string;
  items: MenuItem[];
  extras?: MenuItem[];
}

// Helper function to get translation key
export const getTranslationKey = (
  categoryId: string,
  itemId?: string,
  extraId?: string,
  field?: string
) => {
  if (extraId && itemId) {
    return `${categoryId}.items.${itemId}.extras.${extraId}.${
      field || ""
    }`.replace(/\.$/, "");
  }
  if (itemId) {
    return `${categoryId}.items.${itemId}.${field || ""}`.replace(/\.$/, "");
  }
  return `${categoryId}.${field || ""}`.replace(/\.$/, "");
};

export const menuData: MenuCategory[] = [
  {
    id: "breakfast",
    image: "/images/menu/breakfast/breakfast.jpg",
    items: [
      {
        id: "serpme_single",
        price: 500,
        allergens: [],
        extras: [
          {
            id: "egg_with_pastirma",
            price: 250,
            allergens: ["egg"],
          },
          {
            id: "egg_with_sucuk",
            price: 240,
            allergens: ["egg"],
          },
          {
            id: "menemen_varieties",
            price: 200,
            allergens: ["egg"],
          },
          {
            id: "omelet_varieties",
            price: 330,
            allergens: ["egg", "milk"],
          },
          {
            id: "sucuk_plate",
            price: 200,
            allergens: [],
          },
          {
            id: "sosis_plate",
            price: 150,
            allergens: [],
          },
          {
            id: "chips_plate",
            price: 140,
            allergens: [],
          },
          {
            id: "pisi_plate",
            price: 160,
            allergens: ["gluten"],
          },
          {
            id: "sigara_boregi",
            price: 160,
            allergens: ["gluten"],
          },
          {
            id: "pacanga_boregi",
            price: 200,
            allergens: ["gluten", "milk"],
          },
          {
            id: "kuymak",
            price: 200,
            allergens: ["milk"],
          },
          {
            id: "hellim_l2q",
            price: 200,
            allergens: ["milk"],
          },
        ],
      },
    ],
  },
  {
    id: "toast",
    image: "/images/menu/toast/toast.jpg",
    items: [
      {
        id: "karisik",
        price: 150,
        allergens: ["gluten", "milk"],
      },
      {
        id: "kasarli",
        price: 150,
        allergens: ["gluten", "milk"],
      },
    ],
  },
  {
    id: "gozleme",
    image: "/images/menu/gozleme/gozleme.webp",
    items: [
      {
        id: "peynirli",
        price: 150,
        allergens: ["gluten", "milk"],
      },
      {
        id: "patatesli",
        price: 150,
        allergens: ["gluten"],
      },
      {
        id: "kasarli",
        price: 150,
        allergens: ["gluten", "milk"],
      },
    ],
  },
  {
    id: "burger",
    image: "/images/menu/burger/hamburger.jpg",
    items: [
      {
        id: "burger_combo",
        price: 330,
        allergens: ["gluten", "egg"],
      },
      {
        id: "cig_borek",
        price: 240,
        allergens: ["gluten", "egg"],
      },
    ],
  },
  {
    id: "pasta",
    image: "/images/menu/pasta/pasta.jpg",
    items: [
      {
        id: "bolonez",
        price: 340,
        allergens: ["gluten"],
      },
      {
        id: "penne",
        price: 300,
        allergens: ["gluten"],
      },
      {
        id: "manti",
        price: 320,
        allergens: ["gluten", "egg"],
      },
    ],
  },
  {
    id: "grill",
    image: "/images/menu/grill/grill.jpg",
    items: [
      {
        id: "kofte",
        price: 400,
        allergens: [],
      },
      {
        id: "citir_tavuk",
        price: 350,
        allergens: ["gluten"],
      },
      {
        id: "sucuk",
        price: 400,
        allergens: [],
      },
      {
        id: "tavuk_kanat",
        price: 350,
        allergens: ["egg", "milk", "gluten"],
      },
    ],
  },
  {
    id: "cold_drinks",
    image: "/images/menu/cold/cold.jpg",
    items: [
      {
        id: "mineral",
        price: 30,
        allergens: [],
      },
      {
        id: "fruit_mineral",
        price: 35,
        allergens: [],
      },
      {
        id: "cola_can",
        price: 70,
        allergens: [],
      },
      {
        id: "fanta_can",
        price: 70,
        allergens: [],
      },
      {
        id: "cola_bottle",
        price: 60,
        allergens: [],
      },
      {
        id: "uludag_gazoz",
        price: 60,
        allergens: [],
      },
      {
        id: "lemonade",
        price: 130,
        allergens: [],
      },
      {
        id: "ice_tea",
        price: 70,
        allergens: [],
      },
      {
        id: "ayran",
        price: 30,
        allergens: ["milk"],
      },
      {
        id: "water",
        price: 15,
        allergens: [],
      },
      {
        id: "fruit_juice",
        price: 70,
        allergens: [],
      },
      {
        id: "frozen_varieties",
        price: 150,
        allergens: ["milk"],
      },
      {
        id: "milkshake",
        price: 150,
        allergens: ["milk"],
      },
      {
        id: "iced_coffee",
        price: 150,
        allergens: [],
      },
      {
        id: "churchill",
        price: 80,
        allergens: [],
      },
    ],
  },
  {
    id: "hot_drinks",
    image: "/images/menu/hot/hot.jpg",
    items: [
      {
        id: "tea",
        price: 30,
        allergens: [],
      },
      {
        id: "turkish_coffee",
        price: 75,
        allergens: [],
      },
      {
        id: "nescafe",
        price: 100,
        allergens: [],
      },
      {
        id: "filter_coffee",
        price: 100,
        allergens: [],
      },
      {
        id: "espresso",
        price: 80,
        allergens: [],
      },
      {
        id: "doppio",
        price: 130,
        allergens: [],
      },
      {
        id: "herbal_tea",
        price: 30,
        allergens: [],
      },
      {
        id: "chocolate",
        price: 100,
        allergens: ["milk"],
      },
      {
        id: "sahlep",
        price: 120,
        allergens: ["milk"],
      },
      {
        id: "oralet",
        price: 30,
        allergens: [],
      },
      {
        id: "cinnamon",
        price: 30,
        allergens: [],
      },
      {
        id: "cappuccino",
        price: 150,
        allergens: ["milk"],
      },
      {
        id: "mocha",
        price: 150,
        allergens: ["milk"],
      },
      {
        id: "americano",
        price: 120,
        allergens: [],
      },
      {
        id: "latte_macchiato",
        price: 150,
        allergens: ["milk"],
      },
      {
        id: "apa_colda",
        price: 130,
        allergens: ["milk"],
      },
      {
        id: "milk_coffee",
        price: 100,
        allergens: ["milk"],
      },
    ],
  },
];
