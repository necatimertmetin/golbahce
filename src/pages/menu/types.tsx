import { BrunchDining } from "@mui/icons-material";
import type { JSX } from "react";

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
  allergents: Allergen[];
  extras?: MenuItem[]; // Recursive yapı
}

export interface MenuCategory {
  title: string;
  description: string;
  image: string;
  items: MenuItem[];
  extras?: MenuItem[];
}

/**
 * 
 *     {
        title: "Kahvaltı Harici Servis Ücreti",
        description:
          "Sadece kahvaltı tabağı dışında oturumlar için geçerlidir.",
        image: "",
        price: 50,
        allergents: [],
      },
 */
export const menuData: MenuCategory[] = [
  {
    title: "Kahvaltılıklar",
    description:
      "Günün en önemli öğününde bitirilemeyen tabaklar!! Koccaman Lezzetler…",
    image: "/images/menu/breakfast/breakfast.jpg",
    items: [
      {
        title: "Serpme Kahvaltı (Tek Kişilik)",
        description:
          "Peynir (3 çeşit), Yeşillik Tabağı, Zeytin (2 çeşit), Tereyağ, Bal, Reçel (2 çeşit), Kaymak, Sıcak Tabağı (Pişi + Sigara Böreği + Patates Kızartması), Erken Hasat Zeytinyağı, Acuka - Ceviz - Kayısı",
        image: "/images/menu/breakfast/breakfast.jpg",
        price: 500,
        allergents: [],
      },
    ],
    extras: [
      {
        title: "Pastırmalı Yumurta",
        description: "",
        image: "",
        price: 2.5,
        allergents: [
          {
            title: "Egg",
            color: "red",
            icon: <BrunchDining />,
          },
        ],
      },
      {
        title: "Sucuklu Yumurta",
        description: "",
        image: "",
        price: 2.4,
        allergents: [],
      },
      {
        title: "Menemen Çeşitleri",
        description: "",
        image: "",
        price: 200,
        allergents: [],
      },
      {
        title: "Omlet Çeşitleri",
        description: "",
        image: "",
        price: 1330,
        allergents: [],
      },
      {
        title: "Sucuk Tabağı",
        description: "",
        image: "",
        price: 200,
        allergents: [],
      },
      {
        title: "Sosis Tabağı",
        description: "",
        image: "",
        price: 150,
        allergents: [],
      },
      {
        title: "Cips Tabağı",
        description: "",
        image: "",
        price: 140,
        allergents: [],
      },
      {
        title: "Pişi Tabağı",
        description: "",
        image: "",
        price: 160,
        allergents: [],
      },
      {
        title: "Sigara Böreği",
        description: "",
        image: "",
        price: 160,
        allergents: [],
      },
      {
        title: "Paçanga Böreği",
        description: "",
        image: "",
        price: 200,
        allergents: [],
      },
      {
        title: "Kuymak",
        description: "",
        image: "",
        price: 200,
        allergents: [],
      },
      {
        title: "Hellim L2Q",
        description: "",
        image: "",
        price: 200,
        allergents: [],
      },
    ],
  },
  {
    title: "Tost Çeşitleri",
    description: "Basit Değil, Efsane!",
    image: "/images/menu/toast/toast.jpg",
    items: [
      {
        title: "Karışık",
        description: "",
        image: "",
        price: 150,
        allergents: [],
      },
      {
        title: "Kaşarlı Tost",
        description: "",
        image: "",
        price: 150,
        allergents: [],
      },
    ],
  },
  {
    title: "Gözlemeler",
    description: "Sacın Üzerinde Aşk Var!",
    image: "/images/menu/gozleme/gozleme.webp",
    items: [
      {
        title: "Peynirli",
        description: "",
        image: "",
        price: 150,
        allergents: [],
      },
      {
        title: "Patatesli",
        description: "",
        image: "",
        price: 150,
        allergents: [],
      },
      {
        title: "Kaşarlı",
        description: "",
        image: "",
        price: 150,
        allergents: [],
      },
    ],
  },
  {
    title: "Burgerler",
    description: "Parmak Isırtan İkili: Burger & Patates Aşkı!",
    image: "/images/menu/burger/hamburger.jpg",
    items: [
      {
        title: "Hamburger + Patates Kızartması + İçecek",
        description: "",
        image: "",
        price: 330,
        allergents: [],
      },
      {
        title: "Çiğ Börek",
        description: "",
        image: "",
        price: 240,
        allergents: [],
      },
    ],
  },
  {
    title: "Makarnalar",
    description: "3 farklı makarna ile Koccaman Lezetler!",
    image: "/images/menu/pasta/pasta.jpg",
    items: [
      {
        title: "Bolonez Soslu Makarna + İçecek",
        description: "",
        image: "",
        price: 340,
        allergents: [],
      },
      {
        title: "Penne Soslu Makarna + İçecek",
        description: "",
        image: "",
        price: 300,
        allergents: [],
      },
      {
        title: "Mantı",
        description: "",
        image: "",
        price: 320,
        allergents: [],
      },
    ],
  },
  {
    title: "Izgara Çeşitleri",
    description: "Ateşle Buluşan Lezzetler!",
    image: "/images/menu/grill/grill.jpg",
    items: [
      {
        title: "Köfte + Salata + Patates Kızartması",
        description: "",
        image: "",
        price: 400,
        allergents: [],
      },
      {
        title: "Çıtır Tavuk + Salata + Patates Kızartması",
        description: "",
        image: "",
        price: 350,
        allergents: [],
      },
      {
        title: "Sucuk + Salata + Patates Kızartması",
        description: "",
        image: "",
        price: 400,
        allergents: [],
      },
      {
        title: "Tavuk Kanat + Salata + Patates Kızartması",
        description: "",
        image: "",
        price: 350,
        allergents: [],
      },
    ],
  },
  {
    title: "Soğuk İçecekler",
    description: "Serinleten Bir Yudum Ferahlık!",
    image: "/images/menu/cold/cold.jpg",
    items: [
      {
        title: "Maden Suyu",
        description: "",
        image: "",
        price: 30,
        allergents: [],
      },
      {
        title: "Meyveli Maden Suyu",
        description: "",
        image: "",
        price: 35,
        allergents: [],
      },
      {
        title: "Kola Kutu",
        description: "",
        image: "",
        price: 70,
        allergents: [],
      },
      {
        title: "Fanta Kutu",
        description: "",
        image: "",
        price: 70,
        allergents: [],
      },
      {
        title: "Kola Şişe",
        description: "",
        image: "",
        price: 60,
        allergents: [],
      },
      {
        title: "Uludağ Gazoz",
        description: "",
        image: "",
        price: 60,
        allergents: [],
      },
      {
        title: "Limonata",
        description: "",
        image: "",
        price: 130,
        allergents: [],
      },
      {
        title: "Ice Tea",
        description: "",
        image: "",
        price: 70,
        allergents: [],
      },
      { title: "Ayran", description: "", image: "", price: 30, allergents: [] },
      { title: "Su", description: "", image: "", price: 15, allergents: [] },
      {
        title: "Meyve Suyu",
        description: "",
        image: "",
        price: 70,
        allergents: [],
      },
      {
        title: "Frozen Çeşitleri",
        description: "",
        image: "",
        price: 150,
        allergents: [],
      },
      {
        title: "Milkshake",
        description: "",
        image: "",
        price: 150,
        allergents: [],
      },
      {
        title: "Soğuk Kahve",
        description: "",
        image: "",
        price: 150,
        allergents: [],
      },
      {
        title: "Churchill",
        description: "",
        image: "",
        price: 80,
        allergents: [],
      },
    ],
  },
  {
    title: "Sıcak İçecekler",
    description: "Buharıyla Bile Dinlendirir!",
    image: "/images/menu/hot/hot.jpg",
    items: [
      { title: "Çay", description: "", image: "", price: 30, allergents: [] },
      {
        title: "Türk Kahvesi",
        description: "",
        image: "",
        price: 75,
        allergents: [],
      },
      {
        title: "Neskafe",
        description: "",
        image: "",
        price: 100,
        allergents: [],
      },
      {
        title: "Filtre Kahve",
        description: "",
        image: "",
        price: 10,
        allergents: [],
      },
      {
        title: "Espresso",
        description: "",
        image: "",
        price: 80,
        allergents: [],
      },
      {
        title: "Doppio",
        description: "",
        image: "",
        price: 130,
        allergents: [],
      },
      {
        title: "Bitki Çayı",
        description: "",
        image: "",
        price: 30,
        allergents: [],
      },
      {
        title: "Sıcak Çikolata",
        description: "",
        image: "",
        price: 100,
        allergents: [],
      },
      { title: "Sahlep", description: "", image: "", price: 0, allergents: [] },
      {
        title: "Oralet",
        description: "",
        image: "",
        price: 30,
        allergents: [],
      },
      {
        title: "Tarçın",
        description: "",
        image: "",
        price: 30,
        allergents: [],
      },
      {
        title: "Cappuccino",
        description: "",
        image: "",
        price: 150,
        allergents: [],
      },
      {
        title: "Mocha",
        description: "",
        image: "",
        price: 150,
        allergents: [],
      },
      {
        title: "Americano",
        description: "",
        image: "",
        price: 120,
        allergents: [],
      },
      {
        title: "Latte Macchiato",
        description: "",
        image: "",
        price: 150,
        allergents: [],
      },
      {
        title: "Apa Colda",
        description: "",
        image: "",
        price: 130,
        allergents: [],
      },
      {
        title: "Sütlü Kahve",
        description: "",
        image: "",
        price: 100,
        allergents: [],
      },
    ],
  },
];
