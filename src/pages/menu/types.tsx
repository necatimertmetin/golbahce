import type { JSX } from "react";
import type { AllergenKey } from "../../types/Allergens";

export interface Allergen {
  title: string;
  color: string;
  icon: JSX.Element;
}

export interface MenuItem {
  key: string;
  price: number;
  allergens: AllergenKey[];
  extras?: MenuItem[];
}

export interface MenuCategory {
  key: string;
  image: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    key: "breakfast",
    image: "/images/menu/breakfast/breakfast.jpg",
    items: [
      {
        key: "serpme_single",
        price: 500,
        allergens: ["egg", "milk", "gluten"],
        extras: [
          { key: "egg_with_pastirma", price: 2.5, allergens: ["egg", "milk"] },
          { key: "egg_with_sucuk", price: 2.4, allergens: ["egg"] },
          { key: "menemen_varieties", price: 200, allergens: ["egg", "milk"] },
          { key: "omelet_varieties", price: 1330, allergens: ["egg", "milk"] },
          { key: "sucuk_plate", price: 200, allergens: [] },
          { key: "sosis_plate", price: 150, allergens: ["soy", "gluten"] },
          { key: "chips_plate", price: 140, allergens: [] },
          { key: "pisi_plate", price: 160, allergens: ["gluten", "milk"] },
          { key: "sigara_boregi", price: 160, allergens: ["gluten", "milk"] },
          { key: "pacanga_boregi", price: 200, allergens: ["gluten", "milk"] },
          { key: "kuymak", price: 200, allergens: ["milk", "lactose"] },
          { key: "hellim_l2q", price: 200, allergens: ["milk", "lactose"] },
        ],
      },
    ],
  },
  {
    key: "toast",
    image: "/images/menu/toast/toast.jpg",
    items: [
      { key: "karisik", price: 150, allergens: ["milk", "gluten"] },
      { key: "kasarli", price: 150, allergens: ["milk", "gluten"] },
    ],
  },
  {
    key: "gozleme",
    image: "/images/menu/gozleme/gozleme.webp",
    items: [
      { key: "peynirli", price: 150, allergens: ["milk", "gluten"] },
      { key: "patatesli", price: 150, allergens: ["gluten"] },
      { key: "kasarli", price: 150, allergens: ["milk", "gluten"] },
    ],
  },
  {
    key: "burger",
    image: "/images/menu/burger/hamburger.jpg",
    items: [
      {
        key: "burger_combo",
        price: 330,
        allergens: ["gluten", "egg", "milk", "sesame", "soy"],
      },
      { key: "cig_borek", price: 240, allergens: ["gluten", "milk"] },
    ],
  },
  {
    key: "pasta",
    image: "/images/menu/pasta/pasta.jpg",
    items: [
      { key: "bolonez", price: 340, allergens: ["gluten", "milk"] },
      { key: "penne", price: 300, allergens: ["gluten"] },
      { key: "manti", price: 320, allergens: ["gluten", "egg", "milk"] },
    ],
  },
  {
    key: "grill",
    image: "/images/menu/grill/grill.jpg",
    items: [
      { key: "kofte", price: 400, allergens: ["egg", "gluten"] },
      { key: "citir_tavuk", price: 350, allergens: ["egg", "gluten", "milk"] },
      { key: "sucuk", price: 400, allergens: [] },
      {
        key: "tavuk_kanat",
        price: 350,
        allergens: ["egg", "milk", "soy", "gluten", "lactose"],
      },
    ],
  },
  {
    key: "cold_drinks",
    image: "/images/menu/cold/cold.jpg",
    items: (() => {
      const coldDrinksAllergens: Record<string, AllergenKey[]> = {
        ayran: ["milk", "lactose"],
        milkshake: ["milk", "lactose"],
        iced_coffee: ["milk", "lactose"],
      };

      const coldDrinksPrices: Record<string, number> = {
        mineral: 30,
        fruit_mineral: 35,
        cola_can: 70,
        fanta_can: 70,
        cola_bottle: 60,
        uludag_gazoz: 60,
        lemonade: 130,
        ice_tea: 70,
        ayran: 30,
        water: 15,
        fruit_juice: 70,
        frozen_varieties: 150,
        milkshake: 150,
        iced_coffee: 150,
        churchill: 80,
      };

      return [
        "mineral",
        "fruit_mineral",
        "cola_can",
        "fanta_can",
        "cola_bottle",
        "uludag_gazoz",
        "lemonade",
        "ice_tea",
        "ayran",
        "water",
        "fruit_juice",
        "frozen_varieties",
        "milkshake",
        "iced_coffee",
        "churchill",
      ].map(
        (key): MenuItem => ({
          key,
          price: coldDrinksPrices[key] ?? 0,
          allergens: coldDrinksAllergens[key] ?? [],
        })
      );
    })(),
  },
  {
    key: "hot_drinks",
    image: "/images/menu/hot/hot.jpg",
    items: (() => {
      const hotDrinksAllergens: Record<string, AllergenKey[]> = {
        cappuccino: ["milk", "lactose"],
        mocha: ["milk", "lactose"],
        latte_macchiato: ["milk", "lactose"],
        milk_coffee: ["milk", "lactose"],
        chocolate: ["milk", "lactose"],
        sahlep: ["milk", "lactose"],
      };

      const hotDrinksPrices: Record<string, number> = {
        tea: 30,
        turkish_coffee: 75,
        nescafe: 100,
        filter_coffee: 10,
        espresso: 80,
        doppio: 130,
        herbal_tea: 30,
        chocolate: 100,
        sahlep: 0,
        oralet: 30,
        cinnamon: 30,
        cappuccino: 150,
        mocha: 150,
        americano: 120,
        latte_macchiato: 150,
        apa_colda: 130,
        milk_coffee: 100,
      };

      return [
        "tea",
        "turkish_coffee",
        "nescafe",
        "filter_coffee",
        "espresso",
        "doppio",
        "herbal_tea",
        "chocolate",
        "sahlep",
        "oralet",
        "cinnamon",
        "cappuccino",
        "mocha",
        "americano",
        "latte_macchiato",
        "apa_colda",
        "milk_coffee",
      ].map(
        (key): MenuItem => ({
          key,
          price: hotDrinksPrices[key] ?? 0,
          allergens: hotDrinksAllergens[key] ?? [],
        })
      );
    })(),
  },
];
